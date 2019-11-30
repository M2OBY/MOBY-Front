This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

POUR LANCER LE PROJET : npm start sur le port 3000 du localhost (http://localhost:3000). 

### `Présentation du Projet Pilotage vocale d'une application`
 Cette application a été conçu dans le cadre de la réalisation d’un projet en Développement de Logiciel Libre sous la licence CC BY-NC-SA.
L’objectif étant, de réaliser une application qui permettra aux utilisateurs de contrôler des documents (Exemple fichier PDF) de leur présentation uniquement grâce à leur voix.<br />

Notre projet est scindé en 2 parties:
<h2> Partie Frontend </h2>
<h2> Partie Backend </h2>
  
La partie Front est structuré en composants, nous avons suivi la logique de REACT qui consiste à départager les parties d’une application en arborescence de composants afin de mieux répartir les fonctionnalités et les tâches.<br />
Vu que notre application a besoin d'une reconaissance vocale. Nous avons utiliser le module react-speech-recognition, afin de pouvoir transcrire la parole en texte, qui pourra par la suite être transformé en action. Les actions possibles sont :<br />
-Passer à la page suivante.<br />
-Passer à la page précédente.<br />
-Eventuellement, aller à une page en prononçant un mot clé qui se trouve sur cette page.<br />

Pour pouvoir visualiser les documents PDF de notre application, nous avons utilisé <b>react pdf-viewer</b>, ce module permet d'interagir avec un document PDF notamment avec des commandes qui aident à:
-Naviguer entre les differentes pages.
-Zoomer sur un page du document.
-Faire une rotation d'une page.
