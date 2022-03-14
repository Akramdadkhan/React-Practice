import React from 'react';
import ContaxtChild1 from './ContaxtChild1';

const ContaxtParent = () => {
    const name= {
        age:19,
        address:"Nanded"
    }

    
    
    return (
        <div>
            <h1>This is Contaxt Parent Component</h1>
            <ContaxtChild1 value={name}/>
        </div>
    );
};

export default ContaxtParent;