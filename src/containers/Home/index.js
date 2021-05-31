
import React from 'react'
import styles from './style.scss'

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.main}>
                <h1>A SSR App Based on React</h1>
            </div>
            <div className={styles.sidebar}>
                <div className={`${styles.sidebar_item} ${styles.sidebar_title}`}>
                    Title
                </div>
                <div className={styles.sidebar_item}>
                    item one
                </div>
                <div className={styles.sidebar_item}>
                    item two
                </div>
            </div>
        </div>
    )
}

export default Home
