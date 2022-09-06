import Head from 'next/head'
import memberList from '../components/memberList'
import styles from '../styles/Home.module.css'
import banner from '../components/banner'
import head from '../components/head'
import { useState } from 'react'
import Script from 'next/script'
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import Link from 'next/link'


export default function Resources() {
    const [result, setResult] = useState("???")
    const [apiKey, setApiKey] = useState("")

    const fetchResult = () => {
        const data = {
            search: apiKey,
            queryType: "simple",
            searchMode: "all",
            searchFields: "content",
            select: "content",
            count: "true"
        };

        fetch('https://sme-website-search-service.search.windows.net/indexes/sme-website-index/docs/search?api-version=2020-06-30', {
        method: 'POST',
        headers: {
            "api-key":"vYiOytQmAxpBdmkmr0KTTaggzAsz8nSxIECuNbpnbtAzSeA1auyF",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            setResult(data['value'])
        })
        .catch((error) => {
            console.error('Error:', error);
        });

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
                    <h2>Search</h2>
                    <input type="text" placeholder='Search Terms' value={apiKey} onChange={handleApiKeyChange}></input>

                    <br />
                    <button>Submit</button>
                    <br />
                        {result == "???"
                            ?
                            <></>
                            :
                            result.map((n,i) => 
                            <Link key={i} href={n.content.match("LinkStarter(.*)LinkEnder")[1]}><a>{n.content.match("LinkStarter(.*)LinkEnder")[1]}</a></Link>
                        )}        
                </form>



            </main>

        </div>
    )
}