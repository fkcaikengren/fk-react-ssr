
import React,{useState, useMemo, useCallback} from 'react'
import Child from './components/Child'
import Child2 from './components/Child2'
function TuseMemo() {
    const [listIndex, setListIndex] = useState(0)
    const [list, setList] = useState([
        {id:'1', content:'Java'},
        {id:'2', content:'Python'},
        {id:'3', content:'Golang'},
        {id:'4', content:'Javascript'}
    ])
    const [a, setA] = useState('start')
    const [b, setB] = useState(0.5)
    // 每次得到新方法，使得Child2重新渲染
    // const changeLanguage = _=>{
    //     setListIndex((listIndex+1)%list.length)
    // }
    const changeLanguage = useCallback(_=>{
        setListIndex((listIndex+1)%list.length)
    }, [listIndex, list]) //这里必须依赖listIndex，否则拿不到listIndex最新值
    //即，依赖listIndex才能拿到闭包的外部函数内部变量，否则只是拿到一个值。
 
    
    return (
        <div>
            <h2 style={{marginBottom:'10px'}}>当前语言：{list[listIndex]?.content}</h2>
            <button onClick={()=>{setA('end')}}>修改a为‘end’</button>
            <br />
            修改b:
            <input onChange={(e)=>{
                setB(e.target.value)
            }}/>
            <hr />
            <Child 
                a={a}
                b={b}
            ></Child>
            <hr />

            <Child2 
                langs = {list}
                changeLang={changeLanguage}
            ></Child2>
        </div>
    )
}


export default TuseMemo
