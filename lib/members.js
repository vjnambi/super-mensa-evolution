import matter from 'gray-matter';
import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs'
import path from 'path';

const membersDirectory = path.join(process.cwd(), 'members')
const publicDirectory = path.join(process.cwd(), 'public')

export function getAllMemberIds() {
    const fileNames = fs.readdirSync(membersDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })

}

export async function getMemberData(id) {
    const fullPath = path.join(membersDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}