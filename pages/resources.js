import Head from 'next/head'
import memberList from '../components/memberList'
import styles from '../styles/Home.module.css'
import banner from '../components/banner'
import bannerSpacer from '../components/bannerSpacer'
import head from '../components/head'
import { useState } from 'react'
import Script from 'next/script'

export default function Resources() {
    const [result, setResult] = useState("???")
    const [apiKey, setApiKey] = useState("")

    const fetchResult = () => {
        fetch(`https://na1.api.riotgames.com/lol/clash/v1/tournaments?api_key=${apiKey}`)
            .then(result => result.json())
            .then(data => setResult(parseFloat(
                (data[data.length - 1].schedule[0].startTime - Date.now()) / (1000 * 60)
            )))
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
            {bannerSpacer()}
            <main className={styles.main}>
                <form onSubmit={handleSubmit} className={styles.main}>
                    <input type="text" placeholder='API Key' value={apiKey} onChange={handleApiKeyChange}></input>

                    <br />
                    <button>Submit</button>
                    <br />
                    {result == "???" ? "???" : Math.round(result / (60 * 24))} days, {result == "???" ? "???" : Math.round(result / (60)) % 24} hours and {result == "???" ? "???" : Math.round(result) % 60} minutes until clash
                </form>



            </main>

        </div>
    )
}