import { useState, useMemo, useContext } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    //todo의 content와 검색창에 입력한 문자를 전부 소문자로 변경
    //includes 통해 검색어가 포함되어있는 문자열 찾아
    //filter통해 새로운 배열 반환
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } =
    //todos 변경시에만 재계산
    useMemo(() => {
      console.log("getAnalyzedData 호출!");
      const totalCount = todos.length;
      const doneCount = todos.filter(
        (todo) => todo.isDone
      ).length;

      const notDoneCount = totalCount - doneCount;

      return {
        totalCount,
        doneCount,
        notDoneCount,
      };
    }, [todos]);
  // 의존성배열 : deps

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
        value={search}
      />
      <div className="todos_wrapper">
        {filteredTodos.map(todo =>
          //스프레드로 todo 전달. 구조분해 할당 통해 접근
          //개인적으론 item={todo} 선호함
          <TodoItem
            key={todo.id}
            {...todo}
          />
        )}
      </div>
    </div>
  );
};

export default List;