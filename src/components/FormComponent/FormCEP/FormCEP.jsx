import { useEffect, useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    cep: '',
    endereco: '',
    estado: '',
  })

  const [cep, setCep] = useState('')

  const handleInput = (event) => {
    event.preventDefault();
    const { value, id } = event.target;

    const data = {...formData, [id]: value};
    setFormData(data);
  }

  const handleCep = (event) => {
    event.preventDefault();
    const { value } = event.target;

    if(value.length === 8) {
      setCep(value);
      handleInput(event);
    }
  }

  useEffect( () => {
    const API_VIACEP = 'https://viacep.com.br/ws/CEP/json/';
    async function request() {
      const response = await fetch(API_VIACEP.replace('CEP', cep))
      const data = await response.json();

      setFormData({...formData, 
        endereco: data.logradouro, 
        estado: data.uf
      })

    }

    request();
  }, [cep])

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    // isFormValid()
    //   ? alert(`${formData.email} logado com sucesso`)
    //   : alert(`Verifique os campos`);
  }

  const isFormValid = () => {
    let validate = true;

    const data = Object.entries(formData);

    for(const [key] of data) {
      if(!formData[key].length) {
        validate = false;
      }
    }

    return validate;
  }

  return(
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" placeholder="Digite seu e-mail" onInput={handleInput}/>

      <label htmlFor="password">Senha</label>
      <input type="password" id="password" placeholder="Digite sua senha" onInput={handleInput}/>

      <label htmlFor="cep">CEP</label>
      <input type="text" id="cep" placeholder="CEP" onInput={handleCep}/>

      <label htmlFor="endereco">Endereço</label>
      <input type="text" id="endereco" placeholder="Endereço" value={formData.endereco} readOnly/>

      <label htmlFor="estado">Estado</label>
      <input type="text" id="estado" placeholder="Estado" value={formData.estado} readOnly/>

      <button type="submit">Enviar</button>
    </form>
  )
}

  useEffect( () => {
    const API_VIACEP = 'https://viacep.com.br/ws/CEP/json/';
    async function request() {
      const response = await fetch(API_VIACEP.replace('CEP', cep))
      const data = await response.json();

      setFormData({...formData, 
        endereco: data.logradouro, 
        estado: data.uf
      })

    }

    request();
  }, [cep]) 