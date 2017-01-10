import http from 'http';
import assert from 'assert';
import chai from 'chai';
import mocha from 'mocha';
import chaiHttp from 'chai-http';
const should = chai.should()

import {server} from '../lib/index'
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

describe('Post request', () => {

	it('should return 200', done => {
		let temp = {
			temp: 40
		}
		chai.request(server)
			.post('/temps')
			.send(temp)
			.end((err, res) => {
				res.should.have.status(200);
			done();
		});
	});
});
