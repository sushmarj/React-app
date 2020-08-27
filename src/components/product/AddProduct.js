import React from 'react';

const AddProduct=(props,taskname,taskcost,taskcategory,taskposter)=> {
        return(
            <div className="center">
            <form>
                <div className="form-group">
                <label>Name</label>
                <input ref={(ip1)=>taskname=ip1} className="form-control" />

                <label>Cost</label>
                <input ref={(ip2)=>taskcost=ip2} className="form-control" />

                <label>Category</label>
                <input ref={(ip3)=>taskcategory=ip3} className="form-control" />

                <label>Image</label>
                <input ref={(ip4)=>taskposter=ip4} className="form-control" />
               
                </div>
                
           <button onClick={()=>props.addProduct(taskname.value,taskcost.value,taskcategory.value,taskposter.value)}
           type="button" className="btn btn-success btn-block">Add Task</button>

            </form>

            </div>
        )
}

export default AddProduct;

