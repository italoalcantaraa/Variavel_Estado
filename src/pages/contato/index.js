import './index.scss';

import Email from '../../assets/images/email.png';
import Telefone from '../../assets/images/telefone.png';
import LiveChat from '../../assets/images/chat.png';

import Cabecalho from '../../assets/components/cabecalho';

export default function Contato() {
    return (
        <>
        <Cabecalho />
            <div className='ContainerContato'>
                <div className='Mensagem'>
                    <h1>Fale com a gente!</h1>
                    <p>Nossos atendentes estão prontos para resolver suas dúvidas.</p>
                </div>
                <div className='OpcoesContato'>
                    <div>
                        <img src={Email} />
                        <p>Por e-mail</p>
                    </div>
                    <div>
                        <img src={Telefone} />
                        <p>Por Telefone</p>
                    </div>
                    <div>
                        <img src={LiveChat} />
                        <p>Live Chat</p>
                    </div>
                </div>  
            </div>
        </>
    )
}