import React from 'react';
import Enfant from './Enfant';

/*
  Typescript (Bonus)

  L'objectif est de définir les props dans le component Enfant pour typer ce qui doit lui être envoyé. 
  Parent définit les constantes et les objets à envoyer.
*/

enum PageTheme {
  DARK = "DARK",
  LIGHT = "LIGHT"
}

class Parent extends React.Component {
  render() {
  const title = "Titre de la page"
  const elementsAAfficher = [{ nom: "bob", salaire: 20, grandeur: "Grand" }, { nom: "ginette", salaire: 1, grandeur: "Petit" }];
  const pageActuelle = 0;
  const currentTheme = PageTheme.DARK;
  
  return (
      <Enfant 
        title={title} 
        elementsAAfficher={elementsAAfficher} 
        pageActuelle={pageActuelle} 
        currentTheme={currentTheme} 
      />
    );
  }
}

export default Parent;
