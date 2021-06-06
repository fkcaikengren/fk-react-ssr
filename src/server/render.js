
import React from 'react'
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { matchRoutes, renderRoutes } from 'react-router-config'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable-ssr-addon';
import { Provider } from 'react-redux'
import stats from '../../dist/public/load-manifest.json'
import routes from '../routes'
import getServerStore from '../store/serverStore'


export default function(req, res){
    const store = getServerStore()


    let modules = ['main'];
    const context = {cssArr:[]}
    //renderToString只负责生成静态页面（不会注册事件，注册事件只能在浏览器中Dom树生成后才能执行）
    const content = renderToString(
        <Provider store={store}>
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
                <StaticRouter location={req.path} context={context}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Loadable.Capture>
        </Provider>
    )
    // console.log(req.path)  
    // console.log(modules)
    const bundles = getBundles(stats, modules);
    // console.log(bundles)
    const styles = bundles.css || [];
    const scriptArr = bundles.js || [];

    const links = styles.map(item=>`<link rel="stylesheet" href="${item.file}" ></link>`)
    // const scripts = scriptArr.map(item=>`<script src="${item.file}"></script>`)



    //match route and request
    const matchers = matchRoutes(routes,req.path)
    const promises = []
    matchers.forEach(matcher=>{
        if(matcher.route.component.loadData){
            promises.push(matcher.route.component.loadData(store))
        }
    })
    Promise.all(promises).then(results=>{
        // console.log(results.length)
        // console.log('---发送html---')
        //发送html
        res.send(`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My React SSR</title>
                ${links.join('\n')}
            </head>
            <body>
                <div id='root'>${content}</div>
            </body>
            <script>
                window.__state=${JSON.stringify(store.getState())}
            </script>
            <script src="${scriptArr[0].file}"></script>
            <script>window.main();</script>
            </html>
        `)
    }).catch(err=>{
        console.log(err)
    })


    
}