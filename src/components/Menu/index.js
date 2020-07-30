import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/AlurinhaFlix.png';
import './Menu.css'
import Button from '../components/button/index'

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="AlurinhaFlix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink"to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;

