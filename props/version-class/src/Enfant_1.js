import React from "react";
import Enfant_2 from "./Enfant_2";

/*
    L'objectif de ce fichier est de faire passer la donnée envoyée du parent et de la passer à Enfant_2.
*/

class Enfant_1 extends React.Component {
  render() {
    return <Enfant_2 />;
  }
}

export default Enfant_1;
