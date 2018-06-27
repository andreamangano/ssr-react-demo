const router = require('express').Router();
const handlers = require('./handlers');

//----------
// RESOURCES
//----------
router.get('/resources', handlers.getAllResources);

router.get('/resource/:slug', handlers.getResource);

module.exports = router;