import React, {ChangeEvent, Component, CSSProperties, MouseEventHandler} from "react";
import "./App.css"

export default class App extends Component<any, any> {

  state = {
    todoData: [
      {
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
      }
    ] as Array<any>,

    insertTodoText: ""
  }

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  } as CSSProperties

  private getStyle(): CSSProperties {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: 'none',
    }
  }

  private deleteTodo(id: string) {
    let filteredTodoData = this.state.todoData.filter(data => data.id !== id)
    console.log(filteredTodoData)
    this.setState({todoData: filteredTodoData})
  }

  // private insertTodo() {
  //   let newTodoData = this.state.todoData
  //   newTodoData[this.state.todoData.length] =
  //     {
  //       id: this.state.todoData.length + 1,
  //       title: this.state.insertTodoText,
  //       completed: false
  //     }
  //
  //   this.setState({
  //     todoData: newTodoData,
  //     insertTodoText: ""
  //   })
  // }

  private handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({insertTodoText: e.target.value})
  }

  /**
   * react에서 요소의 리스트를 나열할때는 Key를 반드시 넣어줘야 한다.
   * Key는 React가 변경, 추가, 제거 등을 찾을때 사용된다.
   */

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1> 할일 목록 </h1>
          </div>
          {this.state.todoData.map((todo) => (
              <div style={this.getStyle()} key={todo.id}>
                <input type="checkbox" defaultChecked={todo.completed}/>
                {todo.title}
                <button style={this.btnStyle} onClick={() => this.deleteTodo(todo.id)}>x</button>
              </div>
            )
          )}
          <form style={{display: "flex"}} onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type={"text"}
              name={"value"}
              style={{flex: '10', padding: '5px'}}
              placeholder={"해야 할 일을 입력하세요."}
              value={this.state.insertTodoText}//요부분을 state 로 관리하는게 포인트
              onChange={(e) => this.handleChange(e)}
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

  private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // 페이지가 리로드 되는것을 막아줌

    // let newTodoData = this.state.todoData
    // newTodoData[this.state.todoData.length] =
    //   {
    //     id: this.state.todoData.length + 1,
    //     title: this.state.insertTodoText,
    //     completed: false
    //   }

    let newTodoData = [...this.state.todoData, { // 전개연산자를 통해 처리할 수 있음
      id: this.state.todoData.length + 1,
      title: this.state.insertTodoText,
      completed: false
    }]

    this.setState({
      todoData: newTodoData,
      insertTodoText: ""
    })
  }
}