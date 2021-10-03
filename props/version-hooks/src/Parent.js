import React from "react";
import Enfant_1 from "./Enfant_1";

/*
  L'objectif de ce composant est d'envoyer la valeur contenue dans Parent à Enfant_2.
  Vous devrez donc l'envoyer en props à l'Enfant_1 et ensuite de l'Enfant_1 à l'Enfant_2.
*/

const Parent = () => {
  // Valeur à envoyer à l'Enfant_1 et ensuite à l'Enfant_2
  const VALEUR_A_ENVOYER = "123 456 789";

  return (
    <>
      <Enfant_1 />
    </>
  );
};

export default Parent;
