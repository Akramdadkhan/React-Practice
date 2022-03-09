import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';

const OurCourses = () => {
const [courseData,setCourseData]=useState([])
const [name,setName]=useState();
const [image,setImage]=useState();
const [desc,setDesc]=useState();
const selector =useSelector((state)=>state.coursesReducer.coursesData)
useEffect(()=>{
    setCourseData(selector)
},[selector])

const dispatch=useDispatch()
const handleAdd=(()=>{
dispatch({
    type:"ADD_COURSES",data:{name,image,desc}
})
})
    return (
        <div>
        {courseData.map((item)=>{
            return(
            
                <Card style={{width:"18rem",display:"inline-block"}}>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body> 
                    <img src={item.image} alt="Courses-image" style={{width:"15rem ",height:"300px"}}/>
                 </Card.Body>
                <Card.Footer> <p>{item.desc}</p> </Card.Footer>
                </Card>
                
            )
        })}
        <div style={{float:"right",margin:"18px"}}>
            <input type="text" placeholder='Enter Course Name' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='Enter Course Image Ul' onChange={(e)=>setImage(e.target.value)}/>
            <input type="text" placeholder='Enter Course Descripton' onChange={(e)=>setDesc(e.target.value)} />
            <button onClick={handleAdd}>Add-Corse</button>
        </div>
            
            </div>
    );
};

export default OurCourses;