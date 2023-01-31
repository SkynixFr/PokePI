'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Pokedexes', {
			mailClient: {
				type: Sequelize.STRING,
				primaryKey: true,
				references: {
					model: 'Clients',
					key: 'mailClient'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			},
			nomPokemon: {
				type: Sequelize.STRING,
				primaryKey: true,
				references: {
					model: 'Pokemons',
					key: 'nomPokemon'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Pokedexes');
	}
};
