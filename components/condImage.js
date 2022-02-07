import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function condImage(target){
if(!(target === "" || target === null)){
    return(
    <div className={styles.highlightImageWrapper}>
        <Image src={target} layout="fill"></Image>
    </div>
    )} else {
    return(<span></span>);
}
}