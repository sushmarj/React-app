import React from 'react';
const AddCustomer=(props,taskname,taskbill,taskaddress,taskcontact)=> {
        return(
            <div className="center">
            <form>
                <div className="form-group">
                <label>Name</label>
                <input ref={(ip1)=>taskname=ip1} className="form-control" />

                <label>Address</label>
                <input ref={(ip2)=>taskaddress=ip2} className="form-control" />

                <label>contact</label>
                <input ref={(ip3)=>taskcontact=ip3} className="form-control" />

                <label>Salary</label>
                <input ref={(ip4)=>taskbill=ip4} className="form-control" />

                </div>
                
           <button onClick={()=>props.addCustomer(taskname.value,taskbill.value,taskaddress.value,taskcontact.value)}
           type="button" className="btn btn-success btn-block">Add Task</button>

            </form>

            </div>
        )
}

export default AddCustomer;

