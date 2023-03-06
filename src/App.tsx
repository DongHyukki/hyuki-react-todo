import React, {useState} from "react";
import "./App.css"
import List from "./components/List";
import Form from "./components/Form";

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

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-50">
      <div className="w-full p-6 m-4 bg-white rounded-2xl shadow lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1> 할일 목록 </h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form todoData={todoData} setTodoData={setTodoData} />
      </div>
    </div>
  )
}