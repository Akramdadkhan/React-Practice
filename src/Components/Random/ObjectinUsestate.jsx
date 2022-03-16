import React,{useState} from 'react';

const ObjectinUsestate = () => {
    // const [name,setName] = useState("Hello")
    // const  [age,setAge] = useState("Hello")
    // const [message,setMessage] = useState("Hello")

    const [details,setDetails] = useState({
     name:"Akram",
     age:19,
     message:"Hello"
    })
    return (
        <div>
            <h1>This is objectInUsestate Component</h1>
            {/* <input type="text" placeholder="Name" onChange={(elem)=>setName(elem.target.value)} /><br /><br /><br />
            <input type="text" placeholder="Age"  onChange={(elem)=>setAge(elem.target.value)}  /><br /><br /><br />
            <input type="text" placeholder="Message"  onChange={(elem)=>setMessage(elem.target.value)} /><br /><br /><br />
            <h1>Name:{name}</h1>
            <h1>Age:{age}</h1>
            <h1>Message:{message}</h1> */}

            <input type="text" placeholder="Name" onChange={(elem)=>setDetails({...details,name: elem.target.value})} /><br /><br /><br />
            <input type="text" placeholder="Age"  onChange={(elem)=>setDetails({...details,age: elem.target.value})}  /><br /><br /><br />
            <input type="text" placeholder="Message"  onChange={(elem)=>setDetails({...details,message: elem.target.value})} /><br /><br /><br />
             <h1>Name :{details.name}</h1>
             <h1>Name :{details.age}</h1>
             <h1>Name :{details.message}</h1>
        </div>
    );
};
export default ObjectinUsestate;