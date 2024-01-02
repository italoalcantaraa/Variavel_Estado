import './App.scss';

import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Cabecalho from '../../assets/components/cabecalho';

export default function Home() {

    return (
            <div className='ContainerHome'>
                <Cabecalho />
                <div className='ContainerOptions'>
                    <h1>Seja Bem-vindos(as) ao ReactJS</h1>
                    <div className='Options'>
                            <Link to="/contato">Contato</Link>
                            <Link to="./eventos" >Eventos</Link>
                            <Link to="./variavelStd" >Variável de Estado</Link>
                            <Link to="/componentes">Componentes</Link>
                    </div>
                </div>
                <div className='rodape'>
                    <p>SENAC-SP</p>
                </div>
            </div>
       
    )
}