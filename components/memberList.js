import satori from '../public/satori.png'
import potato from '../public/potato.jpg'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'


const getMembers = () => {
    return [
        {
            name: "Threniodine",
            pfp: satori
        },
        {
            name: "Jojo",
            pfp: potato
        },
        {
            name: "Pope\xA0Cheetos\xA0XIV",
            pfp: potato
        },
        {
            name: "LaRosa",
            pfp: potato
        },
        {
            name: "Peesh",
            pfp: potato
        },
        {
            name: "Logan\xA0Paul\xA0Ryan",
            pfp: potato
        },
        {
            name: "Jhuynh23",
            pfp: potato
        },
        {
            name: "1nsurrection",
            pfp: potato
        }
    ]
}

export default function memberList(){
    const members = getMembers();
    members.sort((first, second) => {
        if(first.name.toLowerCase() < second.name.toLowerCase()) return -1;
        if(first.name.toLowerCase() > second.name.toLowerCase()) return 1;
        return 0;
      })
    return (
        <div className={styles.grid}>
          {members.map((n,i) => <Link key={i} href={`/${n.name.toLowerCase()}`}><a  className={styles.memberCard}>
          <Image src={n.pfp} width={100} height={100} />
          <p>{n.name}</p>
          </a></Link>)}
        </div>
    )
}

