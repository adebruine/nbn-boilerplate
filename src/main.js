var Handlebars = require('handlebars');
var fs = require('fs');
var mkdirp = require('mkdirp');

var context = {title: "My New Post", body: "This is my first post!", slug: "hello"};

var pageTemplate = require("./../templates/article.hbs");

function onLoad(data, tabletop) {
  for (var x = 0; x < context.length; ++x) {
    //create the directory if not already created
		var dir = './dist/articles/'+context.slug;
		mkdirp.sync(dir, function (err) {
				if (err) console.error(err)
				else console.log('pow!')
		});
    // write file from template
    var fileName = './../dist/articles/'+context.slug+'/index.html';
		var stream = fs.createWriteStream(fileName);
		var articleResult = pageTemplate(context);
		stream.write(articleResult);
		stream.end();
	}
};
