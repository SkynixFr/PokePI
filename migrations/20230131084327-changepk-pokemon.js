'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.removeColumn('Pokemons', 'id');
		await queryInterface.changeColumn('Pokemons', 'nomPokemon', {
			autoIncrement: false,
			primaryKey: true,
			type: Sequelize.STRING
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('Pokemons', 'PRIMARY');
		await queryInterface.changeColumn('Pokemons', 'nomPokemon', {
			type: Sequelize.STRING
		});
		await queryInterface.addColumn('Pokemons', 'id', {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		});
	}
};
