'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rider = sequelize.define('Rider', {
    names: DataTypes.STRING
  }, {});
  Rider.associate = function(models) {
    // associations can be defined here
  };
  return Rider;
};