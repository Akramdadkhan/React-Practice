import React from 'react';
import axios from "axios"
import { useEffect } from 'react';
import { useState }  from 'react';

 
const Api = () => {
    const [data,setData]=useState([])
    const getPostDetail =async()=>{
    const result= await axios.get(" https://fakestoreapi.com/products")
        // console.log("result==>",result.data)
        setData(result.data)
    }
    useEffect(()=>{
        getPostDetail()
    },[])
    return (
        <div>
            <h1>Main Component</h1>

{data.map((myData)=>{
    return(
        <div key={myData.id}>
        <h2>Title{myData.title}</h2>
        <p>Body{myData.body}</p>
    </div>
    )
}
)}

            
        </div>
    );
};

export default Api; 