import React from "react";

interface Props {
    // Vous devrez définir les props ici.
}

const Enfant = ({ title, elementsAAfficher, pageActuelle, currentTheme }) => {
    console.log(elementsAAfficher);

    return (
        <h1>Définition des props</h1>
    )
}

export default Enfant;