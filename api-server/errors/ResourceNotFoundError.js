module.exports = class ResourceNotFoundError extends require('./AppError') {
  constructor (message) {
    // Providing default message and overriding status code.
    super(message || 'No Resource found with that slug.', 404);
  }
};