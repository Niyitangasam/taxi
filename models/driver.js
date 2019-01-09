module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    names: DataTypes.STRING,
    available: {
      type:DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {});
  Driver.associate = function(models) {
    // associations can be defined here
    Driver.belongsTo(models.Location);
  };
  return Driver;
};
