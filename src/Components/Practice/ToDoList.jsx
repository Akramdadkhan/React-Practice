import React,{useState} from "react"

export const ToDoList=()=>{
    const [text,setText]=useState("")
    const [data,setData]=useState([])

    const handleAdd=()=>{
        setData([...data,text])
    }
    const handleRemove=()=>{
        setData ([])
    }
    return(
        <React.Fragment>
            <h1>This is Practice Component</h1>

            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleAdd}>Add+</button>
            &nbsp; &nbsp; &nbsp; 
            <button onClick={handleRemove}>Remove-</button>

            <ul>
                {data.map((item)=>{
                    return(
                        <div>
                            <b>
                                <li>
                                    {item}
                                </li>
                            </b>
                        </div>
                    )
                })}
            </ul>
             
        </React.Fragment>
    )
}