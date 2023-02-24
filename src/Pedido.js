const Pedido = (props) => (
    <div
        className='d-flex'>
        <div className='d-flex align-items-center'>
            <i className={props.icone}></i>
        </div>
        <div
            className='flex-grow-1 ms-2 rounded border'>
            <h4 className='text-center'>{props.titulo}</h4>
            <p className='text-center'>{props.descricao}</p>
        </div>
    </div>
)

export default Pedido