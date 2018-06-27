const resources = require('../../data/resources');
const ResourceNotFoundError = require('../../errors/ResourceNotFoundError');

function getAllResources(req, res) {
  res.send(resources);
}

function getResource(req, res) {
  const slug = req.params.slug;
  const resource = resources.find(r => r.slug === slug);
  try {
    if (!resource) throw new ResourceNotFoundError();
    res.send(resource);
  } catch (err) {
    res.status(err.status || 500).json(err.message);
  }
}

module.exports = {
  getAllResources,
  getResource,
};