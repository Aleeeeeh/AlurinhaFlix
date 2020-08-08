import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Butoon from '../../../components/components/button/index';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  // Chave varia poderá receber nome, descricao ...
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function HandleChange(infosDoEvento) {
    setValue(infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value);
  }

  // eslint-disable-next-line max-len
  /* Chamamos essa função useEffect quando quisermos que um efeito colateral aconteça, 1° param o que a gente
  quer que aconteça, o 2° opcional é quando a gente quer que aconteça */
  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);
  // setTimeout(() => {
  //   setCategorias([
  //     ...categorias,
  //     {
  //       id: '1',
  //       nome: 'Front End',
  //       descricao: 'Vamos estudar Front End !',
  //       cor: '#cbd1ff',
  //     },
  //     {
  //       id: '2',
  //       nome: 'Back End',
  //       descricao: 'Vamos estudar Back End !',
  //       cor: '#cbd1ff',
  //     },
  //   ]);
  // }, 4 * 1000);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      {/* Handle nome bastante usado quando se refere a eventos */}
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // eslint-disable-next-line no-console
        console.log('Você tentou enviar o form né ?');
        setCategorias([
          ...categorias,
          values,
        ]);
        setValue({ valoresIniciais });
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={HandleChange}
        />

        <FormField
          label="Descricao"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={HandleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={HandleChange}
        />

        {/* <div>
              <label>
                    Cor:
                    <input
                      type="color"
                      value={values.cor}
                      name="cor"
                      onChange={HandleChange}
                    />
                  </label>
              </div> */}

        <Butoon>
          Cadastrar
        </Butoon>
        {/* Enquanto não estiver buscado dados da categoria aparece Loading */}
        {categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )}

      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
