const express = require('express');
const { getMessages, postMessage } = require('../Controller/messagecontroller');
const router = express.Router();

router.route('/').get(getMessages).post(postMessage);

module.exports.messageRoute = router;