import React from 'react';
import ContaxtChild3 from './ContaxtChild3';

const ContaxtChild2 = ({value}) => {
    console.log("Child-Two")
    return (
        <div>
            <h1>This is Cotaxt Child 2 Component</h1>
            <p> {value.age}   </p>
            <ContaxtChild3 data={value}/>
        </div>
    );
};

export default ContaxtChild2;