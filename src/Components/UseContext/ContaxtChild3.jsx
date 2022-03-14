import React from 'react';

const ContaxtChild3 = ({data}) => {
    console.log("Child-Three")
    return (
        <div>
            <h1>This is Cotaxt Child 3 Component</h1>
             <p>Data Recieve From Parent Comp:{data.age}</p>
        </div>
    );
};

export default ContaxtChild3;