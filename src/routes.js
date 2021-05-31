import React from 'react'
import Loadable from 'react-loadable'
/*一定要注意：
    1）import()语法中到webpackChunkName:'xx'并非是注释，而是设置代码分割后到chunkName, 
    这个名字能在webpack配置到output.chunkFilename中拿到，作用于输出到包名。
    2）Loadable的参数：modules，这个参数是标记模块名，webpack在处理时通过react-loadable/webpack
    插件来完成映射：moduleName->资源路径+名称等。这个映射信息可以保存在一个指定的json文件中
    必要时，可以通过getBundles来利用moduleName查找资源

*/

const Login = Loadable({
    loader:() => import(/*webpackChunkName:'login'*/"./containers/Login"),
    loading:()=><div>loading...</div>,
    modules: ['login'],
})


const App = Loadable({
    loader:() => import(/*webpackChunkName:'webapp'*/"./containers/App"),
    loading:()=><div>loading...</div>,
    modules: ['webapp']
})

const Home = Loadable({
    loader:() => import(/*webpackChunkName:'home'*/"./containers/Home"),
    loading:()=><div>loading...</div>,
    modules: ['home']
})

const Introduce = Loadable({
    loader:() => import(/*webpackChunkName:'introduce'*/"./containers/Introduce"),
    loading:()=><div>loading...</div>,
    modules: ['introduce']
})



export default [
    {
        path:'/login',
        key:'login',
        exact:true,
        component: Login,
    },
    {
        path:'/',
        key:'app',
        component:App,
        loadData:Home.loadData,
        // 子路由
        routes:[
            {
                path:'/',
                key:'home',
                exact:true,
                component:Home,
                loadData:Home.loadData,
            },
            {
                path:'/introduce',
                key:'introduce',
                component:Introduce,
                loadData:Introduce.loadData
            },
        ]
    }
]

