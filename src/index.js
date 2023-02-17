import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'

const App = () => (
    <div className='container border rounded mt-2'>
        <div className='row border-bottom m-2'>
            <h1 className='display-5 text-center'>Seus pedidos</h1>
        </div>

        <div
            className='row'>
            <div
                className='col-sm-8 col-md-6 m-2'>
                    <Pedido 
                        data='22/04/2023'
                        icone="fas fa-hdd fa-2x"
                        titulo="SSD"
                        descricao="SSD Kingston A400 - SATA"
                    />
            </div>                    
        </div>

        <div
            className='row'>
            <div
                className='col-sm-8 col-md-6 m-2'>
                    <Pedido 
                        data='20/04/2023'
                        icone='fas fa-book fa-2x'
                        titulo="Livro"
                        descricao="Concrete Mathematics - Donald Knuth"
                    />
            </div>
                   
        </div>

        <div
            className='row'>
            <div
                className='col-sm-8 col-md-6 m-2'>
                    <Pedido 
                        data="21/01/2021"
                        icone="fas fa-laptop fa-2x"
                        titulo="Notebook"
                        descricao="Notebook Dell - 8Gb - i5"
                    />
            </div>
        </div>

    </div>
)
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)