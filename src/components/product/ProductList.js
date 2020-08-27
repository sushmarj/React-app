import React from 'react';
import Thead from './Thead';
import TableRow from './TableRow';
import { withRouter } from 'react-router-dom';

const ProductList=(props)=> {

    const editClick=(id)=>{
        props.history.push('/proedit/'+id);
    }
    
        return(
            <table className="table table-bordered table-striped">
            <Thead />
            <tbody>
                {props.products.map((product)=>
                  <TableRow  key={product.id}
                  id={product.id}
                  name={product.name}
                  cost={product.cost}
                  category={product.category}
                  poster={product.poster}
                  deleteProduct={props.deleteProduct}
                  editClick={editClick} />  )}
            </tbody>

            </table>
        )
}

export default withRouter(ProductList);

