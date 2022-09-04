const { CosmosClient } = require("@azure/cosmos");
import axios from "axios";
import { stringify } from "gray-matter";
import config from "../../../config";

  export default async function handler(req, res) {
    const endpoint = config.endpoint;
    const key = config.key;
    const database = config.database;
    const container = config.membersContainer;

    const client = new CosmosClient({ endpoint, key });
  
    const databaseID = client.database(database);
    const containerID = databaseID.container(container);
  
    if (endpoint) {
      const { id } =  req.query
      const querySpec = {
        query: `SELECT a.MemberName, a.PFPLink, a.Route, a.DescriptionLink, a.HighlightLink FROM a WHERE a.Route='${id}' AND a.ResourceType='0'`,
      };
  
      const responseJSON = await containerID.items
        .query(querySpec)
        .fetchAll();

      const descriptionLink = responseJSON.resources[0].DescriptionLink

      const descriptionResponse = await axios.get(descriptionLink).then(stuff => stuff.data)

      const descriptionText = descriptionResponse.match("TextStarter(.*)TextEnder")[1]

      //console.log(descriptionText)

      const combinedJSON = {
        ...responseJSON,
        descriptionText
      }


      res.status(200).json(combinedJSON)
    }
  }