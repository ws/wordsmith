var self = new Object()

var modules = require('./index.js')
var helpers = require('./helpers.js')
var config = require('./config.js')

var _ = modules._

function Wordsmith (args){
	self.rootDir = process.cwd()
	self.fileExtension = '.txt' // Todo: Implement a config file to set this value
}

Wordsmith.prototype = {
	posts : {
		list : function(args){
			helpers.loopThroughDir({
				'dir': self.rootDir + '/posts',
				'ignoreAutoFiles': true,
				'callback': function(files){
					if(args.callback) args.callback(_.map(files, function(file){ return file.split('.')[0] }))
				},
			})
		},
		get : function(args){
			helpers.getFile({
				'file': '../../posts/' + args.slug + self.fileExtension, // Todo: Fix this to use rootDir properly
				'callback': function(file){
					if(args.callback) args.callback(file.split('.')[0])
				}
			})
		}
	},
	drafts : {
		list : function(args){
			helpers.loopThroughDir({
				'dir': self.rootDir + '/drafts',
				'ignoreAutoFiles': true,
				'callback': function(files){
					if(args.callback) args.callback(_.map(files, function(file){ return file.split('.')[0] }))
				},
			})
		},
		get : function(args){
			helpers.getFile({
				'file': '../../drafts/' + args.slug + self.fileExtension, // Todo: Fix this to use rootDir properly
				'callback': function(file){
					if(args.callback) args.callback(file.split('.')[0])
				}
			})
		}
	}
}

module.exports = Wordsmith