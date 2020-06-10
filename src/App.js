import React,{Component}from 'react';
import ToDoList from './components/to-do-list/toDoList.componenet';
import Form from './components/form/form.component';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }

  handleSubmit=({content})=>{
    this.setState({ list:[...this.state.list,{id:(this.state.list.length+1) || 1,content}]});
  }

  removeFromList=(index)=>{
    this.setState({list:this.state.list.filter(ele=>ele.id!==index)})
  }

  render(){
    return(
      <div className='container'>
        <Form handleSubmit={this.handleSubmit}/>
        <ToDoList list={this.state.list} removeFromList={this.removeFromList}/>
      </div>
    ); 
  }

}

export default App;
