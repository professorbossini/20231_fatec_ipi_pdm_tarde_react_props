import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

const App = () => {
    const textoOK = 'Já chegou'
    const textoNOK = 'Ainda não chegou'
    const funcaoOK = () => alert('Agradecemos a confirmação');
    const funcaoNOK = () => alert ('Vamos verificar o ocorrido')
    const componenteFeedback = (
        <Feedback
            textoOK={textoOK}
            textoNOK={textoNOK}
            funcaoOK={funcaoOK}
            funcaoNOK={funcaoNOK}/>
    )
    return <div className='container border rounded mt-2'>
        <div className='row border-bottom m-2'>
            <h1 className='display-5 text-center'>Seus pedidos</h1>
        </div>

        <div
            className='row'>
            <div
                className='col-sm-8 col-md-6 m-2'>
                    <Cartao cabecalho="22/04/2021">
                        <Pedido 
                            icone="fas fa-hdd fa-2x"
                            titulo="SSD"
                            descricao="SSD Kingston A400 - SATA"
                        />
                        {componenteFeedback}
                    </Cartao>
            </div>                    
        </div>

        <div
            className='row'>
            <div
                className='col-sm-8 col-md-6 m-2'>
                    <Cartao
                        cabecalho="20/04/2023">
                        <Pedido 
                            icone='fas fa-book fa-2x'
                            titulo="Livro"
                            descricao="Concrete Mathematics - Donald Knuth"
                        />
                        {componenteFeedback}
                    </Cartao>
            </div>
                   
        </div>

        <div
            className='row'>
            <div
                className='col-sm-8 col-md-6 m-2'>
                    <Cartao
                        cabecalho="21/01/2021">
                        <Pedido 
                            icone="fas fa-laptop fa-2x"
                            titulo="Notebook"
                            descricao="Notebook Dell - 8Gb - i5"
                        />
                        {componenteFeedback}
                    </Cartao>
            </div>
        </div>

    </div>
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)