import React from 'react';
import { createContext } from 'react';
import Child1 from './Child1';

export const sendData = createContext();
const Parent = () => {
     
    // console.log(sendData);
    const name="Akram dad khan"
    
    return (
        <div>
            <h1>This is Parent</h1>
            <sendData.Provider value={name}>
            <Child1/>
            </sendData.Provider>
        </div>
    );
};

export default Parent;