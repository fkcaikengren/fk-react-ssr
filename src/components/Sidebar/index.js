


import React from 'react'
import { Affix, Tag } from 'antd'
import styles from './style.module.scss'


function Sidebar() {
    return (
        <div className={styles.sidebar} >
                <div className={styles.sidebar_card}>
                    <div className={styles.avatar_wrapper}>
                    <img className={styles.avatar} src="https://blogimages.jspang.com/blogtouxiang1.jpg" alt="" />
                    </div>
                    <h5 className={styles.nickname}>踩坑人</h5>
                    <p className={styles.introduction}>因为美好的东西都是免费的，比如水、阳光和空气，所以本站视频全部免费。</p>
                    <div className={styles.tags}>
                        <Tag color="volcano">Javascript</Tag>
                        <Tag color="purple">Typescript</Tag>
                        <Tag color="cyan">React</Tag>
                        <Tag color="green">Redux</Tag>
                        <Tag color="gold">Umi.js</Tag>
                        <Tag color="lime">Dva.js</Tag>

                    </div>
                </div>
                <div className={styles.sidebar_card}>
                    <div className={`${styles.card_item} ${styles.card_title}`}>
                        学习路线
                    </div>
                    <div className={styles.card_item}>
                        Javascript &gt;
                    </div>
                    <div className={styles.card_item}>
                        Typescript &gt;
                    </div>
                    <div className={styles.card_item}>
                        React &gt;
                    </div>
                </div>
                <Affix offsetTop={60}>
                    <div className={styles.sidebar_card}>
                        关注我的微信公主号：疯狂踩坑人
                    </div>
                </Affix>
            </div>
    )
}

export default Sidebar
