import React, { Component } from 'react';
import axios from 'axios';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';

import  createHistory from 'history/createBrowserHistory';
const history= createHistory();

class Employee extends Component {

    constructor() {
        super();
        this.serviceUrl = "  http://localhost:3000/employees/";
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        axios.get(this.serviceUrl).then((res) => {
            this.setState({ employees: res.data })
        })
    }

    deleteEmployee = (task) => {
        axios.delete(this.serviceUrl + task.id).then((res) => {
            let newEmployees = [...this.state.employees];
            let indexPosition = newEmployees.indexOf(task);
            newEmployees.splice(indexPosition, 1);
            this.setState({ employees: newEmployees })
        })
    }

    addEmployee = (taskname,tasksalary,taskaddress,taskcontact,taskdesignation) => {
        let newEmployees = [...this.state.employees];
        let newTask = {
            id: newEmployees.length + 1,
            name: taskname,
            salary:tasksalary,
            address: taskaddress,
            contact: taskcontact,
            designation: taskdesignation
        }
        axios.post(this.serviceUrl,newTask).then((res)=>{
            newEmployees.push(newTask);
            this.setState({employees:newEmployees})
        })
    }

    render() {
        return (
            <div>
                <AddEmployee addEmployee={(taskname,tasksalary,taskaddress,taskcontact,taskdesignation)=>this.addEmployee(taskname,tasksalary,taskaddress,taskcontact,taskdesignation)} />
                <br/>
                <EmployeeList history={history} employees={this.state.employees}
                    deleteEmployee={(task) => this.deleteEmployee(task)} />
            </div>
        )
    }
}

export default Employee;
