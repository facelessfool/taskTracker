

const Button = ({color,name, onClick}) => {

   

    return (
        <button  variant="primary"
         style={{ alignSelf:'center', width: '28rem', marginLeft:"30%" }} className=" justify-content-center "
        onClick={onClick}
        
        style={{ color:"black", backgroundColor:color}}>{name}</button>
    )
}

export default Button
