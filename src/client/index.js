/*
    这个文件会被打包成client.js, 和server.js在同一目录下，需要在发送给客户端的html中利用script标签引入client.js
*/

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { preloadReady, preloadAll } from 'react-loadable';
import routes from '../routes'
import '../sass/base.scss' //client.js里引入的css会被打包为main.css
import { Provider } from 'react-redux';
import getClientStore from '../store/clientStore'

// hydrate的作用：不同于render方法，它是完成事件绑定
/*
    使用React-loadable或类似code splitting库，需要加载component后再hydrate, 否则会导致服务端和客户端渲染不一致
    preloadReady:
    preloadAll: 全部加载完成，会一次性下载所有分包（没有了code splitting的意义）
*/

window.main = ()=>{
    preloadReady().then(_=>{  
        ReactDOM.hydrate(
            <Provider store={getClientStore()}>
                <Router>{renderRoutes(routes)}</Router>
            </Provider>
          ,document.querySelector('#root'))
    }) 
}