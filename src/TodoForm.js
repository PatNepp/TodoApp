import React, { Component } from 'react';

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
		this.props.addTask(this.state);
		this.setState({
			task: ''
		});
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label html="task">New Task: </label>
				<input id="task" name="task" value={this.state.task} onChange={this.handleChange} />
				<button>Add</button>
			</form>
		);
	}
}

export default TodoForm;
