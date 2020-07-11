import React, { Component } from 'react';
import Board from './components/Board/board';
import Form from './components/Form/form';
import _ from 'underscore';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

    this.state = {
      inputValue: '',
      inputValueNotEmpty: false,
      todoItems: [
      ],
    }
  }

  handleChange(value) {
    this.setState({
      inputValue: value,
      inputValueNotEmpty: false,
    })
  }

  handleSubmit() {
    if (!this.state.inputValue) {
      return this.setState({
        inputValueNotEmpty: true
      })
    }
    const newTodo = {
      id: this.state.todoItems.length + 1,
      title: this.state.inputValue,
      deleted: false,
      done: false,
    }
    // Maintains separation between 'Done' and 'Not Done' todos even after adding new items.
    const newList = _.sortBy([...this.state.todoItems, newTodo], 'done');

    this.setState({
      todoItems: newList,
      inputValue: '',
    });
  }

  updateTodo(id) {
    const updatedTodoList = this.state.todoItems.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    // Maintains the original order of the cards if toggled back from Done
    const newList = _.chain(updatedTodoList)
                    .sortBy('id')
                    .sortBy('done')
                    .value();

    this.setState({
      todoItems: newList,
    });
  }

  deleteTodo(id) {
    const updatedTodoList = this.state.todoItems.filter(todo => todo.id !== id);
  
    this.setState({
      todoItems: updatedTodoList,
    })
  }



  render() {
    return (
      <div className="App">
        <h1>SynchronDEV ReactTodo</h1>
        <Form inputValue={this.state.inputValue} inputValueNotEmpty={this.state.inputValueNotEmpty} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Board todoItems={this.state.todoItems} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
