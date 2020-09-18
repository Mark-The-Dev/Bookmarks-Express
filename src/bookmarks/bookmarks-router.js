const express = require('express');
const uuid = require('uuid/v4');
const logger = require('../logger');
const store = require('../store');

const bookmarksRouter = express.Router();
const bodyParser = express.json();


bookmarksRouter
  .route('/bookmarks')
  .get((req, res) => {
    //info here
  })
  .post(bodyParser, (req, res) => {

  });


module.exports = bookmarksRouter;