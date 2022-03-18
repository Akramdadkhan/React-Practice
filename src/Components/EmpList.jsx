import { Card } from "react-bootstrap"

export const Emplist=(props)=>{
    return(
        <Card>
            <Card.Body>
                <h3>{props.dept}</h3>
           <ol>
               {props.epm.map((item)=>(
               <li>Master.{item}</li>)
               )}
           </ol>
            </Card.Body>
        </Card>
    );
};