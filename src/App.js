import React, { useState } from 'react'
import './App.css';
import pic from './img/internet-mail.svg'
import infoPic from './img/info.svg'

//forms com os campos Nome, Telefone, Email, Mensagem
//botao de enviar, ao clicar redirecionar para outra tela 
//mostrar os dados e agradecer o contato

const App = ()=> {
    //variaveis
    const[nome,setNome] = useState('');
    const[tel,setTel] = useState('');
    const[email,setEmail] = useState('');
    const[mensagem,setMensagem] = useState('');
    const[modal,setModal] = useState(false);
    
    //handler botao enviar
    const enviarButton = (event) =>{
        event.preventDefault();
        setModal(true);
    }

    const fecharModal = () =>{
        setModal(false);
        setNome('');
        setTel('');
        setEmail('');
        setMensagem('');
    }
    //funcoes de atribuicao para cada variavel
    const handleNome = (event) =>{
        let aux = event.target.value;
        if(nome.length < 50 || aux.length < 50)
            setNome(event.target.value);
        
    }

    const handleTel = (event) =>{
        let aux = event.target.value;
        
        if(aux.length === 1 && tel.length === 0)
            setTel('(' + event.target.value);
        else if(aux.length === 1 && tel.length === 2)
            setTel(event.target.value);
        else if(aux.length === 3 && tel.length === 2)
            setTel(event.target.value + ')');
        else if(aux.length === 3 && tel.length === 4)
            setTel(event.target.value);
        else if(aux.length === 8 && tel.length === 9)
            setTel(event.target.value);
        else if(aux.length === 9 && tel.length === 8)
            setTel(event.target.value + '-');
        else if(tel.length < 14 || aux.length < 14)
            setTel(event.target.value);
    }

    const handleEmail = (event) =>{
        let aux = event.target.value;
        if(email.length < 50 || aux.length < 50)
            setEmail(event.target.value);
    }

    const handleMensagem = (event) =>{
        let aux = event.target.value;
        if(mensagem.length < 280 || aux.length < 280)
            setMensagem(event.target.value);
    }

    const displayPage = () =>{
        if(modal)
            return(
                <div className='divModal'>
                    <h1 className='headerStyle'>Obrigado por nos fornecer seu contato!</h1>
                    <div>
                        
                    </div>
                    <div className='divInfoModal'>
                        <div className='divColumn'>
                            <p className='titleData'>Nome:</p>
                            <p> {nome}</p>
                        </div>
                        
                        <div className='divRow'>
                            <div className='divColumn'>
                                <p className='titleData'>Telefone:</p>
                                <p> {tel}</p>
                            </div>
                            <div className='divColumn'>
                                <p className='titleData'>Email:</p>
                                <p> {email}</p>
                            </div>
                        </div>
                        <div className='divColumn'>
                            <p className='titleData'>Mensagem:</p>
                            <p> {mensagem}</p>
                        </div>
                        <img src={infoPic} className='imageInfoStyle'></img>
                    </div>
                    <div className='buttonStyle' onClick={()=>fecharModal()}>Fechar</div>
                </div>
            )
        else
            return(
                <div className='pageForms'>
                    <img src={pic}className='imageStyle'></img>
                    <h1 className='headerStyle'>Insira seu contato</h1>
                    <form className='formsStyle' onSubmit={enviarButton}>
                            <label>Nome</label>
                            <input   
                                className='inputs'
                                type='text' 
                                name='inputNnome' 
                                placeholder='ex:João da Silva'
                                onChange={(event) => handleNome(event)} 
                                value={nome}
                                required/>
                            <div className='divRow'>
                                <div className='divColumn'>
                                    <label>Telefone</label>
                                    <input 
                                        className='inputs' 
                                        type='text'
                                        name='inputTel' 
                                        placeholder='ex:(43)99999-9999'
                                        onChange={(event) => handleTel(event)} 
                                        value={tel}
                                        required/>
                                </div>
                               <div className='divColumn'>
                                <label>E-mail</label>
                                    <input 
                                        className='inputs' 
                                        type='email'
                                        name='inputEmail' 
                                        placeholder='ex:joaosilva@gmail.com'
                                        onChange={handleEmail} 
                                        value={email}
                                        required/>
                               </div>
                               
                            </div>
                            <label>Mensagem</label>
                            <textarea 
                                className='mensagemInput' 
                                type='text'
                                name='inputMensagem'
                                placeholder='Escreva aqui sua mensagem' 
                                value={mensagem} 
                                onChange={handleMensagem}
                                required> </textarea>
                            <button className='buttonStyle buttonFormsStyle' type='submit'>Enviar</button>                        
                    </form>
                </div>
            )
    }

    return (
        <div className="App">
            <div className='figuresContainer'>
                <div className='figure'></div>
            </div>
             
             {displayPage()}
            
        </div>
    );
}

export default App;
