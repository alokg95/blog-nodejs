var boot = require('../app').boot, 
shutdown = require('../app').shutdown,
port = require('../app').port,
superagent = require('superagent'),
expect = require('expect.js');

describe('server', function(){
	before(function(){
		boot();
	});

	describe('homepage', function(){
		it('it should respond to GET', function(done){
			superagent.get('localhost:'+port).end(function(response){
				expect(res.status).to.equal(200);
				done();
			})
		})
	});
	after(function(){
		shutdown();
	});

});