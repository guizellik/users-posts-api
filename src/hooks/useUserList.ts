import axios from 'axios';
import { useState, useEffect } from 'react'

import { Usuario } from '../types/types';

const useUserList = () => {

  const [listaUsuarios, setListaUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(respostaListarUsuarios => setListaUsuarios(respostaListarUsuarios.data))
  }, [])

  return listaUsuarios
}

export default useUserList