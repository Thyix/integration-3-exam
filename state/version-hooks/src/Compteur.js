import React from "react";

const Compteur = () => {
  /*
    L'objectif est d'incrémenter le compteur à chaque fois qu'on appuie sur le bouton pour incrémenter et de décrémenter lorsqu'on appuie sur le bouton pour décrémenter.
    La page devra se rafraîchir lorsque la valeur du compteur va changer pour afficher la bonne valeur sur la page.
  */

  const incrementerCompteur = () => {
    /*
      L'incrémentation se fera ici.
    */
  };

  const decrementerCompteur = () => {
    /*
      La décrémentation se fera ici. 
    */
  };

  return (
    <>
      <h1>Bienvenue dans l'exercise 1 : Gestion d'un state !</h1>

      <b>Valeur du compteur : {0 /* Cette valeur devra changer */}</b>

      <br />

      <button>Ajoute +1 au compteur !</button>
      <button>Enlève -1 au compteur !</button>
    </>
  );
};

export default Compteur;
