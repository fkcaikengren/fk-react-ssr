import React from 'react'

function Child(props) {
    const {list, setList, deleteLanguage} = props
    console.log('child - list.length:'+list.length)
    return (
        <div>
            {
                list.map((item,i)=>(
                    <li key={i}>
                        {item.content} &nbsp; <button onClick={_=>{
                            deleteLanguage(item.id)
                        }}>delete</button>
                    </li>
                ))
            }
        </div>
    )
}
/*
React.memo(component , ?(preProps,nextProps)=>bool) 构建纯组件，
相当于shouldComponentUpdate
本质是：会对前后的props进行一次浅比较，从而判断是否render
*/
export default React.memo(Child)
