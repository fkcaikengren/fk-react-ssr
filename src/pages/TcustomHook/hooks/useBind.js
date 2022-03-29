import { useCallback, useState } from "react"

export default function useBind(initState){
    //理论上这里应该 useMemo(initState)
    const [value, setValue] = useState(initState)
    const onChange = useCallback((e)=>{
        setValue(e.target.value)
    })
    return [value, onChange]
}