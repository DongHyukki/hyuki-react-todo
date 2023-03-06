import React from 'react';

function List({todoData, setTodoData}: any) {

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
          <div key={todo.id}>
            <div
              className="flex items-center justify-between w-full px-4 py1 my-2 text-gray-600 bg-gray-100 border rounded">
              <div>
                <input type="checkbox" defaultChecked={todo.completed}
                       onChange={() => handleCompleteChange(todo.id)}/>
                <span className={todo.completed ? "line-through" : undefined}> {todo.title} </span>
              </div>
              <div>
                <button onClick={() => deleteTodo(todo.id)}>x</button>
              </div>
            </div>
          </div>
        )
      )}</div>
  );
}

export default List;