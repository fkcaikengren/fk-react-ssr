

import React from 'react'
import {Link} from 'react-router-dom'
import styles from './style.scss'

function Header(props) {
    return (
        <div className={`${styles.header} ${props.transparent?styles.header_transparent:''}`} >
            <div className={styles.header_wrapper}>
            <Link className={styles.nav_brand} to='/'>CaiKengRen</Link>
            <div className={styles.wrapper_right}>
                <Link className={styles.nav} to='/introduce'>introduce</Link>
                <Link className={styles.nav} to='/login'>login</Link>
            </div>
            </div>
        </div>
    )
}

export default Header
