import React from "react";

/*
  Cette question va porter sur la gestion des données globales à une application. Comme vu en cours, Redux peut être utilisé pour la même utilité, mais pour le besoin de cet examen nous allons utiliser les Context de React.
  Il y a un _autre_ code secret qui est caché dans le `SecretContext`. Votre tâche sera donc d'aller chercher la valeur de ce secret uniquement avec les méthodes de Context.

  Il est interdit de créer une constante et de l'exporter du fichier pour aller la chercher dans le composant. Le but est de valider ici la compréhension des Context.
*/

const AffichageSecret = () => {
  return (
    <>
      <h1>
        Le code secret est : {0 /* Mettre la valeur du code secret ici */}
      </h1>
    </>
  );
};

export default AffichageSecret;
