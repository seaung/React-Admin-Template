import React, { Component, Fragment } from 'react';
import './Todo.css';


class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			theValue: ''
		}
	}

	render() {
		return (
      <Fragment>
       <h4 className="title-h4">To do Task.</h4>
       <div className="search-box">
         <input className="search-input" value="" />
         <button className="search-btn" onClick={this.handlerSubmit.bind(this)}>Submit</button>
       </div>
       <ul className="dot-list">
         {
         	  this.state.lists.map((item, index) => {
         	  	return (
         	  		<li key={index} onClick={this.handlerDelete.bind(this, index)}>{item}</li>
         	  	)
         	  })
         }
       </ul>
      </Fragment>
		)
	}

	handlerSubmit() {
		this.setState({
			lists: [...this.state.lists, this.theValue],
			theValue: ''
		})
	}

	handlerDelete(index) {
		const lists = [...this.state.lists];
		lists.splice(index, 1);
		this.setState({
		  lists: lists
		})
	}

}

export default Todo;
