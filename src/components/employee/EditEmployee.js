import React , { Component } from 'react';
import axios from 'axios';

export class EditEmployee extends Component {

    constructor(props){
        super(props);
        this.serviceUrl="http://localhost:3000/employees/"
        this.state={
            id:'',
            name:"",
            address:'',
            contact:'',
            salary:'',
            designation:''
        }
    }

    componentDidMount(){
        let id=this.props.match.params.id;
        axios.get(this.serviceUrl+id).then((res)=>{
            this.setState({id:res.data.id,name:res.data.name,address:res.data.address,contact:res.data.contact,salary:res.data.salary,designation:res.data.designation});
        })
    }

    cancelClick=()=>{
        this.props.history.push('/employee');
    }

    onChanged=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSaveClick=(e)=>{
        e.preventDefault();
        axios.put(this.serviceUrl +this.state.id,this.state).then((res)=>{
            alert('Data Updated');
            this.props.history.push('/employee');
        })
    }


    render(){
        const {name,address,contact,salary,designation} = this.state;
        return(
            <div className="container">
            <form onSubmit={this.onSaveClick}>
            <div className="form-group">
            <label>Name</label>
            <input name="name" value={name}
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group">
            <label>Address</label>
            <input name="address" value={address}
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group">
            <label>Contact</label>
            <input name="contact" value={contact}
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group">
            <label>Salary</label>
            <input name="salary" value={salary}
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group">
            <label>Designation</label>
            <input name="designation" value={designation}
            onChange={this.onChanged} className="form-control" />
            </div>

            <button type="submit" className="btn btn-success">Save</button>
            <button onClick={this.cancelClick}
            className="btn btn-warning">Cancel</button>
                </form>                
            </div>
        )
    }
}