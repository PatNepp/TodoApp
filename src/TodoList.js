import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
		this.addTask = this.addTask.bind(this);
	}
	addTask(newTask) {
		this.setState((st) => ({
			todos: [ newTask, ...st.todos ]
		}));
	}
	render() {
		const todos = this.state.todos.map((todo) => {
			return <Todo tasks={todo.task} />;
		});
		return (
			<div>
				<h1>Todo List</h1>
				<TodoForm addTask={this.addTask} />
				{todos}
			</div>
		);
	}
}

export default TodoList;
