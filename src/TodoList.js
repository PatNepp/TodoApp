import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
	}
	addTask = (newTask) => {
		this.setState((st) => ({
			todos: [ newTask, ...st.todos ]
		}));
	};
	editTask = (id, editedTask) => {
		const editedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: editedTask };
			} else {
				return todo;
			}
		});
		this.setState({ todos: editedTodos });
	};
	removeTask(id) {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id)
		});
	}
	completeTask = (id) => {
		const completedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			} else {
				return todo;
			}
		});
		this.setState({ todos: completedTodos });
	};
	render() {
		const todos = this.state.todos.map((todo) => {
			return (
				<Todo
					tasks={todo.task}
					completed={todo.completed}
					removeTask={() => this.removeTask(todo.id)}
					editTask={this.editTask}
					completeTask={this.completeTask}
					key={todo.id}
					id={todo.id}
				/>
			);
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
