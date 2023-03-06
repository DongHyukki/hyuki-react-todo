import React from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import TodoData from "../types/TodoData";

function List({todoData, setTodoData}: any) {

  function deleteTodo(id: string) {
    let filteredTodoData = todoData.filter((data: TodoData) => data.id !== id)
    console.log(filteredTodoData)
    setTodoData(filteredTodoData)
  }

  function handleCompleteChange(id: string) {
    setTodoData(todoData.map(
      (todo: TodoData) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo
      }
    ))
  }

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return

    const newTodoData = todoData
    const [reOrderedTodoData] = newTodoData.splice(result.source.index, 1);
    newTodoData.splice(result.destination.index, 0, reOrderedTodoData)
    setTodoData(newTodoData)
  }


  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={"todo"}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((todo: TodoData, index: number) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div key={todo.id}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                         ref={provided.innerRef}>
                      <div
                        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded}`}>
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default List;