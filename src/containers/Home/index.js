
import React,{useState,useEffect} from 'react'
import {Tag } from 'antd'
import styles from './style.module.scss'
import {useDispatch, useSelector } from 'react-redux'
import { load } from '../../store/modules/home'
import WrapPage from '../../components/WrapPage'


function Home() {
    let {data} = useSelector(state=>state.home)
    const dispatch = useDispatch()
    // console.log(data)
    useEffect(()=>{ //仅在lient端执行
        dispatch(load())
    },[])
    const topList = data?data.topList:[]
    const list = data?data.list:[]
    
  
    return (
        <div className={styles.home}>
            <section className={styles.section}>
            {topList.length &&
                topList.map((topItem,index)=>{
                    return <div key={index}>
                    <h2>{topItem.title}</h2>
                    <div>
                        <Tag color="gold">置顶</Tag>
                        <Tag color="gold">共{topItem.part_count}集</Tag>
                        <span>{topItem.addTime}</span>
                        <span>视频教程</span>
                        <span>{topItem.view_count}人</span>
                    </div>
                    <div>
                    <div dangerouslySetInnerHTML={{__html:topItem.introduce_html}}></div>
                    </div>
                    <div></div>
                </div>
                })
            }
            </section>
            <section className={styles.section}>
                {list.length && 
                    list.map(item=>{
                        return <div key={item.id} className={styles.param}>
                            <h2>{item.title}</h2>
                            <div >
                                <span className={styles.greytag}>{item.addTime}</span>
                                <span className={styles.greytag}>{item.typeName}</span>
                                <span className={styles.greytag}>{item.view_count}</span>
                            </div>
                            <div className={styles.inner_html} dangerouslySetInnerHTML={{__html:item.introduce_html}}></div>
                            <span className={styles.see_more}>查看全文</span>
                        </div>
                    })

                }
            </section>

        </div>
    )
}

const loadData = (store)=>{
    return store.dispatch(load())
}

export default WrapPage({title: 'Home', loadData})(Home)
