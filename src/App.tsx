import React, {Component, CSSProperties, MouseEventHandler} from "react";
import "./App.css"

export default class App extends Component<any, any> {

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
    let filteredTodoData = this.todoData.filter(data => data.id !== id)
    console.log(filteredTodoData)
    this.todoData = filteredTodoData
  }

  private todoData = [
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
  ] as Array<any>

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
          {this.todoData.map((todo) => (
              <div style={this.getStyle()} key={todo.id}>
                <input type="checkbox" defaultChecked={todo.completed}/>
                {todo.title}
                <button style={this.btnStyle} onClick={() => this.deleteTodo(todo.id)}>x</button>
              </div>
            )
          )}
        </div>
      </div>
    )
  }

}