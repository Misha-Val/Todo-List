import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import React, {useState} from "react";
import {Container} from "react-bootstrap";
function App() {

  const [todo, setTodo] = useState([
      {
          id: 1,
          title: "Купити хліб",
          status: true,
      },
      {
          id: 2,
          title: "Сходити в спортзал",
          status: true,
      },
      {
          id: 3,
          title: "Заплатити за інтернет",
          status: false,
      }
  ])

  return (
    <Container>
      <Header/>
      <AddTodo todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
