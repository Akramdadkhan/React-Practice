import React,{useEffect,useState} from 'react';
import "./Navigation.css"
import { useSelector,useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
const Navigation = () => {
    const [navData,setNavData]=useState([])
    const [name,setName]=useState()
    const [link,setUrl]=useState()
    const [target,setTarget]=useState()
    const finalResult=useSelector((state)=>state.navReducer.myData)
    
     useEffect(()=>{
     setNavData(finalResult)
     },[finalResult])
     const dispatch=useDispatch()
    const handleAdd=()=>{
    dispatch({type:"ADD_NAV_LINK" ,navData:{name,link,target}})
    }
    return (
        <div>
            <nav >
                {navData.map((item)=>{
                return(
                <a href={item.link} target={item.target}>
                    {item.name}
                </a>
                )    
                })}
            </nav>
            <div style={{float:"right",margin:"10px"}}>
                <input type="text" placeholder='Add New Nav Name' onChange={(e)=>setName(e.target.value)} />
                <input type="text" placeholder='Add New Nav URL' onChange={(e)=>setUrl(e.target.value)}/>
                <input type="text" placeholder='Add New Nav Target' onChange={(e)=>setTarget(e.target.value)} />
                <button onClick={handleAdd}>Add New Nav</button>
            </div>
            <Button>DashBoard</Button>
        </div>
    );
};

export default Navigation;