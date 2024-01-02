import './index.scss';
import Cabecalho from '../../assets/components/cabecalho';
import { useState } from 'react';

export default function VariavelEstado() {

    const [counter, setCounter] = useState(0);
    const [soma, setSoma] = useState(false);
    const [subtrair, setSubtrair] = useState(false);
    const [multiplicar, setMultiplicar] = useState(false);
    const [dividir, setDividir] = useState(false);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);

    const CalculoSoma = () => {
        const r = parseInt(num1) + parseInt(num2);
        setResult(r);
    }

    const CalculoSubtrair = () => {
        const r = num1 - num2;
        setResult(r);
    }

    const CalculoDividir = () => {
        const r = num1 / num2;
        setResult(r);
    }

    const CalculoMultiplicar = () => {
        const r = num1 * num2;
        setResult(r);
    }

    function AdicionarTarefa() {
        if(tarefa === ''){
            alert("Insira uma tarefa")
        }
        else{
            tarefas.push(tarefa);
            setTarefas([...tarefas]);
        }
        
    }

    return (
        <>
            <Cabecalho />
            <div className="ContainerVariavelEstd">
                <h1>Variável de Estado</h1>

                <div className='ContainerCounter'>
                    <p>Contador</p>
                    <div className='contador'>
                        <p>Visitas</p>
                        <button onClick={() => setCounter(counter + 1)}>+</button>
                        <h1>{counter}</h1>
                        <button onClick={() => setCounter(counter - 1)}>-</button>
                    </div>
                </div>

                <div id='Linha'>
                    <div></div>
                </div>

                <div className='ContainerCalculadora'>
                    <p id='titulo'>Calculadora</p>

                    <div className='inserirValor'>
                        <div>
                            <p>Número  1:</p>
                            <input value={num1} onChange={(e) => setNum1(e.target.value)} type='number' placeholder='Informe o valor' />
                        </div>
                        <div>
                            <p>Número 2:</p>
                            <input value={num2} onChange={(e) => setNum2(e.target.value)} type='number' placeholder='Informe o valor' />
                        </div>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}> = {result}</p>
                        <div className='operacoes'>
                            <p value={soma} onChange={(e) => setSoma(e.target.value)} onClick={CalculoSoma}>Somar</p>
                            <p value={subtrair} onChange={(e) => setSoma(e.target.value)} onClick={CalculoSubtrair}>Subtrair</p>
                            <p value={multiplicar} onChange={(e) => setSoma(e.target.value)} onClick={CalculoMultiplicar}>Multipicar</p>
                            <p value={dividir} onChange={(e) => setDividir(e.target.value)} onClick={CalculoDividir}>Dividir</p>
                        </div>
                    </div>
                    <div id='Linha'>
                        <div></div>
                    </div>
                </div>
                <div className='ListaTarefas'>
                    <p id="titulo">Lista de Tarefas</p>
                    <div>
                        <p>Tarefa:</p>
                        <input type='Text' placeholder='Nova tarefa' value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
                        <button onClick={AdicionarTarefa}>Adicionar</button>
                    </div>
                    <table>
                        <ul>
                            {   
                                tarefas.map((e) => <li>{e}</li>)
                            }
                        </ul>
                    </table>
                </div>
            </div>
        </>
    )
}