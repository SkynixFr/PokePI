'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const passwordSkynix = await bcrypt.hash('JesuisunMDP-33', 10);
		const passwordLuffy = await bcrypt.hash('JesuisunMDP-34', 10);
		const passwordCoco = await bcrypt.hash('JesuisunMDP-35', 10);
		await queryInterface.bulkInsert('Clients', [
			{
				mailClient: 'skynix@gmail.com',
				username: 'Skynix',
				mdpClient: passwordSkynix,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
		await queryInterface.bulkInsert('Clients', [
			{
				mailClient: 'luffysonic@gmail.com',
				username: 'Luffysonic',
				mdpClient: passwordLuffy,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
		await queryInterface.bulkInsert('Clients', [
			{
				mailClient: 'cocoloco@gmail.com',
				username: 'Cocoloc',
				mdpClient: passwordCoco,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Clients', null, {});
	}
};
