


import React from 'react'
import {Link} from 'react-router-dom'
import styles from './custom-hook.module.scss'

function TcustomHook() {
    return (
        <ul className={styles.list}>
            <li><Link to="/custom-hook/bind">useBind</Link></li>
            <li><Link to="/custom-hook/fetch">useFetch</Link></li>
            <li><Link to="/custom-hook/table">useTable</Link></li>
        </ul>
    )
}

export default TcustomHook


