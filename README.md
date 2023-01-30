# PokePI

Pokepi est une API qui permet à l'utilisateur de fabriquer son propre pokédex de pokémons

## Initialisation

Afin créer une connexion à la base de données, il faut initialiser un fichier appelé `.env`. Un exemple des données à mettre dans ce fichier est disponible dans `.exemple.env`

Pour installer les modules nécessaire au projet il fait lancer dans un terminal la commannde : `npm install`

## Démarrage

Pour lancer le serveur il vous faudra au préalable une base de données MySQL. La création des tables est géré par le programme.

Pour lancer le serveur utilisez la commande `npm run dev`

## Les routes

Les routes principales du projet et leurs descriptifs pourront être retrouvé dans l'url suivante : `http://localhost:{PORT}/api-docs`. `{PORT}` sera le numéro de port que vous avez attribué au lancement de l'application.