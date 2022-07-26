import Head from 'next/head'
import memberList from '../components/memberList'
import styles from '../styles/Home.module.css'
import banner from '../components/banner'
import head from '../components/head'
import { useState } from 'react'
import Script from 'next/script'
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

export default function Resources() {
    const [result, setResult] = useState("???")
    const [apiKey, setApiKey] = useState("")

    const fetchResult = () => {
        fetch(`https://na1.api.riotgames.com/lol/clash/v1/tournaments?api_key=${apiKey}`)
            .then(result => result.json())
            .then(things => things.sort((first, second) => {
                if(first.schedule[0].startTime < second.schedule[0].startTime) return -1;
                if(first.schedule[0].startTime > second.schedule[0].startTime) return 1;
                return 0;
              }))
            .then(data => setResult(data))
            .catch(error => console.log(error));
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchResult();
    }

    const handleApiKeyChange = (e) => {
        setApiKey(e.target.value)
    }


    return (
        <div className={styles.container}>
            {head()}

            {banner()}
            <main className={styles.main}>
                <form onSubmit={handleSubmit} className={styles.main}>
                    <h2>Guys what time is clash?</h2>
                    <input type="text" placeholder='API Key' value={apiKey} onChange={handleApiKeyChange}></input>

                    <br />
                    <button>Submit</button>
                    <br />
                    <table className={styles.onePxSolidBlack}>
                        <tr>
                            <th className={styles.onePxSolidBlack}>Tournament</th>
                            <th className={styles.onePxSolidBlack}>Day</th>
                            <th className={styles.onePxSolidBlack}>Date</th>
                            <th className={styles.onePxSolidBlack}>Time</th>
                        </tr>
                        {result == "???"
                            ?
                            <tr>
                                <td className={styles.onePxSolidBlack}>???</td>
                                <td className={styles.onePxSolidBlack}>???</td>
                                <td className={styles.onePxSolidBlack}>???</td>
                                <td className={styles.onePxSolidBlack}>???</td>
                            </tr>
                            :
                            result.map((n,i) => 
                                <tr>
                                    <td className={styles.onePxSolidBlack}>{n.nameKey}</td>
                                    <td className={styles.onePxSolidBlack}>{n.nameKeySecondary}</td>
                                    <td className={styles.onePxSolidBlack}>{new Date(1970,0,0,17,0,0,n.schedule[0].startTime).toLocaleDateString()}</td>
                                    <td className={styles.onePxSolidBlack}>{`${new Date(1970,0,0,17,0,0,n.schedule[0].startTime).toLocaleTimeString()} (${Intl.DateTimeFormat().resolvedOptions().timeZone})`}</td>
                                </tr>
                        )}
                    </table>
                    
                </form>



            </main>

        </div>
    )
}