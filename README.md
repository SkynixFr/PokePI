<div align="center">
<img src=https://github.com/SkynixFr/PokePI/blob/main/assets/pokepi.png?raw=true alt=PokePI />

![GitHub contributors](https://img.shields.io/github/contributors/SkynixFr/PokePi.svg)

</div>

Pokepi est une API restful qui permet à un utilisateur de créer son pokédex de pokémons

## Features

-  Création, modification et suppression d'un compte utilisateur
-  Authentification sécurisée d'un utilisateur
-  Récupération des données d'un utilisateur connecté
-  Ajout de pokémons dans le pokédex de l'utilisateur connecté
-  Ajout d'un rate limiter à 20 requêtes toutes les minutes
-  Ajout d'un système de migrations et de fixtures disponibles au lancement du projet
-  Système de refresh token
-  Documentation des routes disponibles sur [Swagger]() (en cours...)

## Stack

-  ![typescript](https://img.shields.io/badge/typescript-5.1.6-blue.svg)
-  ![express](https://img.shields.io/badge/express-4.18.2-blue.svg)
-  ![mongodb]

## Setup

-  Télécharger le code source

```sh
git clone https://github.com/SkynixFr/PokePI.git
```

-  Installer les dépendances

```sh
npm install
```

-  Initialisation de la connexion à la base de données :

Un fichier `.exemple.env` recense toutes les variables à compléter dans un fichier `.env`

-  Migrations

Un système de migration et de seed est disponible. Il permet d'initialiser la base de données, de la rendre à jour par rapport aux models et d'y ajouter des données factices.

Pour cela, 2 commandes sont à lancer avant le lancement du serveur :

```sh
npx prisma db pull
```

```sh
npm prisma db seed
```

Les données factices se trouvent dans le fichier : [demo-client](https://github.com/SkynixFr/PokePI/blob/main/prisma/seed.js)

-  Lancement du serveur

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
