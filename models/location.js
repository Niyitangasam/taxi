const location = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    'Location',
    {
      name: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    {},
  );
  Location.associate = () => {
    // associations can be defined here
  };
  return Location;
};
export default location;
