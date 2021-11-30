import React from "react";

const Task = (props) => {
  if (!props.isDone) {
    return (
      <div className={`${props.important ? "important" : ""} todo`}>
        <div>{props.name}</div> <div>{props.deadDate}</div>
        <button onClick={props.change}>Zrobione</button>
        <button onClick={props.delete}>Usuń</button>
        {/* <label htmlFor={`check${props.key}`}>ważne?</label>
        <input type="checkbox" id={`check${props.key}`}
         /> */}
      </div>
    );
  } else {
    const finish = new Date(props.finishDate).toLocaleString();
    return (
      <div className="done">
        {props.name} – wykonane: {finish}
        <button onClick={props.delete}>Usuń</button>
        <button onClick={props.change}>Cofnij wykonanie</button>
      </div>
    );
  }
};

export default Task;
