import React from 'react';

const AddEmployee=(props,taskname,tasksalary,taskaddress,taskcontact,taskdesignation)=>{
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
                <input ref={(ip4)=>tasksalary=ip4} className="form-control" />

                <label>Designation</label>
                <input ref={(ip5)=>taskdesignation=ip5} className="form-control" />
                </div>
                
           <button onClick={()=>props.addEmployee(taskname.value,tasksalary.value,taskaddress.value,taskcontact.value,taskdesignation.value)}
           type="button" className="btn btn-success btn-block">Add Task</button>

            </form>

            </div>
        )
}

export default AddEmployee;

