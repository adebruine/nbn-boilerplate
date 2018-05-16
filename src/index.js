var _ = require('lodash');
//import './css/style.css';

function generateBody() {
  console.log("yo")
}

function component() {
  var element = document.createElement('div');

  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

generateBody()
