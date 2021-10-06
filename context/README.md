# QUESTION 6 - Context (10 points)

Cette question va porter sur la gestion des données globales à une application. Comme vu en cours, Redux peut être utilisé pour la même utilité, mais pour le besoin de cet examen nous allons utiliser les Context de React.
Il y a un _autre_ code secret qui est caché dans le `SecretContext`. Votre tâche sera donc d'aller chercher la valeur de ce secret uniquement avec les méthodes de Context.

Il est interdit de créer une constante et de l'exporter du fichier pour aller la chercher dans le composant. Le but est de valider ici la compréhension des Context.

_Notes importantes_

- Vous trouverez les 2 sortes d'implémentation, soit sous forme de hooks ou de classe, dans les dossiers ci-dessous.
- Il est **interdit** d'aller juste chercher la valeur du context lors de l'importation. Il faut utiliser les méthodes de React.Context.
