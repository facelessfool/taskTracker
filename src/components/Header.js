import React from 'react'
import Button from "./Button"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {

    const onClick = () =>{
        console.log("click")
    }

    return (
        <div>
            <h1>Task tracker</h1>
            <p> {props.name}</p>
            <Button className="d-flex align-items-center" name="Add" onClick={onClick}/>
            
        </div>
    )
}

export default Header
