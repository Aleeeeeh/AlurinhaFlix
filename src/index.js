import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index';
/* Conceito de SPA utilizando esses 3 componentes */
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video/index'
import CadastroCategoria from './pages/cadastro/categoria';

//Desafio de colocar uma página 404 animada, ou algo do tipo
const pagina404 = () => (<div>Página 404</div>) /* Em parênteses comum neste caso */

ReactDOM.render(
  <BrowserRouter>{/* Rotas do navegador */}
  <Switch>{/*Aqui dentro colocar as rotas possiveis */}
    <Route path='/' component={Home} exact/>{/* Uma rota */}
    <Route path='/cadastro/video' component={CadastroVideo} />
    <Route path='/cadastro/categoria' component={CadastroCategoria} />
    <Route component={pagina404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

/* Lembrando que o react-router-dom é o responsável por tornar o projeto em SPA, que consiste em navegar nas pages
sem que as páginas de refresh */