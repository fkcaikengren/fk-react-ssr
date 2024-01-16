
import React,{useState, useEffect, useRef, useLayoutEffect} from 'react'
import Child from './components/Child'

function TuseEffect() {

    const refCount = useRef(0)
    
    useEffect(()=>{
        console.log('parent useEffect ..')
    },[])
    console.log('parent render --')



    useEffect(() => {
        console.log(refCount.current); //输出2 表明是宏任务
    });

    Promise.resolve().then(() => {
        refCount.current += 1;
    });

    Promise.resolve().then(() => {
        refCount.current += 1;
    })


    const [count, setCount] = useState(100000);
  
  useLayoutEffect(() => {
    if (count === 100000) {
      setCount(10 + Math.random()*200);
    }
  }, [count]);

    return (
        <div>
            <div style={{padding:'20px'}}>
                <h2>useEffect是宏任务</h2>
                <Child></Child>
            </div>

            <div style={{padding:'20px'}}>
                <h2>二次渲染</h2>
                count: {count}
            </div>
        </div>
    )
}

export default TuseEffect
