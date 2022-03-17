import React, { useState } from "react";
import "./BgDisplay.css";
import { Row, Button } from "react-bootstrap";
//import { useState } from "react";
import "react-bootstrap" 

export const BGDisplay = () => {
  const [cls, setCls] = useState("bulb");
  return (
    <div>
      <Row>
        <div className={cls}>
          {/* <b>Bajaj</b> */}
          <Button onClick={()=>cls==="bulb"?setCls("bulboff"):setCls("bulb")}
          variant={cls==="bulb"?"danger":"success"}>
            {cls==="bulb"?"OFF":"ON"}
          </Button>
        </div>
      </Row>

      <Row>
        <div>
          <Button onClick={() => setCls("bulb")}>ON</Button>
          {/* &nbsp; &nbsp; &nbsp; &nbsp; */}
          <Button  onClick={() => setCls("bulboff")}>OFF </Button>
        </div>
      </Row>
    </div>
  );
};

export default BGDisplay;
