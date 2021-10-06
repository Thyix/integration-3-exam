import React from "react";

/*
  Vous devez afficher le nom des travailleurs qui gagnent un salaire plus grand ou égal à 10$.
  La liste de travailleurs se trouve dans la constante TRAVAILLEURS.
  
  La méthode .filter() et .map() peuvent être utilisées pour effectuer ce traitement.
*/
const TRAVAILLEURS = [
  { nom: "Bob", salaire: 20 },
  { nom: "Gontran", salaire: 35 },
  { nom: "Gertrude", salaire: 0 },
  { nom: "Camille", salaire: 10 },
  { nom: "Lise", salaire: 5 },
];

const Afficheur = () => {
  return (
    <>
      <h1>Noms de travailleurs</h1>

      {/* La liste de noms devra être affichée ici. */}
    </>
  );
};

export default Afficheur;
