

import React from 'react'
import {Helmet} from "react-helmet";
import {Affix} from 'antd'
import Header from '../Header'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import styles from './style.module.scss'

function WrapPage({title, loadData}) {
    return (Main) =>  {
        function WrapperComponent (){
            return <>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Affix offsetTop={0}>
                    <Header></Header>
                </Affix>
                <div className={styles.layout}>
                    <Main></Main>
                    <Sidebar></Sidebar>
                </div>
                
                <Footer></Footer>
            </>
        }
        if(loadData){
            WrapperComponent.loadData = loadData
        }
        return WrapperComponent
    }
}

export default WrapPage
