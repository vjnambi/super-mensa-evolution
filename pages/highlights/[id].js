import styles from '../../styles/Home.module.css'
import banner from '../../components/banner'
import head from '../../components/head'
import { getAllHighlightIds, getHighlightData } from '../../lib/highlights'
import Image from 'next/image'
import condImage from '../../components/condImage'
import condIframe from '../../components/condIframe'
import { Button } from '@material-ui/core'
import axios from 'axios'

export async function getStaticProps({params}){
  const axios = require('axios')
  //console.log(`getStaticPropsAddress: http://localhost:3000/api/members/${params}`)
  const response = await axios.get(`https://super-mensa-evolution.vercel.app/api/highlights/${params.id}`);
  const highlightData = response.data.resources[0];
  //console.log(`getStaticProps: memberData: ${JSON.stringify(memberData)}`);
  return {
    props: {
      highlightData
    }
  };
}

export async function getStaticPaths() {
  //console.log(getAllMemberIds())
  const paths = await getAllHighlightIds()
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export default function Highlight({ highlightData }) {
  //console.log(`MemberRender: ${JSON.stringify(memberData)}`)
  return (

    <div className={styles.container}>
      {head()}
      {banner()}
      <main className={styles.main}>
        <div style={{width: '100%', margin: '10px'}} className={styles.centered}>
          <h2 className={styles.centered}>{highlightData.HighlightName}</h2>
        </div>
        {condIframe(`https://www.youtube.com/embed/${highlightData.YTID}`)}
      </main>
    </div>
  )
}
