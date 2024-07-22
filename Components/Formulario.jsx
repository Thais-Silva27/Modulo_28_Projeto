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
            <input type="text" placeholder="Qual seu sexo?" />
            <input type="number" placeholder="Digite sua idade" />
            <input type="number" placeholder="Digite seu peso" value={peso} onChange={(evento) => setPeso(parseInt(evento.target.value))}/>
            <input type="text" placeholder="Digite sua altura em cm" value={altura}  onChange={(evento) => { const value = evento.target.value;                  
                    if (!isNaN(value) || value === '') {
                        setAltura(value);
                    }
                }}/>
            <button type="button" onClick={calcularResultado}>
                Calcular
            </button>
            {}
            <input type="text" placeholder="Resultado" value={resultado} readOnly />
        </form>
    );
};

export default Formulario;






