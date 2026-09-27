import { useEffect, useState } from "react";
import styles from "./loginpage.module.css"




const LoginPage = ()=>{


    return(
        <div className={styles.LoginCard}>
            <section className={styles.Email}>
                <h1>email</h1>
                <input type="text" placeholder="enter your email-address..." />
            </section>

            <section className={styles.Password}>
                <h1>password</h1>
                <input type="text" placeholder="enter your password..."/>
            </section>

            <section className={styles.Footer}>
                <h3><u><b>forgot password?</b></u></h3>
            </section>
        </div>
    )
}


export default LoginPage;