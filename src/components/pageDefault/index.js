import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer';
import styled from 'styled-components'

//Var no css pegamos o que está pré-definido no index.css da pasta raiz src
const Main = styled.main`
background-color: var(--black);
color: var(--white);
flex: 1;
padding-top:50px;
padding-left:5%;
padding-right:5%5%;
` 

function PageDefault(props){
    return (
        <>
            <Menu />
            <Main>
                {props.children} {/* Conteudo seja renderizando entre menu e o footer, usando a função page, exemplo no index.js do cadastro de video */}
            </Main>
            <Footer />
        </>
    );
}

export default PageDefault