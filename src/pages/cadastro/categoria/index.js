import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Butoon from '../../../components/components/button/index';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
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
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
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
