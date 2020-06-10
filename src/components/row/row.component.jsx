import React,{Component} from 'react';
import Button from '../buttons/button.component';
import './row.style.scss';

class Row extends Component{
    constructor(props){
        super(props);
        this.state={
            ...this.props.row,
            hasMdodify:false
        }
    }
    handleClick=(index,role)=>{
        if(role === 'delete' ) {
            this.props.removeFromList(index); 
        }else if(role==='modify') {
            this.setState({hasMdodify:true});
        }else{
           this.setState({hasMdodify:false});
        }
    }

    handleChange=(event)=>{
        this.setState({content: event.target.value});
    }
    render(){
        const row = this.state;
        return(
            <div className='row'>
                <div className='toDoContent'>
                   {
                     (!row.hasMdodify) ? row.content : 
                     <textarea name="row-content"  value={row.content} onChange={this.handleChange} />  
                   }
                </div>
                <div className="buttons">
                    <Button role='modify' handleClick={()=>this.handleClick(row.id,this.state.hasMdodify ? 'save' :'modify')}>{this.state.hasMdodify ? 'Save' :'Modify'}</Button>
                    <Button role='delete' handleClick={()=>this.handleClick(row.id,'delete')}>Delete</Button>
                </div>
            </div>
        );
    }
}

export default Row;