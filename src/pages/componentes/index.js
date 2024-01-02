import './index.scss';

import Discord1 from '../../assets/images/discord1.png';
import Discord2 from '../../assets/images/discord2.png';
import Discord3 from '../../assets/images/discord3.png';

import Cabecalho from '../../assets/components/cabecalho';
import { useState } from 'react';

export default function Componentes() {

const [couter1, setCounter1] = useState(0);
const [counter2, setCounter2] = useState(0);
const [counter3, setCounter3] = useState(0);

    return (
        <>
            <Cabecalho />
            <div className="containerComponentes">
                <h1 id='titulo'>Componente</h1>
                <div className='componente'>
                    <p >Contador</p>
                    <div className='Contadores'>
                        <div>
                            <p>Visitas</p>
                            <button onClick={() => setCounter1(couter1 + 1)}>+</button>
                            <h1 value={couter1} onChange={(e) => setCounter1(e.target.value)}>{couter1}</h1>
                            <button onClick={() => setCounter1(couter1 - 1)}>-</button>
                        </div>
                        <div>
                            <p>Passos</p>
                            <button onClick={() => setCounter2(counter2 + 1)}>+</button>
                            <h1 value={counter2} onChange={(e) => setCounter2(e.target.value)}> {counter2}</h1>
                            <button onClick={() => setCounter2(counter2 - 1)}>-</button>
                        </div>
                        <div>
                            <p>Erros</p>
                            <button onClick={() => setCounter3(counter3 + 1)}>+</button>
                            <h1 value={counter3} onChange={(e) => setCounter3(e.target.value)}>{counter3}</h1>
                            <button onClick={() => setCounter3(counter3 - 1)}>-</button>
                        </div>
                    </div>
                </div>
                <div id='Linha'>
                    <div></div>
                </div>
                <div className='Discord'>
                    <div>
                        <p>De clipes a fotos, compartilhe à vontade com uploads maiores</p>
                        <img src={Discord1} />
                    </div>
                    <div>
                        <p>Faça transmissões de aplicativos e jogos em HD</p>
                        <img src={Discord2} />
                    </div>
                    <div>
                        <p>Desbloqueie vantagens para suas comunidades com 2 Impulsos</p>
                        <img src={Discord3} />
                    </div>
                </div>
                <div id='Linha'>
                    <div></div>
                </div>
                <div className='ListaTarefas'>
                    <div className='inserirTarefa'>
                        <p>Tarefa:</p>
                        <input placeholder='Nova tarefa' type='text' />
                        <button>Adicionar</button>
                        <table>
                            <ul>
                                fotos cabecalho
                            </ul>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}