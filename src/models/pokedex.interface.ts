import sequelize from '../db/sequelize';

//Définition de l'association entre Pokemon et Client
const Pokedex = sequelize.define('Pokedex', {}, { timestamps: false });

export default Pokedex;
