
import React, {useMemo, memo} from 'react'
function Child({langs, changeLang}) {

  console.log('Child2 --') //changeLang变化导致执行
  return (
      <div>
        <button style={{marginBottom:'10px'}} onClick={changeLang}>切换语言</button>
          <ul>
            {langs.map((item,i)=>(
              <li key={i}>{item.content}</li>
            ))
            }
          </ul>
      </div>
  )
}

/*
React.memo(component , ?(preProps,nextProps)=>bool) 构建纯组件，
相当于shouldComponentUpdate
本质是：会对前后的props进行一次浅比较，从而判断是否render
*/
export default React.memo(Child)