import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configObj from '../config/config';

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';

const config = configObj[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter(
    file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });
try {
  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
} catch (err) {
  // console.log('ERROR HAPPENED ', err);
}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
