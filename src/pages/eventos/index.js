import './index.scss';

import Cabecalho from '../../assets/components/cabecalho';
import { useEffect, useState } from 'react';

export default function Eventos(){
   
const [selected, setSelected] = useState(false);  
const [nome, setNome] = useState();
const [testes, setTestes] = useState(0);

function OptionSelected(){
    setSelected(true);
}

function Salvar(){
    if(selected === true && nome != ""){
        alert(`${nome}, você foi cadastrado ( ;`)
    }
    else{
        alert("informe seu nome e  selecione a opção");
    }
    
}
    return(
        <>
            <Cabecalho />
            <div className='ContainerEventos'>
                    <h1>Eventos</h1>
                    <div className='eventos'>
                        <div className='onChange'>
                            <p>onChange</p> 
                            <input type='text' placeholder='digite seu nome' value={nome} onChange={(e) => setNome(e.target.value)}/> 

                            <div>
                            <input type='radio' value={selected} onClick={OptionSelected}/>
                            selecione
                            </div>
                        </div>
                        <div className='salvar'>
                            <p>OnClick</p>
                            <button onClick={Salvar}>Salvar</button>
                        </div>
                    </div>
            </div>
        </>
    )
}