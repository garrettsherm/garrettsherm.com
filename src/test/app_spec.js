// test/app_spec.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

// App tests
describe('App', function(){

	//test get request to index page
	describe('get index page /', function(){
		it('responds with status 200', function(done){
			chai.request(app)
				.get('/')
				.end(function(err, res){
					expect(res).to.have.status(200);
					done();
				});
		});
	});

	//test get request to contact page
	describe('visit contact page', function(){
		it('responds with status 200', function(done){
			chai.request(app)
				.get('/contact')
				.end(function(err, res){
					expect(res).to.have.status(200);
					done();
				});
		});
	});

	//test get request to about page
	describe('visit about page', function(){
		it('responds with status 200', function(done){
			chai.request(app)
				.get('/about')
				.end(function(err, res){
					expect(res).to.have.status(200);
					done();
				});
		});
	});

	//test get request to projects page
	describe('visit projects page', function(){
		it('responds with status 200', function(done){
			chai.request(app)
				.get('/projects')
				.end(function(err, res){
					expect(res).to.have.status(200);
					done();
				});
		});
	});

	//test get request to 404
	describe('visit inexistant page', function(){
		it('responds with status 404', function(done){
			chai.request(app)
				.get('/inexistant')
				.end(function(err, res){
					expect(res).to.have.status(404);
					done();
				});
		});
	});

});