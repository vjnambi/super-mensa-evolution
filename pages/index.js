import Head from 'next/head'
import styles from '../styles/Home.module.css'
import missionStatement from '../components/missionStatement'
import banner from '../components/banner'
import bannerSpacer from '../components/bannerSpacer'
import head from '../components/head'
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
      {head()}

      {banner()}
      {bannerSpacer()}
      
      <main className={styles.main}>
               
        <h1 className={styles.title}>
          Super Mensa<br />Evolution
        </h1>

        {missionStatement()}
        
      </main>
        
      

    </div>
  )
}
