import React from "react";

class Header extends React.Component {
  state = {
    name: "",
    minDate: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
    deadDate: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
    important: false,
  };

  handleChangeTask = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeCheckbox = (e) => {
    this.setState({
      important: e.target.checked,
    });
  };

  handleChangeDate = (e) => {
    this.setState({
      deadDate: e.target.value,
    });
  };

  handleAddClick = () => {
    const { name, deadDate, important } = this.state;
    this.props.add(name, deadDate, important);
    if (this.props.add) {
      this.setState({
        name: "",
        deadDate: "",
        important: false,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>To do zrobienia</h1>
        <label htmlFor="task">Wprowadź zadanie</label>
        <input
          id="task"
          placeholder="Tutaj pisz"
          type="text"
          value={this.state.name}
          onChange={this.handleChangeTask}
        />
        <p>
          <label htmlFor="when">Do kiedy wykonać?</label>
          <input
            type="date"
            id="when"
            min={this.state.minDate}
            value={this.state.deadDate}
            onChange={this.handleChangeDate}
          />
        </p>
        <p>
          <label htmlFor="important">Czy zadanie jest ważne?</label>
          <input
            id="important"
            type="checkbox"
            onChange={this.handleChangeCheckbox}
          />
        </p>
        <button onClick={this.handleAddClick}>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default Header;
