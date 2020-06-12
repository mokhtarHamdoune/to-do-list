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
    let listLen = this.state.list.length;
    //if the list is empty start with 1 else add 1 to the last id 
    this.setState({ list:[...this.state.list,{id:listLen ? this.state.list[listLen-1].id+1 : 1,
      content}]});
  }

  removeFromList=(index)=>{
    this.setState({list:this.state.list.filter(ele=>ele.id!==index)});
  }
  handleModify=({id,content})=>{
    let newList=[...this.state.list];
    newList[newList.indexOf(newList.find(ele=>ele.id===id))].content=content;
    this.setState({list:newList});
  }
  render(){
    return(
      <div className='container'>
        <Form handleSubmit={this.handleSubmit}/>
        <ToDoList list={this.state.list} removeFromList={this.removeFromList} handleModify={this.handleModify}/>
      </div>
    ); 
  }

}

export default App;
