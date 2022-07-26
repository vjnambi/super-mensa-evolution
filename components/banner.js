import styles from '../styles/Home.module.css'
import SMELogo from '../public/SMELogo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function banner() {
    return (
        <>
        <div className={styles.banner}>
            <Link href="/"><a className={styles.bannerLogo}><Image src={SMELogo} width={64} height={64} /></a></Link>
            <Link href="/members"><a h className={styles.bannerCard}>Members</a></Link>
            <Link href="/highlights"><a h className={styles.bannerCard}>Highlights</a></Link>
            <Link href="/resources"><a className={styles.bannerCard}>Resources</a></Link>
        </div>
        <div className={styles.bannerSpacer}></div>
        </>
    )
}