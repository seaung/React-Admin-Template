import React, { Component, Fragment } from 'react';
import TodoItems from './TodoItems';


class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			theValue: ''
		}

		this.handlerSubmit.bind(this);
		this.handlerDelete.bind(this);
	}

	render() {
		return (
      <Fragment>
       <h4 className="title-h4">To do Task.</h4>
       <div className="search-box">
         <input className="search-input" value="" />
         <button className="search-btn" onClick={this.handlerSubmit}>Submit</button>
       </div>
       <ul className="dot-list">
         {
         	  this.getItems()
         }
       </ul>
      </Fragment>
		)
	}

	getItems() {
		return this.state.lists.map((item, index) => {
			return (
			  <div key={index}>
			    <TodoItems content={item}
			               index={index}
			               deleteItem={this.handlerDelete}
			               />
			  </div>
			)
		})
	}

	handlerSubmit() {
		this.setState((prevState) => ({
			lists: [...prevState.lists, prevState.theValue],
			theValue: ''
		}))
	}

	handlerDelete(index) {
		this.setState((prevState) => {
			const lists = [...prevState.lists];
			lists.splice(index, 1);
			return { lists: lists }
		})
	}

}

export default Todo;
