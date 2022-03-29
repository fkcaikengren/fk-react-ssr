


export const loadCount =  (promise)=>{
  const request = ()=>{
    return fetch('https://apiblog.jspang.com/default/getAllPartCount').then((res)=>res.json())
  }

  return {
    types: ['couter/load_start', 'couter/load_success', 'couter/load_failure'],
    promise: request
  }
}