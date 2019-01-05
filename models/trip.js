'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    startLocation: DataTypes.STRING,
    endLocation: DataTypes.STRING,
    driverId: DataTypes.INTEGER,
    riderId: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {});
  Trip.associate = function(models) {
    // associations can be defined here
  };
  return Trip;
};