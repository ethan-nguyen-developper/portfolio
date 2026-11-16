import { Link } from "react-router-dom"

function Documentations() {
    return (
        <>
            <h1>Veuillez trouver le tableau de synthèse et toutes les documentations relatives à ma formation et mes projets en entreprise.</h1>
            <a href="#">Visualiser mon tableau de synthèse en pdf</a>
            <a href="#">Télécharger mon tableau de synthèse en version modifiable</a>
            <h2>Mes réalisations</h2>
            <Link to="/ecole">Projets école</Link>
            <Link to="/entreprise">Projets entreprise</Link>
        </>
    )
}

export default Documentations