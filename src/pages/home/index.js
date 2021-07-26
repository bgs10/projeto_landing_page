import {useState} from 'react';
import * as S from './styled';
import imagem from './imagens/black.png'

function App(props) {
  const [ usuario, setUsuario]  = useState('');
  const [ erro, setErro] = useState(false);
  
  const localStorageEmails = JSON.parse(localStorage.getItem('emails'));
  let emails = localStorage.getItem('emails') !== null ? localStorageEmails : [];
  
  function handleCadastrar(){    
    console.log('Teste', {usuario}.value);
    if({usuario}.value !== 'undefined'){
      emails.push({usuario});
      setErro(false);
      localStorage.setItem('emails', JSON.stringify(emails));
      setUsuario('');
    }else{
      console.log('erro');
      setErro(true);
    }
    
  }

  return (
    <S.HomeContainer>
      <S.TitleH1>A Black das Blacks</S.TitleH1>
      <S.Bloco>
        <S.Image src={imagem} alt="Minha Figura"/>  
        <S.Email>          
          <h1>{props.title}</h1>        
          <S.TitleH5>Cadastre seu e-mail para receber promoções</S.TitleH5>        
          <S.Input name="email" id="email" className="emailInput" type="email" autocomplete="username" placeholder="E-mail" value={usuario} onChange={e => setUsuario(e.target.value)}/>
          <S.Button type="button" onClick={handleCadastrar}>Cadastra-se</S.Button>
          { erro ? <S.ErrorMsg>Você deve informar seu e-mail</S.ErrorMsg> : 'E-mail cadastrado com sucesso'}
        </S.Email>          
      </S.Bloco>      
    </S.HomeContainer>
    
  );
}

export default App;
