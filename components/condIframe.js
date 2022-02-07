import styles from '../styles/Home.module.css'

export default function condIframe(target){
if(!(target === "" || target === null))
    return(
    <div className={styles.highlightVideoWrapper}>
        <iframe className={styles.highlightVideo} src={target} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    );
    
    else
    {return(<span></span>);}
}