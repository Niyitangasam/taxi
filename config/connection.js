const development = {
  database: 'taxi24',
  username: 'niyitanga',
  password: 'niyitanga1',
  host: 'localhost',
  dialect: 'sqlite',
};

const testing = {
  database: 'taxi24',
  username: 'niyitanga',
  password: 'niyitanga1',
  host: 'localhost',
  dialect: 'sqlite',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'sqlite',
};

module.exports = {
  development,
  testing,
  production,
};
