import React,{useEffect} from 'react'

function Example1() {
    useEffect(() => {
      console.log('Child useEffect ...')
    })
    return (
        <div>
            Child
        </div>
    )
}

export default Example1
