
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
 import { ProgressBar } from 'primereact/progressbar';

export default function StripedRows() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} stripedRows tableStyle={{ minWidth: '80rem',"margin-top":"80px" }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
             {/* <Column field="bar" header="Bar" Progress value={60}>  </Column>  */}
       <column field="bar" header="Bar" >     < ProgressBar value={50}></ProgressBar></column>
    
           
        
            </DataTable>
           </div>
    );
}
        