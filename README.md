# PokePI

API qui permet à l'utilisateur de fabriquer son propre pokédex de pokémons

## Initialisation

Ne pas oublier de créer un fichier db.config.ts dans le dossier /config. Il faut mettre le code du fichier exemple.config.ts et rentrer vos propre valeur.

## Script d'installation de la base de donnée

Table Client

```
CREATE TABLE `client` (
  `idClient` int NOT NULL AUTO_INCREMENT,
  `Mail_Client` varchar(45) DEFAULT NULL,
  `Mdp_Client` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idClient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Table Client'
```

Table Pokédex

```
CREATE TABLE `pokédex` (
  `Clientid` int NOT NULL,
  `Pokemonid` int NOT NULL,
  PRIMARY KEY (`Clientid`,`Pokemonid`),
  KEY `Pokemonid_idx` (`Pokemonid`),
  CONSTRAINT `Clientid` FOREIGN KEY (`Clientid`) REFERENCES `client` (`idClient`),
  CONSTRAINT `Pokemonid` FOREIGN KEY (`Pokemonid`) REFERENCES `pokemon` (`idPokemon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Table Pokédex'
```

Table Pokémon

```
CREATE TABLE `pokemon` (
  `idPokemon` int NOT NULL,
  `Nom_Pokemon` varchar(45) DEFAULT NULL,
  `Type1` varchar(20) DEFAULT NULL,
  `Type2` varchar(20) DEFAULT NULL,
  `Generation` int DEFAULT NULL,
  `Normal` decimal(3,2) DEFAULT NULL,
  `Combat` decimal(3,2) DEFAULT NULL,
  `Vol` decimal(3,2) DEFAULT NULL,
  `Poison` decimal(3,2) DEFAULT NULL,
  `Sol` decimal(3,2) DEFAULT NULL,
  `Roche` decimal(3,2) DEFAULT NULL,
  `Insecte` decimal(3,2) DEFAULT NULL,
  `Spectre` decimal(3,2) DEFAULT NULL,
  `Acier` decimal(3,2) DEFAULT NULL,
  `Feu` decimal(3,2) DEFAULT NULL,
  `Eau` decimal(3,2) DEFAULT NULL,
  `Plante` decimal(3,2) DEFAULT NULL,
  `Electrik` decimal(3,2) DEFAULT NULL,
  `Psy` decimal(3,2) DEFAULT NULL,
  `Glace` decimal(3,2) DEFAULT NULL,
  `Dragon` decimal(3,2) DEFAULT NULL,
  `Tenebre` decimal(3,2) DEFAULT NULL,
  `Fee` decimal(3,2) DEFAULT NULL,
  PRIMARY KEY (`idPokemon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Table pokemon'
```
