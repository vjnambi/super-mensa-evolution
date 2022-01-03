import satori from '../public/satori.png'
import potato from '../public/potato.jpg'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'


const getMembers = () => {
    return [
        {   
            id: 1,
            name: "Threniodine",
            pfp: satori
        },
        {
            id: 2,
            name: "Jojo",
            pfp: potato
        },
        {
            id: 3,
            name: "Pope\xA0Cheetos\xA0XIV",
            pfp: potato
        },
        {
            id: 4,
            name: "LaRosa",
            pfp: potato
        },
        {
            id: 5,
            name: "Peesh",
            pfp: potato
        },
        {
            id: 6,
            name: "Logan\xA0Paul\xA0Ryan",
            pfp: potato
        },
        {
            id: 7,
            name: "Jhuynh23",
            pfp: potato
        },
        {
            id: 8,
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
          {members.map( (n,i) => <Link key={i} href={`/posts/${n.name.toLowerCase()}`}><a key={i}  className={styles.memberCard}>
          <Image key={i} src={n.pfp} width={100} height={100} />
          <p key={i}>{n.name}</p>
          </a></Link>)}
        </div>
    )
}

