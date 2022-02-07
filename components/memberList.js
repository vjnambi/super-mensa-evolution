import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'


const getMembers = () => {
    return [
        {   
            name: "Threniodine",
            pfp: "https://cdn.discordapp.com/avatars/415343944260386820/a77f9669ae0f5885fbf05bf797ec295c.webp"
        },
        {
            name: "Jojo Pongo",
            pfp: "https://cdn.discordapp.com/avatars/217816673443381248/8f9b54e18bdf728b26a343feb4ffa023.webp"
        },
        {
            name: "Pope Cheetos XIV",
            pfp: "https://cdn.discordapp.com/avatars/144207815433519105/6d44c3ccd038db7a82f7c22496a7f8cf.webp"
        },
        {
            name: "LaRosa",
            pfp: "https://cdn.discordapp.com/avatars/205199508999634944/c8d38c5fb6adea059ab7256c3838e359.webp"
        },
        {
            name: "Peesh",
            pfp: "https://cdn.discordapp.com/avatars/177253048337432576/10379f39295824227ecb2557aabcc470.webp"
        },
        {
            name: "Logan Paul Ryan",
            pfp: "https://cdn.discordapp.com/avatars/212391571646185483/b164a3752259cc95c57c11288860c22e.webp"
        },
        {
            name: "Jhuynh23",
            pfp: "https://cdn.discordapp.com/avatars/250870240462766080/bb0735b21dbc7b98cedfb5dd24aa0cef.webp"
        },
        {
            name: "1nsurrection",
            pfp: "https://cdn.discordapp.com/avatars/221652183278419968/4cade8322c684359ff0e0b50c093f590.webp"
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
          {members.map( (n,i) => <Link key={i} href={`/members/${encodeURI(n.name.toLowerCase())}`}><a key={i}  className={styles.memberCard}>
          <Image key={members.length+i} src={n.pfp} width={100} height={100} />
          <p key={i}>{n.name}</p>
          </a></Link>)}
        </div>
    )
}

