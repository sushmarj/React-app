import React, { Component } from 'react';
import axios from 'axios';
import CustomerList from './CustomerList';
import AddCustomer from './AddCustomer';
import  createHistory from 'history/createBrowserHistory';
const history= createHistory();

class Customer extends Component {
    constructor(){
        super();
        this.serviceUrl="http://localhost:3000/customers/"
        this.state={
            customers:[]
    }
    }
    componentDidMount(){
        axios.get(this.serviceUrl).then((res)=>{
            this.setState({customers:res.data})
        })
    }

    deleteCustomer=(task)=> {
        axios.delete(this.serviceUrl+task.id).then((res)=>{
            let newCustomers=[...this.state.customers];
            let indexPosition = newCustomers.indexOf(task);
            newCustomers.splice(indexPosition,1);
            this.setState({customers:newCustomers})
        })
    }

    addCustomer = (taskname,taskbill,taskaddress,taskcontact) => {
        let newCustomers = [...this.state.customers];
        let newTask = {
            id: newCustomers.length + 1,
            name: taskname,
            bill:taskbill,
            address: taskaddress,
            contact: taskcontact,
        }
        axios.post(this.serviceUrl,newTask).then((res)=>{
            newCustomers.push(newTask);
            this.setState({customers:newCustomers})
        })
    }


    render(){
        return(
           <div>
               <AddCustomer addCustomer={(taskname,taskbill,taskaddress,taskcontact)=>this.addCustomer(taskname,taskbill,taskaddress,taskcontact)} />
               <br/>
               <CustomerList history={history} customers={this.state.customers}
               deleteCustomer={(task)=>this.deleteCustomer(task)} />
           </div>
        )
    }
}

export default Customer;

