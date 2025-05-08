import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
            <h1>Página Home</h1>
            <Link to={"/contato"} >Contato</Link>
        </>
    )
}

export default Home