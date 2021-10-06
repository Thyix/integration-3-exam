import React from "react";

class App extends React.Component {
  /*
    L'objectif est d'incrémenter le compteur à chaque fois qu'on appuie sur le bouton pour incrémenter et de décrémenter lorsqu'on appuie sur le bouton pour décrémenter.
    La page devra se rafraîchir lorsque la valeur du compteur va changer pour afficher la bonne valeur sur la page.
  */

  incrementerValeur = () => {
    /*
      L'incrémentation se fera ici.
    */
  };

  decrementerValeur = () => {
    /*
      La décrémentation se fera ici.
    */
  };

  render() {
    return (
      <>
        <h1>Bienvenue dans l'exercise 1 : Gestion d'un state !</h1>

        <b>Valeur du compteur : {0 /* Cette valeur devra changer */}</b>

        <br />

        <button>Ajoute +1 au compteur !</button>
        <button>Enlève -1 au compteur !</button>
      </>
    );
  }
}

export default App;
