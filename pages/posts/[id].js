import styles from '../../styles/Home.module.css'
import banner from '../../components/banner'
import bannerSpacer from '../../components/bannerSpacer'
import head from '../../components/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Image from 'next/image'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (

    <div className={styles.container}>
      {head()}
      {banner()}
      {bannerSpacer()}
      <main className={styles.main}>
        <div>
          <h2>{postData.name}</h2>
        </div>
        <iframe width="840" height="472" src={postData.highlight} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
    </div>
  )
}
