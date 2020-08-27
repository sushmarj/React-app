import React from 'react';

const TableRow =(props)=> {
    return(
        <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.address}</td>
        <td>{props.contact}</td>
        <td>{props.bill}</td>
        <td><button
        onClick={()=>props.editClick(props.id)}
        className="btn btn-xs btn-info glyphicon glyphicon-pencil"> Edit</button> &nbsp; &nbsp;
        <button onClick={()=>props.deleteCustomer(props)}
         className="btn btn-xs btn-danger glyphicon glyphicon-remove-circle"> Delete</button> </td>
    </tr>
    )
}

export default TableRow ;
