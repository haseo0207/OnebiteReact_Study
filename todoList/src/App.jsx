import { useState, useRef, useEffect, useReducer, useCallback, createContext, useMemo } from 'react'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
import './App.css'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];

    case 'UPDATE':
      return state.map((item) => {
        if (item.id !== action.targetId) return item;
        return { ...item, isDone: !item.isDone };
      });

    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

const App = () => {
  //const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    // const newTodo = {
    //   id: idRef.current++, //crypto.randomUUID()
    //   isDone: false,
    //   content: content,
    //   date: new Date().getTime(),
    // };
    // setTodos([newTodo, ...todos]);
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++, //crypto.randomUUID()
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }, []);

  //상태 업데이트시 로그 출력
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onUpdate = useCallback((targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== targetId) return todo;
    //     return { ...todo, isDone: !todo.isDone };
    //   })
    // );
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }, []);

  const onDelete = useCallback((targetId) => {
    // setTodos(todos.filter((todo) => todo.id !== targetId));
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
