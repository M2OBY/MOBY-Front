

### `Présentation du Projet Pilotage vocale d'une application`
 Cette application a été conçu dans le cadre de la réalisation d’un projet en Développement de Logiciel Libre sous la licence CC BY-NC-SA.
L’objectif étant, de réaliser une application qui permettra aux utilisateurs de contrôler des documents (Exemple fichier PDF) de leur présentation uniquement grâce à leur voix.<br />

Notre projet est scindé en 2 parties:
<h4> Partie Frontend </h4>
<h4> Partie Backend </h4>
  
La partie Front est structuré en composants, nous avons suivi la logique de REACT qui consiste à départager les parties d’une application en arborescence de composants afin de mieux répartir les fonctionnalités et les tâches.<br />
Vu que notre application a besoin d'une reconaissance vocale. Nous avons utiliser le module react-speech-recognition, afin de pouvoir transcrire la parole en texte, qui pourra par la suite être transformé en action. Les actions possibles sont :<br />
-Passer à la page suivante.<br />
-Passer à la page précédente.<br />
-Eventuellement, aller à une page en prononçant un mot clé qui se trouve sur cette page.<br />

Pour pouvoir visualiser les documents PDF de notre application, nous avons utilisé <b>react pdf-viewer</b>, ce module permet d'interagir avec un document PDF notamment avec des commandes qui aident à:
-Naviguer entre les differentes pages. <br>
-Zoomer sur un page du document.<br>
-Faire une rotation d'une page.<br>




### `Démarrage de l'application`

Afin d'assurer le bon fonctionnement de l'application, plusieurs manipulations doivent être réalisées au préalable:

### `Prérequis`

Installer ReactJS 

```
https://fr.reactjs.org/

```
Récuperer la partie Backend sur Git:
```
https://github.com/M2OBY/MOBY-back.git

```

Récuperer la partie Frontend sur Git:
```
https://github.com/M2OBY/MOBY-Front.git

```
Puis ajouter les dépendances entre les differents paquets:
```
npm install dependencies

```
Installer le module de reconnaissance vocale de Google:
```
npm install react-speech-recognition

```
Installer le module d'affichage du PDF

```
npm install react-pdf-viewer

```
POUR LANCER LE PROJET  : 
```
npm start

```
Il sera lancé sur le port 3000 du localhost (http://localhost:3000)
