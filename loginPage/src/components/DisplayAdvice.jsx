import { useState } from 'react';
import styles from './displayadvice.module.css'



const DisplayAdvice = () => {

    const [advice, setAdvice] = useState([])


    const getAdvice = async()=>{
        const gettingData = await fetch(`https://api.adviceslip.com/advice`, {cache: "no-store"});
        
        const convertDataToJSON = await gettingData.json();

        setAdvice(convertDataToJSON.slip.advice)
        console.log(advice)
    }


  return (

    <>
        <h1 className={styles.getAdvice}>Get Advice</h1>
        <section className={styles.dashBoard}>
            <p placeholder='He Who Thinks Has Nothing But Thoughts!'>{advice}</p>
        </section>
        <button onClick={getAdvice} className={styles.clickMe}>Click Me For A Piece Of Advice</button>
    </>

  )

}

export default DisplayAdvice