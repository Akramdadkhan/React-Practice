import React, { useState } from "react";
import "./practice.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ConvertToCapital = () => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log("Our On Change");
  };

  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOfClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div>
        {/* <input  type="text" value={text} onChange={handleOnChange} id="myBox"/><br /> */}
    <Form>
           <Form.Group className="input">
            <Form.Control as="textarea" rows={15} value={text} onChange={handleOnChange} id="myBox"/>
          </Form.Group>
        </Form>
        <Button variant="outline-success" onClick={handleOnClick}>
          Click To Upper Case
        </Button>{" "}
        &nbsp; &nbsp; &nbsp;
        <Button variant="outline-success" onClick={handleOfClick}>Click To Lower Case</Button>
        &nbsp; &nbsp; &nbsp;
        <Button variant="outline-danger" onClick={handleClearClick}>Click To Clear Text</Button> 
        &nbsp; &nbsp; &nbsp;
        <Button variant="outline-success" onClick={handleCopyText}>Click To Copy Text</Button> 
        &nbsp;&nbsp; &nbsp;
        <Button variant="outline-success" onClick={handleExtraSpaces}>Click To Remove Extra Space </Button>
      </div>
      <div>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words & {text.length}Characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <p>Preview:{text}</p>
      </div>
    </>
  );
};

export default ConvertToCapital;
