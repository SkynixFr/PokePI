import Client from '../models/client.interface';

const dbInit = () => {
	Client.sync();
};

export default dbInit;
