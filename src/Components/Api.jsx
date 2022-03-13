import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Api = () => {
    const [data,setData]=useState()
    const getData=async()=>{
        const data1= axios.get("https://reqres.in/api/users?page=2").then(res=>{})
        setData(data1)
        console.log("result===>",data)
    }
    useEffect=(()=>{
        getData()
    },[])
    return (
        
        <div>
            
        </div>
    );
};

export default Api;