const trip = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    'Trip',
    {
      startLocation: DataTypes.STRING,
      endLocation: DataTypes.STRING,
      driverId: DataTypes.INTEGER,
      riderId: DataTypes.INTEGER,
      completed: DataTypes.BOOLEAN,
    },
    {},
  );
  Trip.associate = (models) => {
    Trip.belongsTo(models.Driver);
    Trip.belongsTo(models.Rider);
  };
  return Trip;
};

export default trip;
