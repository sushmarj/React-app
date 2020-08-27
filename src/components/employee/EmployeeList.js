import React from 'react';
import Thead from './Thead';
import TableRow from './TableRow';
import { withRouter } from 'react-router-dom';

const EmployeeList=(props)=> {

    const editClick=(id)=>{
        props.history.push('/empedit/'+id);
    }
    
        return(
            <table className="table table-bordered table-striped">
                <Thead />
                <tbody>
                    {props.employees.map((employee)=>
                    <TableRow key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    address={employee.address}
                    contact={employee.contact}
                    salary={employee.salary}
                    designation={employee.designation}
                    deleteEmployee={props.deleteEmployee}
                    editClick={editClick} /> )}
                </tbody>
            </table>
        )
}

export default withRouter(EmployeeList) ;

