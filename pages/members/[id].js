import styles from '../../styles/Home.module.css'
import banner from '../../components/banner'
import head from '../../components/head'
import { getAllMemberIds, getMemberData } from '../../lib/members'
import Image from 'next/image'
import condImage from '../../components/condImage'
import condIframe from '../../components/condIframe'
import { Button } from '@material-ui/core'
import axios from 'axios'

export async function getServerSideProps({params}){
  const axios = require('axios')
  //console.log(`getStaticPropsAddress: http://localhost:3000/api/members/${params}`)

  //const response = await axios.get(`http://localhost:3000/api/members/${params.id}`);
  const response = await axios.get(`https://super-mensa-evolution.vercel.app/api/members/${params.id}`);
  
  const memberData = response.data.resources[0]
  const descriptionText = response.data.descriptionText

  console.log(response)
  //console.log(`getStaticProps: memberData: ${JSON.stringify(memberData)}`);
  return {
    props: {
      memberData,
      descriptionText
    }
  };
}

/*export async function getStaticPaths() {
  //console.log(getAllMemberIds())
  const paths = await getAllMemberIds()
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}*/

export default function Member({ memberData, descriptionText }) {
  //console.log(`MemberRender: ${JSON.stringify(memberData)}`)
  return (

    <div className={styles.container}>
      {head()}
      {banner()}
      <main className={styles.main}>
        <div style={{width: '100%', margin: '10px'}} className={styles.centered}>
          <Image className={styles.round} src={memberData.PFPLink} width={100} height={100}></Image>
          <h2 style={{marginLeft: '10px'}} className={styles.centered}>{memberData.MemberName}</h2>
        </div>
        {condIframe(memberData.HighlightLink)}
        <p>{descriptionText}</p>
      </main>
    </div>
  )
}
