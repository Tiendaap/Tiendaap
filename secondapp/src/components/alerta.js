const Alerta = ({ alerta }) => {
    return (
        <div className={`${alerta.error}`}>
            {alerta.msg}
        </div>
    )
}
export default Alerta