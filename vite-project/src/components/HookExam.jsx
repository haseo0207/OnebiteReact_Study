import useInput from "./../hooks/useInput";

const HookExam = () => {
    const [input, onChange] = useInput("input1");
    const [input2, onChange2] = useInput("input2");
    return (
        <div>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
        </div>
    )
}

export default HookExam