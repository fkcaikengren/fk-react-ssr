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


// hydrate的作用：不同于render方法，它是完成事件绑定
// ReactDOM.hydrate(
//     <Router>
//         {renderRoutes(routes)}
//     </Router>
// ,document.querySelector('#root'))


/*
    使用React-loadable或类似
*/

window.main = ()=>{
    preloadAll().then(_=>{  
        ReactDOM.hydrate(
            <Router>
                {renderRoutes(routes)}
            </Router>
          ,document.querySelector('#root'))
    }) 
}