import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<div>
				{this.props.tasks}
				{/* <button>Edit</button>
				<button>X</button> */}
			</div>
		);
	}
}

export default Todo;
