const express = require('express');
const router = express.Router();
const urlController = require('../Controllers/urlController');

router.post('/shorten', urlController.createShortUrl);
router.get('/:id', urlController.getUrlById);
router.get('/', urlController.getAllUrls);
router.put('/:id', urlController.updateUrl);
router.delete('/:id', urlController.deleteUrl);

module.exports = router;
