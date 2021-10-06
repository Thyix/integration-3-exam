import React, { useEffect } from "react";

/*
  La réponse que vous recevrez aura seulement un champ.

  Vous pourrez faire votre appel avec le lien suivant :
  `https://mocki.io/v1/e9dd4888-b8b5-496f-841a-29edca12d543`

  L'appel à faire sera un _GET_. Pour vous assurez de connaître le champ qui est reçu et de bien l'utiliser, il est recommmandé d'utiliser un outil
  comme Postman, votre navigateur web ou encore de faire un console.log de la réponse reçue lors de l'appel. Vous pourrez ensuite prendre la valeur pour l'affichage.
*/

class CodeSecret extends React.Component {
  fetchSecret = () => {
    // L'appel à l'API peut être fait ici.
  };

  componentDidMount() {
    this.fetchSecret();
  }

  render() {
    return (
      <>
        <h1>
          Le code secret est : {0 /* Mettre la valeur du code secret ici */}
        </h1>
      </>
    );
  }
}

export default CodeSecret;
