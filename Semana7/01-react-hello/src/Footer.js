import React from 'react'

const Footer = () =>{
    let año = new Date().getFullYear();
    let mes = new Date().getMonth();
    return(
        
        <footer>
            <p>{mes}/{año}</p>
            <p>codigo-2021</p> 
            </footer>
    )
}
export default Footer;