<div align="center">
<img src=https://github.com/SkynixFr/PokePI/blob/main/assets/pokepi.png?raw=true alt=PokePI />

![GitHub contributors](https://img.shields.io/github/contributors/SkynixFr/PokePi.svg)

</div>

Pokepi est une API restful qui permet à un utilisateur de créer son pokédex de pokémons

## Features

- Création, modification et suppression d'un compte client
- Authentification sécurisée d'un client
- Création et suppression d'un pokédex
- Récupération de pokémons grâce à l'API [PokeAPI](https://pokeapi.co)
- Récupération de tous les pokémons d'un pokédex d'un client
- Récupération d'un pokémon d'un pokédex d'un client
- Ajout d'un rate limiter à 20 requêtes toutes les minutes
- Ajout d'un système de migrations et de fixtures disponibles au lancement du projet
- Documentation des routes disponibles sur [Swagger](http://localhost:8080/api-docs)

## Stack

- ![typescript](https://img.shields.io/badge/typescript-4.9.4-blue.svg) 
- ![express](https://img.shields.io/badge/express-4.18.2-blue.svg)
- ![mysql](https://img.shields.io/badge/mysql-4.9.4-blue.svg)
- ![pokeapi](https://img.shields.io/badge/pokeapi-v2-blue.svg)

## Setup

- Télécharger le code source

```sh
git clone https://github.com/SkynixFr/PokePI.git
```

- Installer les dépendances
  
```sh
npm install
```

- Initialisation de la connexion à la base de données : 

Un fichier `.exemple.env` recense toutes les variables à compléter dans un fichier `.env`

- Migrations

Un système de migration et de seed est disponible. Il permet d'initialiser la base de données et d'y ajouter des données factices.

Pour cela, 2 commandes sont à lancer avant le lancement du serveur :

```sh
npm run migration
```

```sh
npm run seed
```

Les données factices se trouvent dans le fichier : [demo-client](https://github.com/SkynixFr/PokePI/blob/main/seeders/20230131094058-demo-client.js)
 
Une troisième commande est disponible pour réinitialiser la base de données : 
```sh
npm run remove_migration
```

- Lancement du serveur
  
```sh
npm run dev
```

<div align="center">

![Alt Text](https://github.com/SkynixFr/PokePI/blob/main/assets/pikachu-oh-yeah.gif?raw=true)

</div>

## Contributeurs

<div align=center>

<img src="https://github.com/SkynixFr.png" width="100" style="border-radius: 50%">
<img src="https://github.com/Luffysonic.png" width="100" style="border-radius: 50%">

</div>

