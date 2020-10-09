# chuckapp1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Server
```
Run server.js
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


#API Documentation

This is a cute description of how to get data from the Cute animals database.

To get all pics of cute animals/Chuch Norris memes, use "get" with:

http://localhost:4000/items

To get a random pic of cute animals/Chuch Norris meme, use "get" with:

http://localhost:4000/random

To get all pics of one category, replace ":cuteness" with the category name and use "get" with:

http://localhost:4000/cutenesses/:cuteness

To update the name of an animal with the id number, replace ":_id" with the id number and ":cuteness" with the category name and use "put" with:

http://localhost:4000/updatingItems/:_id/:name/

To update the link of a pic with the id number, replace "value1" with the id number and "value2" with the new link and use "put" with:

http://localhost:4000/updatingLink?_id=value1&address=value2

To update the category of an animal with the animal's name, replace ":name" with the animal's name and ":cuteness" with the category name and use "put" with:

http://localhost:4000/updatingCuteness/:name/:cuteness/