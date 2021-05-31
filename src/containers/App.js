
import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../components/Header'

function App(props) {
    
    return (
        <Fragment>
            <Header></Header>
            {renderRoutes(props.route.routes)}
        </Fragment>
    )
}

export default App


