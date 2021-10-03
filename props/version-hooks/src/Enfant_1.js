import React from "react";
import Enfant_2 from "./Enfant_2";

/*
    L'objectif de ce fichier est de faire passer la donnée envoyée du Parent et de la passer à Enfant_2.
*/

const Enfant_1 = () => {
  return (
    <>
      <Enfant_2 />
    </>
  );
};

export default Enfant_1;
