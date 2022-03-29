

import React from 'react'
import Grandson from './Grandson'
import styles from '../context.module.scss'

function Son() {
    return (
        <div className={styles.son}>
            <br />
            [Son]
            <Grandson/>
        </div>
    )
}

export default Son
