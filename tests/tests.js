var should = require('chai').should()

describe('Wordsmith', function(){
	var Wordsmith = require('wordsmith')
	var a = new Wordsmith()

	describe('#posts', function(){

		describe('#list()', function(){
			it('should return an array of post slugs', function(){
				a.posts.list(function(posts){
					posts.should.be.a('array')
				})
			})
		})

		describe('#get()', function(){
			it('should return the post content in string form when given a slug', function(){
				a.posts.get({
					'slug':'hi',
					'callback' : function(data){ data.should.be.a('string') }
				})
			})
		})

	})

	describe('#drafts', function(){

		describe('#list()', function(){
			it('should return an array of draft slugs', function(){
				a.drafts.list(function(posts){
					drafts.should.be.a('array')
				})
			})
		})

		describe('#get()', function(){
			it('should return the draft content in string form when given a slug', function(){
				a.drafts.get({
					'slug':'test',
					'callback' : function(data){ data.should.be.a('string') }
				})
			})
		})

	})

	describe('#config', function(){

		describe('#get()', function(){
			it('should return a value for the specified key', function(){

				a.config.get('abc').should.be.a('string')

			})
		})

	})
})

describe('Wordsmith Helpers', function(){
	var helpers = require('../helpers.js')

	describe('#loopThroughDir()', function(){
		it('should call "callback" with an array of files when completed', function(){
			helpers.loopThroughDir({
				'dir': '../../posts', // Todo: File path
				'ignoreAutoFiles': true,
				'callback': function(files){
					files.should.be.a('array')
				},
			})
		})

		it('should call "each" multiple times', function(){
			var count = 0;

			helpers.loopThroughDir({
				'dir': '../../posts', // Todo: File path
				'ignoreAutoFiles': true,
				'each': function(){
					count++
				},
				'callback': function(){
					count.should.be.greaterThan(0)
				}
			})
		})
	})

	describe('#isAutoFile()', function(){
		it('should return true for OS-generated files', function(){
			helpers.isAutoFile('.DS_Store').should.be.true
			helpers.isAutoFile('.gitignore').should.be.true
		})

		it('should return false for non-OS-generated files', function(){
			helpers.isAutoFile('hello.txt').should.be.false
			helpers.isAutoFile('hello.md').should.be.false
			helpers.isAutoFile('hello.zip').should.be.false
			helpers.isAutoFile('hello.jpg').should.be.false
		})
	})

	describe('#getFile()', function(){
		it('should return the file content in string form', function(){
			helpers.getFile({
				'file': '../../posts/hi.txt', // Todo: File path
				'callback': function(file){
					file.should.be.a('string')
				}
			})
		})
	})
})