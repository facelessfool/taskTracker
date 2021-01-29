

const Button = ({color,name, onClick}) => {

   

    return (
        <button 
        onClick={onClick}
        
        style={{backgroundColor:color}}>{name}</button>
    )
}

export default Button
