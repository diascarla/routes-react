import { Link } from "react-router-dom"

function Contato(){
    return(
        <>
            <h1>Página Contato</h1>
            <Link to={"/empresa"} >Empresa</Link>
        </>
    )
}

export default Contato