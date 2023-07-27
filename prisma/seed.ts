import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
	const passwordRicky = await bcrypt.hash('Ricky', 10);
	const passwordMaxime = await bcrypt.hash('Maxime', 10);
	const passwordSaranyu = await bcrypt.hash('Saranyu', 10);
	const passwordRomain = await bcrypt.hash('Romain', 10);

	const Ricky = await prisma.user.upsert({
		where: { email: 'ricky@gmail.com' },
		update: {},
		create: {
			username: 'Luffysonic',
			email: 'ricky@gmail.com',
			password: passwordRicky
		}
	});

	const Maxime = await prisma.user.upsert({
		where: { email: 'maxime@gmail.com' },
		update: {},
		create: {
			username: 'Max la menace',
			email: 'maxime@gmail.com',
			password: passwordMaxime
		}
	});

	const Saranyu = await prisma.user.upsert({
		where: { email: 'saranyu@gmail.com' },
		update: {},
		create: {
			username: 'Newt',
			email: 'saranyu@gmail.com',
			password: passwordSaranyu
		}
	});

	const Romain = await prisma.user.upsert({
		where: { email: 'romain@gmail.com' },
		update: {},
		create: {
			username: 'Skynix',
			email: 'romain@gmail.com',
			password: passwordRomain
		}
	});

	console.log({ Ricky, Maxime, Saranyu, Romain });
}

main()
	.then(async () => {
		await prisma.$disconnect;
	})
	.catch(async error => {
		console.error(error);
		await prisma.$disconnect;
		process.exit(1);
	});
