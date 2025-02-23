import React, { useEffect } from 'react'

const Even = () => {
    useEffect(() => {
        console.log("even mount");
        //클린업, 정리함수 
        //return값이 함수일 경우
        return () => {
            console.log("even unmount")
        }
    },[])

  return (
    <div>짝수입니다</div>
  )
}

export default Even