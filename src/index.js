var _ = require('lodash');
//import './css/style.css';
var Handlebars = require('handlebars');
var fs = require('fs');
//var prettifyHtml = require('prettify-html');
/*
function component() {
  var element = document.createElement('div');

  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}
*/

var pageTemplate = require("./templates/article.hbs");
/*
var pageTemplate =
  "<div class='entry'>"+
  "<h1>{{title}}</h1>"+
  "<div class='body'>"+
    "{{body}}"+
  "</div>"+
"</div>";
*/

function build() {
  var context = {title: "My New Post", body: "This is my first post!", slug: "hello"};

    //create the directory if not already created
		var dir = './../dist/articles/'+context.slug; //if we change how this file is being run, this might bug out
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
		};

    // write file from template
    var fileName = './../dist/articles/'+context.slug+'/index.html';
    var stream = fs.createWriteStream(fileName);
    var articleResult = pageTemplate(context);
    //var prettifiedResult = prettifyHtml(articleResult);
    stream.write(articleResult);
    stream.end();
}

//document.body.appendChild(component());


build()
