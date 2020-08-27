import React , { Component } from 'react';
import axios from 'axios';

export class EditProduct extends Component {

    constructor(props){
        super(props);
        this.serviceUrl="http://localhost:3000/products/"
        this.state={
            id:'',
            name:"",
            cost:'',
            category:'',
            poster:''
        }
    }

    componentDidMount(){
        let id=this.props.match.params.id;
        axios.get(this.serviceUrl +id).then((res)=>{
            this.setState({id:res.data.id,name:res.data.name,cost:res.data.cost,category:res.data.category,poster:res.data.poster});
        })
    }

    cancelClick=()=>{
        this.props.history.push('/product');
    }

    onChanged=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSaveClick=(e)=>{
        e.preventDefault();
        axios.put(this.serviceUrl +this.state.id,this.state).then((res)=>{
            alert('Data Updated');
            this.props.history.push('/product');
        })
    }


    render(){
        const {name,cost,category,poster} = this.state;
        return(
            <div className="container">
            <form onSubmit={this.onSaveClick}>
            <div className="form-group">
            <label>Name</label>
            <input name="name" value={name}
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group">
            <label>Cost</label>
            <input name="cost" value={cost}
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group">
            <label>Category</label>
            <input name="category" value={category}
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group">
            <label>Poster(Url)</label>
            <input name="poster" value={poster}
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