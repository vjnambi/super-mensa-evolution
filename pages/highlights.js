import Head from 'next/head'
import memberList from '../components/memberList'
import styles from '../styles/Home.module.css'
import banner from '../components/banner'
import head from '../components/head'
import Image from 'next/image'
import Link from 'next/link'
const { CosmosClient } = require("@azure/cosmos");
import config from "../config";
const axios = require('axios');
import SMELogo from '../public/SMELogo.png'



export async function getStaticProps({params}){
  const response = await axios.get('https://super-mensa-evolution.vercel.app/api/highlights');
  const highlightListData = response.data.resources
  //console.log(memberListData);
  return {
    props: {
      highlightListData
    }
  };
}

export default function Highlights({ highlightListData }) {
    return (
      <div className={styles.container}>
        {head()}
  
        {banner()}
        
        <main className={styles.main}>

          <h2>Highlights</h2>
          <div className={styles.grid}>
          {highlightListData.map( (n,i) => <Link key={i} href={`highlights/${n.HighlightID}`}><a key={i}  className={styles.memberCard}>
          <Image key={highlightListData.length+i} src={`https://img.youtube.com/vi/${n.YTID}/hqdefault.jpg`} width={100} height={100} />
          <p key={i}>{n.HighlightName}</p>
          </a></Link>)}
          </div>
          
        </main>
      </div>
    )
  }