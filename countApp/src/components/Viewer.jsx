const Viewer = ({ count, input, onChangeInput }) => {
    return (
        <div>
            <div>현재 카운트 :</div>
            <input value={input} onChange={onChangeInput}></input>
            <h1>{count}</h1>
        </div>
    );
};

export default Viewer;