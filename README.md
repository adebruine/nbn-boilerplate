# NBN boilerplate

A jumping off point for new NBNteractive projects.


### building
Clone the directory to your computer, then
`yarn install`
`yarn build`

### generating article pages

First make sure you have an empty directory `dist/articles` and that there is a file called `article.css` in `dist/css`.

In `src/templates/article.hbs` you will find the html that will be populated to create your individual article pages. Make sure you edit here!

Running `node src/index.js` will generate the individual article html files.

#### TODO:
* generating article data
* better article page style
* clean up src directory
* fix `index.js` so dist/articles doesn't need to exist beforehand
