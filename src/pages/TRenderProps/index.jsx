
import Toggle from './components/Toggle'
import styles from './render-props.module.scss'


function TRenderProps() {
    return (
        <div className={styles.container}>
            <Toggle render={state=>(
                <div>
                    <h2>toggle1</h2>
                </div>
            )}/>
            <Toggle render={state=>(
                <div>
                    <h2>toggle2</h2>
                </div>
            )}/>
        </div>
    )
}

export default TRenderProps

