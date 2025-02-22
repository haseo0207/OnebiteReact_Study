import { useState } from "react";

//커스텀 훅
function useInput(identifier = "default") {
    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    };
    console.log(`${identifier}: ${input}`);
    return [input, onChange];
}

export default useInput;