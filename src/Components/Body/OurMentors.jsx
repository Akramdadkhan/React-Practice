import React,{useState,useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
const OurMentors = () => {
    const [mentorsData,setMentorData]=useState([])
    const [name,setName]=useState()
    const [image,setImage]=useState()
    const [desc,setDesc]=useState()
    const finaldata=useSelector((state)=>state.mentorReducer.mentorData)
    useEffect(()=>{
        setMentorData(finaldata)
    },[finaldata])
    const dispatch=useDispatch()
    const handleAdd=()=>[
        dispatch({
            type:"ADD_MENTOR",data:{name,image,desc}
        })
    ]
    return (
        
        <div>
            {  mentorsData.map((item)=>{
                return(
                    <Card style={{ width: "18rem", display: "inline-block" }}>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Body>
                        <img src={item.image} alt="mentors image" style={{ width: "15rem" }} />
                    </Card.Body>
                    <Card.Footer><p>{item.desc}</p></Card.Footer>
                    </Card>
                )
            })}
            <div style={{float:"right",margin:"18px"}}>
                <input type="text" placeholder='Enter Mentor Name' onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder='Enter Mentor Image Url' onChange={(e)=>setImage(e.target.value)} />
                <input type="text" placeholder='Enter Mentor Description' onChange={(e)=>setDesc(e.target.value)}/>
                <button onClick={handleAdd}>ADD-MENTORS</button>
            </div>
        </div>
     
    
    
    );
};

export default OurMentors;