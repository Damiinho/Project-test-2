import React from "react";
import "./TaskList.css";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    const ToDoTask = (props) => (
      <div>
        {props.tasks.map((task) => {
          if (!task.isDone) {
            return (
              <Task
                key={task.id}
                name={task.name}
                important={task.important}
                deadDate={task.deadDate}
                finishDate={task.finishDate}
                isDone={task.isDone}
                delete={() => props.delete(task.id)}
                change={() => props.change(task.id)}
              />
            );
          } else return null;
        })}
      </div>
    );

    const DoneTask = (props) => (
      <div>
        {props.tasks.map((task) => {
          if (task.isDone) {
            return (
              <Task
                key={task.id}
                name={task.name}
                important={task.important}
                deadDate={task.deadDate}
                finishDate={task.finishDate}
                isDone={task.isDone}
                delete={() => props.delete(task.id)}
                change={() => props.change(task.id)}
              />
            );
          } else return null;
        })}
      </div>
    );

    return (
      <div>
        <div>
          <h1>Zadania do zrobienia</h1>
          <ToDoTask
            delete={this.props.delete}
            change={this.props.change}
            tasks={this.props.tasks}
          />
        </div>
        <hr />
        <div>
          <h1>Wykonane</h1>
          <DoneTask
            delete={this.props.delete}
            change={this.props.change}
            tasks={this.props.tasks}
          />
        </div>
      </div>
    );
  }
}

export default TaskList;
