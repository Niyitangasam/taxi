module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    startLocation: DataTypes.STRING,
    endLocation: DataTypes.STRING,
    driverId: DataTypes.INTEGER,
    riderId: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN,
  }, {});
  Trip.associate = function(models) {
     Trip.belongsTo(models.Driver);
     Trip.belongsTo(models.Rider);
  };
  return Trip;
};