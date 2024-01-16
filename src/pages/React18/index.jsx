


import React from 'react'
import {Link} from 'react-router-dom'
import styles from './react18.module.scss'

function TestReact18() {
    return (
        <ul className={styles.list}>
            <li><Link to="/react18/use-transition">useTransition</Link></li>
        </ul>
    )
}

export default TestReact18


