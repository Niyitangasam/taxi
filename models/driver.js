module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    names: DataTypes.STRING,
    distance: DataTypes.FLOAT,
    location: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
  }, {});
  Driver.associate = function(models) {
    // associations can be defined here
  };
  return Driver;
};
