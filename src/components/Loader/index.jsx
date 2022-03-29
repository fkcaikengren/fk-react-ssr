

import React, { memo } from 'react'
import styles from './loader.scss'
function Loader(props) {
    const {size}  = props
    return (
        <div className='spinner' style={{width:size+'px',height:size+'px'}}>
        </div>
    )
}

export default memo(Loader)
