import React, { Component, Fragment } from 'react';


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
       <div>
         <input value="" />
         <button onClick={this.handlerSubmit.bind(this)}>Submit</button>
       </div>
       <ul>
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
