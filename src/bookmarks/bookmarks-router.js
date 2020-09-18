const express = require('express');
const { v4: uuid } = require('uuid');
const logger = require('../logger');
const bookmarks = require('../store');

const bookmarksRouter = express.Router();
const bodyParser = express.json();
let regEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

bookmarksRouter
  .route('/bookmarks')
  .get((req, res) => {
    res.json(bookmarks);
  })
  .post(bodyParser, (req, res) => {
    const { title, url, description, rating } = req.body;

    if (!title || title.length < 1) {
      logger.error(`Title is required`);
      return res
        .status(400)
        .send('Invalid data');
    }
    if (!url || !url.match(regEx)) {
      logger.error(`Url is required`);
      return res
        .status(400)
        .send('Invalid data');
    }
    if (!description || description.length < 3) {
      logger.error(`description is required(atleast 3 chars)`);
      return res
        .status(400)
        .send('Invalid data');
    }
    if (!rating || rating < 1 || rating > 5) {
      logger.error(`rating is required`);
      return res
        .status(400)
        .send('Invalid data');
    }

    const id = uuid();

    let newBookmark = {
      id,
      title,
      url,
      description,
      rating,
    };

    bookmarks.push(newBookmark);

    // res.send('it worked!!!!!!')
    res
      .status(201)
      .location(`http://localhost:8000/bookmarks/${id}`)
      .json({ newBookmark, message: 'it worked!' });
    // .json(newBookmark)
  });


module.exports = bookmarksRouter;