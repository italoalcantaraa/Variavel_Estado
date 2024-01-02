import './index.scss'

import Logo from '../../../assets/images/logo.png';

export default function Cabecalho() {
    return (
        <>
            <div className='cabecalho'>
                <img src={Logo} />
                <h1>Aplicações Web em Camadas</h1>
                <p>Bem-Vindo(a)</p>
            </div>
        </>
    )
}