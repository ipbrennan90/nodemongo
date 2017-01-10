import http from 'http';
import assert from 'assert';
import chai from 'chai';
import mocha from 'mocha';
import chaiHttp from 'chai-http';
const should = chai.should()

import {server} from '../lib/index'
const serverIP = '192.168.105.199'
const serverPort = '3000'
const serverAddress = `http://localhost:${serverPort}/temps`
chai.use(chaiHttp);
describe('Get Temps', () => {
	it('should return get all temps', done => {
		chai.request(server)
			.get('/temps')
			.end((err, res) => {
				res.should.have.status(200);
			done();
		});
	});
});

// describe('Post request', () => {
//
// 	it('should return 200', done => {
// 		const post_options = {
// 			host: 'localhost',
// 			port: serverPort,
// 			path: '/temps',
// 			method: 'POST',
// 			data: {}
// 		};
// 		http.request(post_options, res => {
// 			assert.equal(200, res.statusCode);
// 			done();
// 		});
// 	});
// });
