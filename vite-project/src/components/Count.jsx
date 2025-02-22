import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>{count}</div>
            <button onClick={() => { setCount(count + 1) }}>
                증가
            </button>
        </>
    )
}

export default Count