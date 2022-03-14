import React from 'react';
import ContaxtChild2 from './ContaxtChild2';

const ContaxtChild1 = (props) => {
    console.log("Child-One")
    return (
        <div>
            <h1>This is Contaxt Child 1 Componet</h1>
            <h1>{props.value.address}</h1>
            <ContaxtChild2  value={props.value}/>
        </div>
    );
};

export default ContaxtChild1;