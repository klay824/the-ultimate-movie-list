const User = require('./User');
const Project = require('./Movie');

User.hasMany(Movie, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Movie };