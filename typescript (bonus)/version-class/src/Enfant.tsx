import React from "react";

interface Props {
    // Vous devrez définir les props ici.
}

class Enfant extends React.Component {
    render() {
        const { title, elementsAAfficher, pageActuelle, currentTheme } = this.props; 
        console.log(title, elementsAAfficher, pageActuelle, currentTheme);
        return (
            <h1>Définition des props</h1>
        )
    }
}

export default Enfant;