import Head from 'next/head'
import memberList from '../components/memberList'
import styles from '../styles/Home.module.css'
import banner from '../components/banner'
import bannerSpacer from '../components/bannerSpacer'
import head from '../components/head'

export default function Members() {
    return (
      <div className={styles.container}>
       {head()}
  
        {banner()}
        {bannerSpacer()}
        
        <main className={styles.main}>
          <h2>Members</h2>
          {memberList()}
          
        </main>
      </div>
    )
  }