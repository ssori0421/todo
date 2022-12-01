import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const TODO_LIST = [
  {
    id: 1,
    content: "react를 배워봅시다",
  },
  {
    id: 2,
    content: "useState를 배워봅시다",
  },
  {
    id: 3,
    content: "자바스크립트를 배워봅시다",
  },
];

function App() {
  const [list, setList] = useState(TODO_LIST);
  const [content, setContent] = useState("");
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };
  const onClick = () => {
    setList([...list, { id: list.length + 1, content }]);
    setContent("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={content} onChange={onChangeHandler} />
        <button onClick={onClick}>추가하기</button>
      </header>
      <div className="App-title">
        <h1>Todo List</h1>  
      </div>
      <div className="cardWrap">
        {list.map((item) => (
          <div className="card" key={item.id}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;