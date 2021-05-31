import React from 'react'
const  str =   `
<StaticRouter location='/login'>
  {renderRoutes(routes)}
</StaticRouter>
`
function Introduce() {
    return (
        <div className='fluid-container'>
            <div className='block'>
                <h2>StaticRouter</h2>
                <p>
                无状态（stateless）的路由，也就是不会运行js代码，不同于BrowserRouter可以检测地址栏的变化并渲染对应的组件。
                    1.控制StaticRouter显示哪个组件，需要传入location参数来控制
                </p>
                <code className='code'>
                    {str}
                </code>
                <p>关键</p>
            </div>
            <div className='block'>
                <h2>StaticRouter</h2>
                <p>
                无状态（stateless）的路由，也就是不会运行js代码，不同于BrowserRouter可以检测地址栏的变化并渲染对应的组件。
                    1.控制StaticRouter显示哪个组件，需要传入location参数来控制
                </p>
                <code className='code'>
                    {str}
                </code>
                <p>关键</p>
            </div>
        </div>
    )
}

export default Introduce
