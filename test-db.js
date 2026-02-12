const mysql = require('mysql2/promise');
const fs = require('fs');

(async () => {
  let conn;
  try {
    conn = await mysql.createConnection({
      host: 'database-1.caz2smwq4wbf.us-east-1.rds.amazonaws.com',
      port: 3306,
      database: 'mysql',
      user: 'admin',
      password: 'admin1234',
      ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync('./certs/global-bundle.pem')
      }
    });

    const [rows] = await conn.execute('SELECT VERSION() AS v');
    console.log('MySQL version:', rows[0].v);

  } catch (error) {
    console.error('Database error:', error.message);
  } finally {
    if (conn) await conn.end();
  }
})();
