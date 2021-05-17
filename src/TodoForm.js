import React, { Component } from 'react';
const { v4: uuidv4 } = require('uuid');

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const newTask = { ...this.state, id: uuidv4(), completed: false };
		this.props.addTask(newTask);
		this.setState({
			task: ''
		});
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="task">New Task: </label>
				<input id="task" name="task" value={this.state.task} onChange={this.handleChange} />
				<button>Add</button>
			</form>
		);
	}
}

export default TodoForm;
