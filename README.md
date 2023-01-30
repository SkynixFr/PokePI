# PokePI

Pokepi est une API qui permet à l'utilisateur de fabriquer son propre pokédex de pokémons

## Initialisation

Afin de lancer l'application et de construire dans la base de données il faut initialiser un fichier appelé `.env`. Un exemple des données à mettre dans ce fichier est disponible dans `.exemple.env`

Pour installer les modules nécessaire au projet il fait lancer dans un terminal la commannde : `npm install`

## Démarrage

Pour lancer le serveur il vous faudra au préalable une base de donnée, MySQL la création des tables est géré par le programme.

Pour Lancer le serveur utilisez la commande `npm run dev`

Pour compiler tous les fichiers typescript en javascript utilisez la commande `npm run build`

## Les routes

Les routes principales du projet et leurs descriptifs pourront être retrouvé dans l'url suivante : `http://localhost:{PORT}/api-docs` avec {PORT} votre numéro de port d'utilisation.

# Route Client

Les routes clients permettront au Client de créer un compte/se login / avoir des informations sur son pokédex/ mettre à jour ses données.

Toutes ses routes commenceront par : `http://localhost:{PORT}/api/v1/client`

La route `http://localhost:{PORT}/api/v1/client/register` permettra au client de créer un compte avec un mail, un mot de passse et un username

La route `http://localhost:{PORT}/api/v1/client/login` permettra au client de se connecter avec son compte et d'obtenir son token de connexion

La route `http://localhost:{PORT}/api/v1/client/pokedex/pokemons` permettra au client de récupérer tous ses pokémon enregistré dans son pokédex

La route `http://localhost:{PORT}/api/v1/client/pokedex/pokemon/{nom}` permettra au client de récupérer les information d'un pokémon précis de son pokédex

La route delete `http://localhost:{PORT}/api/v1/client` permettra au client de supprimer son compte

La route `http://localhost:{PORT}/api/v1/client/{PSEUDO}` permettra au client de mettre à jour son username

# Route Pokémon

Il faut que le Token de connexion Client soit fourni au préalable dans la section header dans key "x-access-token"

La route Pokémon `http://localhost:{PORT}/api/v1/pokemon` va alimenter la base de donnée Pokemon en prenant les données fourni par l'api Pokeapi `https://pokeapi.co/api/v2/pokemon`
Source : `https://pokeapi.co`

# Route Pokédex

Il faut que le Token de connexion Client soit fourni au préalable dans la section header dans key "x-access-token"

Les routes Pokédex permettront d'ajouter un pokémon au pokédex du client : `http://localhost:{PORT}/api/v1/pokedex` avec dans le body de la requête le nom du pokémon

La route delete `http://localhost:{PORT}/api/v1/pokedex/{nom}` permettre de supprimer un pokémon du pokédex client
