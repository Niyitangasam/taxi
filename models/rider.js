const rider = (sequelize, DataTypes) => {
  const Rider = sequelize.define(
    'Rider',
    {
      names: DataTypes.STRING,
    },
    {},
  );
  Rider.associate = (models) => {
    // associations can be defined here
  };
  return Rider;
};
export default rider;
