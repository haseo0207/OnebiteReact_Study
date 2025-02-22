import './App.css'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Button from './components/Button'
import Bulb from './components/Bulb'
import Count from './components/Count'
import Register from './components/Register'
import HookExam from './components/HookExam'

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2
  }

  return (
    <>
      <HookExam/>

      <Register />

      <Count />
      <Bulb />

      <Main />
      <Footer />
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"} color={"blue"}>
        <Header />
        <div>블로그의 자식 요소</div>
      </Button>
    </>
  )
}

export default App
