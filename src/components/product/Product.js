import React, { Component } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import AddProduct from './AddProduct';


import  createHistory from 'history/createBrowserHistory';
const history= createHistory();

class Product extends Component {

    constructor(){
        super();
        this.serviceUrl="http://localhost:3000/products/"
        this.state={
        products:[]
    }
    }
    componentDidMount(){
        axios.get(this.serviceUrl).then((res)=>{
            this.setState({products:res.data})
        })
    }

    deleteProduct=(task)=> {
        axios.delete(this.serviceUrl+task.id).then((res)=>{
            let newProducts=[...this.state.products];
            let indexPosition = newProducts.indexOf(task);
            newProducts.splice(indexPosition,1);
            this.setState({products:newProducts})
        })
    }

    addProduct = (taskname,taskcost,taskcategory,taskposter) => {
        let newProducts = [...this.state.products];
        let newTask = {
            id: newProducts.length + 1,
            name: taskname,
            cost:taskcost,
            category: taskcategory,
            poster: taskposter,
        }
        axios.post(this.serviceUrl,newTask).then((res)=>{
            newProducts.push(newTask);
            this.setState({products:newProducts})
        })
    }

    render(){
        return(
            <div>
                <AddProduct addProduct={(taskname,taskcost,taskcategory,taskposter)=>this.addProduct(taskname,taskcost,taskcategory,taskposter)}  />
                <br/>
                <ProductList history={history} products={this.state.products}
                deleteProduct={(task)=>this.deleteProduct(task)} />
            </div>
        )
    }
}

export default Product;


