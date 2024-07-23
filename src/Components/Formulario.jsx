import { useState} from "react"
import './Formulario.css'

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(0);

    const calcularResultado = () => {     
        const alturaMetros = altura / 100; 
        const alturaAoQuadrado = alturaMetros * alturaMetros;
        const imc = peso / alturaAoQuadrado;

        setResultado(imc.toFixed(2)); 
    };

    return (
        <form>
            <p>Qual se sexo?</p>
            <input type="text" placeholder="Qual seu sexo?" />
            <p>Qual sua idade?</p>
            <input type="number" placeholder="Digite sua idade" />
            <p>Qual seu peso?</p>
            <input type="number" placeholder="Digite seu peso em kg" value={peso} onChange={(evento) => setPeso(parseInt(evento.target.value))}/>
            <p>Qual é a sua altura?</p>
            <input type="text" placeholder="Digite sua altura em cm" value={altura}  onChange={(evento) => { const value = evento.target.value;                  
                    if (!isNaN(value) || value === '') {
                        setAltura(value);
                    }
                }}/>
            <button type="button" onClick={calcularResultado}>
                Calcular
            </button>
            {}
            <p>Seu Imc é:</p>
            <input type="text" placeholder="Resultado" value={resultado} readOnly />
        </form>
    );
};

export default Formulario;






