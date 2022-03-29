import React from 'react'
import Loader from '../../../../components/Loader'
import useFetch from '../../hooks/useFetch'
import {apiGetMenu, apiGetData} from '../../api'
function FetchExample() {
  
    const {data,loading:dateLoading, doFetch, reFetch} = useFetch(apiGetData, {});
    const {data:menuData,loading:menuLoading, doFetch:getMenuData, reFetch:refreshMenuData} = useFetch(apiGetMenu, {});

    const loading = dateLoading || menuLoading
    return <div>
        {loading &&
            <Loader size={30}/>
        }
        {!loading &&
            <>
                <p>Date ：{data.sysTime2}</p>
                <br />
                <button onClick={()=>{
                    // doFetch({})
                    reFetch()
                }}>重新获取Date</button>
                <hr />
        
                <p>Story name ：{menuData.story?menuData.story.name:''}</p>
                <br />
                <button onClick={()=>{
                    // getMenuData({})
                    refreshMenuData()
                }}>重新获取Menu</button>
            </>
        }

        </div>;
    
}
export default FetchExample