import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const isMount = useRef(false);

  //처음 실행되었을때만
  useEffect(() => {
    console.log("mount");
  },[])

  //상태 업데이트 함수는 비동기로 작동되기 때문에 useEffect 사용해야함
  //count 상태 변환시에만
  useEffect(()=>{
    console.log(`count: ${count} input: ${input}`);
  },[count,input]);

  //컴포넌트 렌더링될 때마다
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  const onClickButton = (value) => {
    setCount(prevCount => {
      const newValue = prevCount + value;
      setInput(newValue);
      return newValue;
  });
  };
  
  const onChangeInput = (e) => {
    if (isNaN(e.target.value)) return; 
    setInput(Number(e.target.value));
    setCount(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} input={input} onChangeInput={onChangeInput}/>
        {count % 2 === 0 ? <Even/> : <div>홀수입니다</div>}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;