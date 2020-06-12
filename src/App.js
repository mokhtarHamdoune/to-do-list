import React,{Component}from 'react';
import FormInput from './components/form_input/form_input.component';
import ToDoList from './components/to-do-list/toDoList.componenet';
import Form from './components/form/form.component';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      searchField:'',
      list:[]
    }
    this.handleChange=this.handleChange.bind(this);
  }


  handleChange(event){
    this.setState({searchField:event.target.value});
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
    const {list,searchField} = this.state;
    const tasks = list.filter((task=>task.content.toLowerCase().includes(searchField.toLowerCase())));

    return(
      <div className='container'>
        <div className="search-save">
          <FormInput type='search' placeholder='Chercher dans la list' name='searchField'  value={searchField} handleChange={this.handleChange} />
          <Form handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} />
        </div>
        <ToDoList list={tasks} removeFromList={this.removeFromList} handleModify={this.handleModify}/>
      </div>
    ); 
  }

}

export default App;
