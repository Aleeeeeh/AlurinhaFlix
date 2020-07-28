import React from 'react'
import Logo from '../../assets/img/AlurinhaFlix.png';
import './Menu.css'
import Button from '../components/button/index'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="AlurinhaFlix Logo"/>
            </a>

            <Button className="ButtonLink"href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;

