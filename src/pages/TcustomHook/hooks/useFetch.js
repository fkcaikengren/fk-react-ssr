
import {useState, useEffect, useCallback} from 'react'

 /*issue:  
  1.每次传入了新的params导致fetchApi变化，然后重新执行fetchApi
    解决： 用useState()缓存params

  2.更新参数时，重新请求
    暴露一个修改params的接口

  3.fetch数据时loading
    保存一个loading状态

  4.不更新参数时，用户手动点击刷新页面按钮
    暴露一个刷新接口
  
 */
function useFetch(url, params) {
   
    const [data, setData] = useState({});
    const [parameters, setParameters] = useState(params)
    const [loading, setLoading] = useState(false)
    const fetchApi = useCallback(async () => {
      setLoading(true)
      const data = await fetch(url).then(res => res.json())
      console.log(data)
      setData(data);
      setLoading(false)
    }, [url,parameters]);
  
    const doFetch = useCallback((newParams)=>{
      setParameters(newParams)
    })

    const reFetch = useCallback(()=>{
      setParameters({...parameters})
    },[parameters])
  
    useEffect(()=>{
      console.log('fetch ---- ')
      fetchApi()
    },[fetchApi])
    return {data,loading, doFetch, reFetch};
}
 
export default useFetch