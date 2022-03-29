
import React,{useState, useMemo, useCallback} from 'react'
import Child from './components/Child'
function TuseMemo() {
    const [listIndex, setListIndex] = useState(0)
    const [list, setList] = useState([
        {id:'1', content:'Java'},
        {id:'2', content:'Python'},
        {id:'3', content:'Golang'},
        {id:'4', content:'Javascript'}
    ])
    const [other, setOther] = useState(true)
    // 每次得到新方法，使得Child重新渲染
    // const changeLanguage = _=>{
    //     setListIndex((listIndex+1)%list.length)
    // }
    /* 用useCallback缓存方法:
        useCallback将里边的变量保留了副本，
        如果是基础类型值，这保存了值副本
        如果是对象则是保留对象的引用副本
        第二参数是数组[],当数组的依赖项变化，才会重新重新建一个函数（即创建新副本）
    */
    const changeLanguage = useCallback(_=>{
        console.log('changeLanguage - list.length' + list.length)
        setListIndex((listIndex+1)%list.length)
    },[listIndex, list]) //观察listIndex有和无时打印结果
    const deleteLanguage = useCallback(id=>{
        const arr = list.filter((item)=>item.id!==id)
        setList(arr)
    },[list])
    /* 用useMemo缓存变量:
        只有当依赖项发生改变时，才会重新调用函数获取新对象
     */
    const others = useMemo(_=>({other:!other}), [other])
    return (
        <div>
            <h1>{list[listIndex].content }</h1>
            <button onClick={changeLanguage}>change language</button>
            <hr />
            <Child 
                list={list} 
                setList={setList} 
                deleteLanguage={deleteLanguage}
                others={others}
            ></Child>
        </div>
    )
}


export default TuseMemo
