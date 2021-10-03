import React from "react";

/*
  Vous devez boucler au travers de la liste de chiens dans le but d'afficher uniquement leur nom à l'écran.
  La liste se nomme LISTE_DE_CHIENS et est située dans le composant Afficheur.
*/

class Afficheur extends React.Component {
  render() {
    const UN_PREMIER_CHIEN = { nom: "Bobby", race: "Chihuahua" };
    const UN_DEUXIEME_CHIEN = { nom: "Gontran", race: "Doberman" };
    const UN__TROISIEME_CHIEN = { nom: "Gertrude", race: "Labrador" };

    const LISTE_DE_CHIENS = [
      UN_PREMIER_CHIEN,
      UN_DEUXIEME_CHIEN,
      UN__TROISIEME_CHIEN,
    ];
    return (
      <>
        <h1>Noms de chiens</h1>

        {/* La liste de noms devra être affichée ici. */}
      </>
    );
  }
}

export default Afficheur;
