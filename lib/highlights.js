import matter from 'gray-matter';
import { remark } from 'remark'
import html from 'remark-html'
import path from 'path';

export async function getAllHighlightIds() {
    const axios = require('axios');
    const response = await axios.get('https://super-mensa-evolution.vercel.app/api/highlights')
    const highlightListData = await response.data.resources
    /*console.log( memberListData.map(memberListItem => {
        return {
            params: {
                id: `${memberListItem.Route}`
            }
        }
    }))*/
    return highlightListData.map(highlightListItem => {
        return {
            params: {
                id: `${highlightListItem.HighlightID}`
            }
        }
    })

}
