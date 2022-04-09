const { Pool} = require('pg')

const pool = new Pool({
  user: 'ljufpvmxjrwujz',
  database: 'daijjf8q17jq1i',
  password: '6660457470030b4fdeb37b2e48df627f4d6db20e3cfe4da1c663db48647b6bdb',
  port: 5432,
  host: 'ec2-44-194-92-192.compute-1.amazonaws.com',
  //ssl: true
})

module.exports = { pool };