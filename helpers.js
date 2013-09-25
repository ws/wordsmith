var fs = require('fs')

var modules = require('./index.js')

var _ = modules._

var helpers = {
	loopThroughDir : function(args){
		fs.readdir(args.dir, function(err, files){
			if(err && args.error) args.error(err)

			_.each(files, function(file){
				if(args.ignoreAutoFiles && !helpers.isAutoFile(file)){
					if(args.each) args.each(file)
				}
				else {
					if(args.each) args.each(file)
				}
			})

			if(args.callback) args.callback(files)
		})
	},
	isAutoFile : function(file){
		return (file[0] == '.')
	},
	getFile : function(args){
		fs.readFile(args.file, 'utf8', function (err, data){
			if(err && args.error) args.error(err)

			if(args.callback) args.callback(data)
		})
	}
}

module.exports = helpers
