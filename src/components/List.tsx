import React, {CSSProperties, useEffect, useState} from 'react';

function List({todoData, setTodoData}: any) {

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
    let filteredTodoData = todoData.filter((data: any) => data.id !== id)
    console.log(filteredTodoData)
    setTodoData(filteredTodoData)
  }

  function handleCompleteChange(id: number) {
    setTodoData(todoData.map(
      (todo: any) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo
      }
    ))
  }


  return (
    <div>
      {todoData.map((todo: any) => (
          <div style={getStyle(todo.completed)} key={todo.id}>
            <input type="checkbox" defaultChecked={todo.completed}
                   onChange={() => handleCompleteChange(todo.id)}/>
            {todo.title}
            <button style={btnStyle} onClick={() => deleteTodo(todo.id)}>x</button>
          </div>
        )
      )}</div>
  );
}

export default List;