export const config = {
	getMongoAddress: () => {
		switch(process.env.NODE_ENV) {
			case 'stage':
				const dotenv = require('dotenv');
				dotenv.load();
				return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds159208.mlab.com:59208/temps-and-weights`;
			case 'production':
				return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds159208.mlab.com:59208/temps-and-weights`
			default:
				return 'mongodb://localhost/temps-and-weights';
		}
	}
}
