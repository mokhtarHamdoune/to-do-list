import React,{Component} from 'react';
import Button from '../buttons/button.component';
import './row.style.scss';

class Row extends Component{
    constructor(props){
        super(props);
        this.state={
            ...this.props.row,
            hasToModify:false
        }

    }
    handleClick=(index,role)=>{
        if(role === 'delete' ) {
            this.props.removeFromList(index); 
        }else if(role==='modify') {
            this.setState({hasToModify:true});
        }else{
            this.setState({hasToModify:false});
            this.props.handleModify(this.state);
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
                     (!row.hasToModify) ? row.content: 
                     <textarea name="row-content"  value={row.content} onChange={this.handleChange} />  
                   }
                </div>
                <div className="buttons">
                    <Button role='modify' handleClick={()=>this.handleClick(row.id,row.hasToModify ? 'save' :'modify')}>{row.hasToModify ? 'Save' :'Modify'}</Button>
                    <Button role='delete' handleClick={()=>this.handleClick(row.id,'delete')}>Delete</Button>
                </div>
            </div>
        );
    }
}

export default Row;