import matter from 'gray-matter';
import { remark } from 'remark'
import html from 'remark-html'
import path from 'path';

export async function getAllMemberIds() {
    const axios = require('axios');
    const response = await axios.get('https://super-mensa-evolution.vercel.app/api/members')
    const memberListData = await response.data.resources
    /*console.log( memberListData.map(memberListItem => {
        return {
            params: {
                id: `${memberListItem.Route}`
            }
        }
    }))*/
    return memberListData.map(memberListItem => {
        return {
            params: {
                id: `${memberListItem.Route}`
            }
        }
    })

}
