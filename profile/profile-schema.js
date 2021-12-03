const mongoose = require('mongoose');

const schema = mongoose.Schema({
  handle: String,
  avatarIcon: String,
  firstName: String,
  lastName: String,
  bio: String,
  website: String,
  location: String,
  dateOfBirth: String,
  dateJoined: String,
  followingCount: String,
  followersCount: String,
}, {collection: "profile"});

module.exports = schema;
