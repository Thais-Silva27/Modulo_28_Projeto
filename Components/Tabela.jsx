import './Tabela.css'

const Tabela = () => {
    const info = {        
        imagem: 'https://viverbem.unimedbh.com.br/wp-content/uploads/2021/06/tabela-IMC.png'

    }

    return (
        <div>
            <img className="Tabela-imagem"  src={info.imagem} />
            <h3>{info.dados}</h3>
        </div>
    )


}

export default Tabela;