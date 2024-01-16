
import Toggle from './components/Toggle'

// 回调函数实现插槽
function TRenderProps() {
    return (
        <div >
            <Toggle render={show=>(
                <div>
                    {show &&
                        <h2>我是第一个</h2>
                    }
                    {!show &&
                        <div>loading ..</div>
                    }
                </div>
            )}/>
            <Toggle render={show=>(
                <div>
                    {show &&
                        <h2>I'm second</h2>
                    }
                    {!show &&
                        <div>loading ..</div>
                    }
                </div>
            )}/>
        </div>
    )
}

export default TRenderProps

