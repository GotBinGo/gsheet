var fs = require('fs')
var login = require("facebook-chat-api");
const md5File = require('md5-file')
var http = require('http')
var file = fs.createWriteStream('./' + '/file_new.txt');
var url = 'http://bordakt.eu'
http.get(url, function(res) {
	res.pipe(file);
	file.on('finish', function() {
		file.close(function(err) {
			console.log('done');
			const hash = md5File.sync('file.txt')
			const hash_new = md5File.sync('file_new.txt')
			if(hash == hash_new)
			{
				console.log('ua')
			}
			else
			{
				console.log('valtozott')
				login({email: "fbmail", password: "fbpass"}, function callback (err, api) 
				{
					if(err) return console.error(err);
					api.getFriendsList(function(err, data) 
					{
						if(err) return console.error(err);
						console.log(data[1].userID)
						//bordakt
						api.sendMessage("<changed>", '100000553043460',x=>process.exit());
					});
					
				})
			}
			fs.renameSync('./file_new.txt', './file.txt');
		})
	})
});
