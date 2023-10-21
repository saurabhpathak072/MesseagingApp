const express = require('express');
const { getAllMessages, postMessage,getMessage,deleteMessage,updatePatchMessage } = require('../Controller/messagecontroller');
const router = express.Router();

router.route('/').get(getAllMessages).post(postMessage);
router.route('/:id').get(getMessage).delete(deleteMessage).patch(updatePatchMessage)

module.exports.messageRoute = router;