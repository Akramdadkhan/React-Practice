import React from 'react';
import Child2 from './Child2';

const Child1 = () => {
    return (
        <div>
            <h1>This is Child 1</h1>
            <Child2/>
        </div>
    );
};

export default Child1;