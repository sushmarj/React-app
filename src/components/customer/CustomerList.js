import React from 'react';
import Thead from './Thead';
import TableRow from './TableRow';
import { withRouter } from 'react-router-dom';

const CustomerList=(props)=> {

    const editClick=(id)=>{
        props.history.push('/custedit/'+id);
    }
    
        return(
            <table className="table table-bordered table-striped">
            <Thead />
            <tbody>
                    {props.customers.map((customer)=>
                    <TableRow key={customer.id}
                    id={customer.id}
                    name={customer.name}
                    address={customer.address}
                    contact={customer.contact}
                    bill={customer.bill}
                    deleteCustomer={props.deleteCustomer}
                    editClick={editClick} /> )}
                </tbody>

            </table>
        )
}

export default withRouter(CustomerList);
