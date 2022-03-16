import axios from 'axios';
import React,{useState,useEffect} from 'react';
import NavigationAsif from "../NavigationAsif"

const Api2 = () => {
    const [data,setData]=useState([])

    const getData=async()=>{
        const result= await axios.get("http://api.giphy.com/v1/gifs/trending?api_key=Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY ")
    console.log("===>",result)
    setData(result.data.data)
    }

    useEffect(()=>{
    getData()
    },[])
    return (
        <div>
            <NavigationAsif/>
            {data.map((item)=>{
                return(
                    <React.Fragment>
                        
                   <h1>Title:{item.title}</h1>
                   <img src={item.url} alt="" />
                    </React.Fragment>
                )
            })}
        </div>
    );
};

export default Api2;

 