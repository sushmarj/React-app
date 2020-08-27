import React , { Component } from 'react';
import axios from 'axios';

export class EditCustomer extends Component {

    constructor(props){
        super(props);
        this.serviceUrl="http://localhost:3000/customers/"
        this.state={
            id:'',
            name:"",
            address:'',
            contact:'',
            bill:''
        }
    }

    componentDidMount(){
        let id=this.props.match.params.id;
        axios.get(this.serviceUrl +id).then((res)=>{
            this.setState({id:res.data.id,name:res.data.name,address:res.data.address,contact:res.data.contact,bill:res.data.bill});
        })
    }

    cancelClick=()=>{
        this.props.history.push('/customer');
    }

    onChanged=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSaveClick=(e)=>{
        e.preventDefault();
        axios.put(this.serviceUrl  +this.state.id,this.state).then((res)=>{
            alert('Data Updated');
            this.props.history.push('/customer');
        })
    }


    render(){
        const {name,address,contact,bill} = this.state;
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
            <label>Bill</label>
            <input name="bill" value={bill}
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