import React, { Component } from "react";
import Todoform from "./Todoform";
import Todo from "./Todo";

export default class Todolist extends Component {
  state = {
    todos: [],
    todotoshow: "all",
    toggleallcomp: true,
  };
  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos,
    });
  };
  removeall = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            //to update, keep the id and text same
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  Updateto = (s) => {
    this.setState({
      todotoshow: s,
    });
  };
  del = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  render() {
    let todos = [];
    if (this.state.todotoshow === "all") {
      todos = this.state.todos;
    } else if (this.state.todotoshow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todotoshow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <Todoform onSubmit={this.addTodo} />

        <div id="act">
          <p></p>Active todo:{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.del(todo.id)}
            todo={todo}
          ></Todo>
        ))}
        <br />
        <div id="btn">
          <button onClick={() => this.Updateto("all")}>All</button>
          &nbsp; &nbsp; &nbsp;
          <button onClick={() => this.Updateto("complete")}>Completed</button>
          &nbsp; &nbsp; &nbsp;
          <button onClick={() => this.Updateto("active")}>Yet to do</button>
        </div>
        {this.state.todos.filter((todo) => todo.complete).length ? (
          <div>
            <button id="rem" onClick={this.removeall}>
              Remove Completed
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
