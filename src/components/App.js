import React from "react";
import "./App.css";
import Header from "./Header";
import TaskList from "./TaskList";

class App extends React.Component {
  counter = 5;
  state = {
    tasks: [
      {
        id: 0,
        name: "Pierwsze zadanie",
        important: false,
        deadDate: "2020-10-12",
        finishDate: "",
        isDone: false,
      },
      {
        id: 1,
        name: "Drugie zadanie",
        important: true,
        deadDate: "2001-06-16",
        finishDate: "",
        isDone: false,
      },
      {
        id: 2,
        name: "to nie jest zadanie",
        important: false,
        deadDate: "2023-28-02",
        finishDate: "",
        isDone: false,
      },
      {
        id: 3,
        name: "co to za  zadanie",
        important: true,
        deadDate: "2001-11-10",
        finishDate: "",
        isDone: false,
      },
      {
        id: 4,
        name: "coadasdf zadanie",
        important: false,
        deadDate: "2023-07-05",
        finishDate: "",
        isDone: false,
      },
      {
        id: 5,
        name: "ostatnie predefiniowane zadanie",
        important: false,
        deadDate: "2035-05-09",
        finishDate: "",
        isDone: false,
      },
    ],
  };

  handleChangeClick = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index].isDone = !tasks[index].isDone;

    let actualDate = new Date().getTime();
    tasks[index].finishDate = actualDate;
    this.setState({
      tasks,
    });
  };

  handleDeleteClick = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    // tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks,
    });
  };

  handleAddTask = (name, deadDate, important) => {
    if (!name || !deadDate) return alert("Uzupełnij wszystkie pola");
    else {
      const task = {
        id: ++this.counter,
        name,
        important,
        deadDate,
        finishDate: "",
        isDone: false,
      };
      const tasks = [...this.state.tasks].concat(task);
      this.setState({
        tasks,
      });

      return true;
    }
  };

  render() {
    return (
      <div>
        <Header tasks={this.state.tasks} add={this.handleAddTask} />
        <TaskList
          tasks={this.state.tasks}
          change={this.handleChangeClick}
          delete={this.handleDeleteClick}
        />
      </div>
    );
  }
}

export default App;
