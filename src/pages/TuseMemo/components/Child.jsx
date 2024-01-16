import React, { useMemo } from 'react'

function Child({a,b}) {
    
    // 计算属性，当依赖不变直接返回缓存值
    const c = useMemo(()=>{
        console.log('执行useMemo 回调')
        return b*100*12
    }, [b])

    console.log({a,b})

    return (
        <div>
            <p>{a}</p>
            <p>计算b得到：{c}</p>
        </div>
    )
}

export default Child
