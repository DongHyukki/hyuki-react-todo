import React, {ChangeEvent, useState} from 'react';

function Form({todoData, setTodoData}: any) {

  const [insertTodoText, setInsertTodoText] = useState("")

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInsertTodoText(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // 페이지가 리로드 되는것을 막아줌

    let newTodo = { // 전개연산자를 통해 처리할 수 있음
      id: todoData.length + 1,
      title: insertTodoText,
      completed: false
    }

    setTodoData((prev: any) => [...prev, newTodo])
    setInsertTodoText("")
  }


  return (
    <div>
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
  );
}

export default Form;