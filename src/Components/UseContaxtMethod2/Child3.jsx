import React,{useContext} from 'react';
import { sendData } from './Parent';

const Child3 = () => {
const dataRecieved = useContext(sendData);

    return (
        <div>
            <h1>This is Child 3 </h1>
            <h1>Data Recieve Succesfully : {dataRecieved}</h1>

           
        </div>
    );
};

export default Child3;

 {/* <sendData.Consumer> 
                {(e)=>{
                return    <h1>Data Recive Successfully {e} </h1>
                }}
            </sendData.Consumer> */}
