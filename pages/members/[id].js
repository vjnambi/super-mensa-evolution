import styles from '../../styles/Home.module.css'
import banner from '../../components/banner'
import bannerSpacer from '../../components/bannerSpacer'
import head from '../../components/head'
import { getAllMemberIds, getMemberData } from '../../lib/members'
import Image from 'next/image'
import condImage from '../../components/condImage'
import condIframe from '../../components/condIframe'

export async function getStaticProps({ params }) {
  const memberData = await getMemberData(params.id)
  return {
    props: {
      memberData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllMemberIds()
  return {
    paths,
    fallback: false
  }
}

export default function Member({ memberData }) {
  return (

    <div className={styles.container}>
      {head()}
      {banner()}
      {bannerSpacer()}
      <main className={styles.main}>
        <div>
          <h2>{memberData.name}</h2>
        </div>
        {condImage(memberData.image)}
        {condIframe(memberData.highlight)}
        
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: memberData.contentHtml }} />
      </main>
    </div>
  )
}
