var _ = require('lodash');
//import './css/style.css';
var Handlebars = require('handlebars');
var fs = require('fs');
var mkdirp = require('mkdirp');
var prettifyHtml = require('prettify-html');

var pageTemplate = require("./templates/article.hbs");
var context = require("./stories.json");

function build() {

  for (var i = 0; i < context.stories.length; i++) {
    //create the directory if not already created
    var dir = './../dist/articles/'+context.stories[i].slug; //if we change how this file is being run, this might bug out


    if (!fs.existsSync('./../dist/articles/'+context.stories[i].slug)) {
      fs.mkdirSync('./../dist/articles/'+context.stories[i].slug);
		};

    // write file from template
    var fileName = './../dist/articles/'+context.stories[i].slug+'/index.html';
    var stream = fs.createWriteStream(fileName);
    var articleResult = pageTemplate(context.stories[i]);
    var fixedResult = articleResult.replace("&lt;p&gt;", "<p>");
    //var prettifiedResult = prettifyHtml(articleResult);
    stream.write(articleResult);
    stream.end();

  }
}

//document.body.appendChild(component());


build()
