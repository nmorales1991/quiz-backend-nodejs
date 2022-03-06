module.exports = {
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017',
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'SECRET_KEY',
  expires: process.env.EXPIRES || '1h',
};
