import React from 'react'
import Button from "./Button"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({onAdd,showAdd}) => {

    
    return (
        <div>
            <h1 style={{color:'white', width: '28rem', marginLeft:"20%" }} className="d-flex align-items-left justify-content-center " >Task tracker</h1>
            
            <Button 
            style={{alignSelf:'center'}}
           
            color={showAdd?'#f3f2f5':'#f3f2f5'}
              name={showAdd?"Close":"Add"} onClick={onAdd}/>
            
        </div>
    )
}

export default Header
