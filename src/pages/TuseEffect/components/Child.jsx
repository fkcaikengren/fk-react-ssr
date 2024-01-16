import React,{useEffect} from 'react'

function Child() {
    useEffect(() => {
      console.log('Child useEffect ...')
    }, [])
    console.log('child render --')
    return (
        <div>
            Child
        </div>
    )
}

export default Child
