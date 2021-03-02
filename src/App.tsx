import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { Usuario, Post } from './types/types'
import useUserList from './hooks/useUserList'

// Liste todos os usuários dessa api: https://jsonplaceholder.typicode.com/users/
// Mostre apenas o nome e o id de cada usuário Exemplo: Maria (1)
// Coloque um evento de click no nome do usuário e salve o id do usuário em um estado
// Use esse id e faça uma requisição na API de post
// Exemplo:
// https://jsonplaceholder.typicode.com/users/2/posts
// Liste todos os posts do usuário selecionado
// Ao selecionar outro usuário os posts irão alterar
// Não se preocupe com CSS
// Não se preocupe em criar componentes, pode fazer tudo no App.tsx

function App() {

  const listaUsuarios = useUserList()

  const [idSelecionado, setIdSelecionado] = useState<number>()

  const [postsDoUsuario, setPostsDoUsuario] = useState<Post[]>([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${idSelecionado}/posts`)
    .then(respostaPostsUsuario => setPostsDoUsuario(respostaPostsUsuario.data))
  }, [idSelecionado])

  return (
    <div className="App">
       {
         listaUsuarios.map((item: Usuario) => {
          return (
              <p key={item.id} onClick={() => setIdSelecionado(item.id)}>{item.id} - {item.name}</p>
          )
         })
       }
        <hr/>
       {
         postsDoUsuario.map((item: Post) => {
          return (
            <>
              <p key={item.id}>Título: {item.title}</p>
              <p key={item.id}>ID do Usuário: {item.userId}</p>
            </>
          )
         })
       }
    </div>
  );
}

export default App;
