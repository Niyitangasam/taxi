const driver = (sequelize, DataTypes) => {
  const Driver = sequelize.define(
    'Driver',
    {
      names: DataTypes.STRING,
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {},
  );
  Driver.associate = (models) => {
    Driver.belongsTo(models.Location);
  };
  return Driver;
};

export default driver;
