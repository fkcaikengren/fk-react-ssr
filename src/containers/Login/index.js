import React from 'react'
import styles from './style.scss'
import Header from '../../components/Header'

function Login() {
    return (
        <div className={styles.container}>
            <Header transparent></Header>
            <div className={styles.login_wrapper}>
                <div className={styles.header}>Login</div>
                <div className={styles.form_wrapper}>
                    <input type="text" name="username" placeholder="username" className={styles.input_item} />
                    <input type="password" name="password" placeholder="password" className={styles.input_item} />
                    <div id="login" className={styles.btn}>Login</div>
                </div>
                <div className={styles.msg}>
                    Don't have account? <a href="">Singn up</a>
                </div>
            </div>
        </div>
    )
}

export default Login
