const { CosmosClient } = require("@azure/cosmos");
import config from "../../config";

  export default async function handler(req, res) {
    const endpoint = config.endpoint;
    const key = config.key;
    const database = config.database;
    const container = config.membersContainer;

    const client = new CosmosClient({ endpoint, key });
  
    const databaseID = client.database(database);
    const containerID = databaseID.container(container);
  
    if (endpoint) {
      const querySpec = {
        query: "SELECT c.HighlightName, c.HighlightID, c.YTID FROM c WHERE c.ResourceType='1'",
      };
  
      const responseJSON = await containerID.items
        .query(querySpec)
        .fetchAll();
      res.status(200).json(responseJSON)
    }
  }