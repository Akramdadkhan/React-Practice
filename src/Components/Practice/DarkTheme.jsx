import React,{useState} from 'react';
import "./DarkTheme.css"

const DarkTheme = () => {
    const [on,of]=useState("bulb")
    return (
        <React.Fragment>
            <div className='bulb'>
                 <button onClick={()=>on==="bulb"? of("bulboff"):of("bulb")}>

                  {on==="bulb"?"OFF":"ON"}
                 </button>
            </div>
        </React.Fragment>
    );
};

export default DarkTheme;