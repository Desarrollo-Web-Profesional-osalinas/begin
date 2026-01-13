import datos from "../datos/datos"
const Listado = () => {
    return(
        <div>
        <h2>Listado de Personas</h2>
        <ul>
            {datos.map(persona => (
                <li key={persona.id}>{persona.nombre} - {persona.edad}</li>

            ))}
        </ul>
        </div>
    )
}
export default Listado