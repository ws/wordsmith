var should = require('chai').should()

var Wordsmith = require('wordsmith');
var a = new Wordsmith();



describe('Wordsmith', function(){
	describe('#list()', function(){
		it('should return an array of post slugs', function(){
			a.posts.list(function(posts){
				posts.should.be.a('array')
			})
		})
	})

	describe('#get()', function(){
		it('should return the post content in string form', function(){
			a.posts.get({
				'slug':'hi',
				'callback' : function(data){ data.should.be.a('string') }
			})
		})
	})
})