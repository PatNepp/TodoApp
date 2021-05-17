import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false, task: this.props.tasks };
	}
	toggleForm = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleEdit = (e) => {
		e.preventDefault();
		this.props.editTask(this.props.id, this.state.task);
		this.setState({
			isEditing: !this.state.isEditing
		});
	};
	handleComplete = (e) => {
		e.preventDefault();
		this.props.completeTask(this.props.id);
		this.setState({
			completed: !this.state.completed
		});
	};
	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div>
					<form onSubmit={this.handleEdit}>
						<label />
						<input name="task" value={this.state.task} onChange={this.handleChange} />
						<button>edit</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div>
					<span className={this.props.completed ? 'completed' : ''} onClick={this.handleComplete}>
						{this.props.tasks}
					</span>
					<button onClick={this.toggleForm}>Edit</button>
					<button onClick={this.props.removeTask}>X</button>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
