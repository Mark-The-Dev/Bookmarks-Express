const express = require('express');
const { v4:uuid } = require('uuid');
const logger = require('../logger');
const bookmarks = require('../store');

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