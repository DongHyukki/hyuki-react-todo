import React, {ChangeEvent, Component, CSSProperties, MouseEventHandler, useEffect, useState} from "react";
import "./App.css"

export default function App() {

  const [todoData, setTodoData] = useState(
    [{
      id: "1",
      title: "공부하기",
      completed: true
    },
      {
        id: "2",
        title: "청소하기",
        completed: false
      },
      {
        id: "3",
        title: "게임하기",
        completed: true
      }] as Array<any>
  )

  const [insertTodoText, setInsertTodoText] = useState("")

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  } as CSSProperties

  function getStyle(completed: boolean): React.CSSProperties {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? 'line-through' : 'none'
    }
  }

  function deleteTodo(id: string) {
    let filteredTodoData = todoData.filter(data => data.id !== id)
    console.log(filteredTodoData)
    setTodoData(filteredTodoData)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInsertTodoText(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // 페이지가 리로드 되는것을 막아줌

    // let newTodoData = [...todoData, { // 전개연산자를 통해 처리할 수 있음
    //   id: todoData.length + 1,
    //   title: insertTodoText,
    //   completed: false
    // }]

    // setTodoData(newTodoData)

    let newTodo = { // 전개연산자를 통해 처리할 수 있음
      id: todoData.length + 1,
      title: insertTodoText,
      completed: false
    }

    setTodoData((prev) => [...prev, newTodo])
    setInsertTodoText("")
  }

  function handleCompleteChange(id: number) {
    setTodoData(todoData.map(
      (todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo
      }
    ))
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1> 할일 목록 </h1>
        </div>
        {todoData.map((todo) => (
            <div style={getStyle(todo.completed)} key={todo.id}>
              <input type="checkbox" defaultChecked={todo.completed}
                     onChange={() => handleCompleteChange(todo.id)}/>
              {todo.title}
              <button style={btnStyle} onClick={() => deleteTodo(todo.id)}>x</button>
            </div>
          )
        )}
        <form style={{display: "flex"}} onSubmit={(e) => handleSubmit(e)}>
          <input
            type={"text"}
            name={"value"}
            style={{flex: '10', padding: '5px'}}
            placeholder={"해야 할 일을 입력하세요."}
            value={insertTodoText}//요부분을 state 로 관리하는게 포인트
            onChange={(e) => handleChange(e)}
          />
          <input
            type={"submit"}
            value={"입력"}
            className={"btn"}
            style={{flex: '1'}}
          />
        </form>
      </div>
    </div>
  )
}