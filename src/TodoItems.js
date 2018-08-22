import React, { Component } from 'react';


class TodoItem extends Component {
	constructor(props) {
		super(props);

		this.handlerItemClick.bind(this);
	}

	render() {
		const { content } = this.props;
		return (
			<div onClick={this.handlerItemClick}>{content}</div>
		)
	}

	handlerItemClick() {
		const { deleteItem, index} = this.props;
		deleteItem(index);
	}
}

export default TodoItem;
