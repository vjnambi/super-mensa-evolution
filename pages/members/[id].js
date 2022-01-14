import styles from '../../styles/Home.module.css'
import banner from '../../components/banner'
import bannerSpacer from '../../components/bannerSpacer'
import head from '../../components/head'
import { getAllMemberIds, getMemberData } from '../../lib/members'
import Image from 'next/image'

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
        <div className={styles.highlightWrapper}>
        <iframe className={styles.highlightVideo} src={memberData.highlight} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div dangerouslySetInnerHTML={{ __html: memberData.contentHtml }} />
      </main>
    </div>
  )
}
