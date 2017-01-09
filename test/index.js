import http from 'http';
import assert from 'assert';

import '../lib/index.js';
const serverIP = '192.168.0.102'
const serverPort = '3000'
const serverAddress = `http://${serverIP}:${serverPort}`
describe('Exampe Node Server', () => {
	it('should return 200', done => {
		http.get(serverAddress, res => {
			assert.equal(200, res.statusCode);
			done();
		});
	});
});

describe('Post request', () => {

	it('should return 200', done => {
		const post_options = {
			host: serverIP,
			port: serverPort,
			path: '/temps',
			method: 'POST',
			data: {}
		};
		http.request(post_options, res => {
			assert.equal(200, res.statusCode);
			done();
		});
	});
});
