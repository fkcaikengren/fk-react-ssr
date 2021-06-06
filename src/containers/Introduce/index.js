import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WrapPage from '../../components/WrapPage'
import { load } from '../../store/modules/introduce'
import styles from './style.module.scss'

function Introduce() {
    let {data} = useSelector(state=>state.introduce)
    const dispatch = useDispatch()
    useEffect(()=>{ //仅在lient端执行
        dispatch(load())
    },[])

   
    const list = data?data.list:[{
        id: 77,
image: "https://newimg.jspang.com/BBD64.jpg",
order_id: 0,
title: "2021前端开发学习路径 一张图让你轻松自学",
type_id: 1,
url: "https://www.jspang.com/detailed?id=72",
    }]
    return (
        <div className={styles.introduce} >
            {list.length &&
                list.map((item)=>(
                    <a className={styles.item} key={item.id} href={item.url}>
                        <div className={styles.cover_wrapper}>
                            <img className={styles.cover} src={item.image} alt="cover" />
                        </div> 
                        <p className={styles.title}>{item.title}</p>
                    </a>
                ))
            }
        </div>
    )
}

const loadData = (store)=>{
    return store.dispatch(load())
}
export default WrapPage({title:'introduce',loadData})(Introduce)
