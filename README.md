# PokePI

Pokepi est une API qui permet à l'utilisateur de fabriquer son propre pokédex de pokémons

## Initialisation

Afin créer une connexion à la base de données, il faut initialiser un fichier appelé `.env`. Un exemple des données à mettre dans ce fichier est disponible dans `.exemple.env`

Pour installer les modules nécessaire au projet il faut lancer dans un terminal la commannde : `npm install`

## Migrations

Afin d'utiliser le système de migrations mis en place, au lancement de l'application avant le démarrage du serveur il faut lancer les commandes `npm run migration` et `npm run seed`. Ces commandes permettront d'initaliser les tables de la base de données et d'y implémenter des données factices.

Le mot de passe du client Skynix est : `JesuisunMDP-33`
Le mot de passe du client Luffysonic est : `JesuisunMDP-34`
Le mot de passe du client Cocoloco est : `JesuisunMDP-35`

Pour réinitialiser la base, il faut lancer la commande `npm run remove_migration`

## Démarrage

Pour lancer le serveur il vous faudra au préalable une base de données MySQL. La création des tables est géré par le programme.

Pour lancer le serveur utilisez la commande `npm run dev`

## Les routes

Les routes principales du projet et leurs descriptifs pourront être retrouvé dans l'url suivante : `http://localhost:{PORT}/api-docs`. `{PORT}` sera le numéro de port que vous avez attribué au lancement de l'application.