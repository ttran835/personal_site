require('dotenv').config();
const express = require('express');

const mainController = {
  get: (req, res) => {
    res.status(200).send('hello from get!');
  },

  post: (req, res) => {
    res.status(201).send('hello from post!');
  },
};

module.exports = { mainController };
