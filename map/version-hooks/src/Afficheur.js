import React from "react";

/*
  Vous devez boucler au travers de la liste de chiens dans le but d'afficher leur nom et leur race à l'écran.
  Par exemple, le premier élément affiché serait 'Bobby Chihuahua'.

  La liste se nomme LISTE_DE_CHIENS et est située dans le composant Afficheur.
*/

const Afficheur = () => {
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
      <h1>Noms et race de chiens</h1>

      {/* La liste de noms devra être affichée ici. */}
    </>
  );
};

export default Afficheur;
