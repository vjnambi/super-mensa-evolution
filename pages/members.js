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



export async function getServerSideProps({params}){
  const response = await axios.get('https://super-mensa-evolution.vercel.app/api/members');
  const memberListData = response.data.resources
  //console.log(memberListData);
  return {
    props: {
      memberListData
    }
  };
}

export default function Members({ memberListData }) {
    return (
      <div className={styles.container}>
        {head()}
  
        {banner()}
        
        <main className={styles.main}>

          <h2>Members</h2>
          <div className={styles.grid}>
          {console.log(memberListData)}
          {memberListData.map( (n,i) => <Link key={i} href={`members/${n.Route}`}><a key={i}  className={styles.memberCard}>
          <Image key={memberListData.length+i} src={n.PFPLink} width={100} height={100} />
          <p key={i}>{n.MemberName}</p>
          </a></Link>)}
          </div>
          
        </main>
      </div>
    )
  }