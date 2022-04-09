const { Pool} = require('pg')

const pool = new Pool({
  user: 'ipeiuorjzlmmmv',
  database: 'd3tvufg06o8ppv',
  password: '6d0960562e1855471ce935aeba0660a548d13f0ea09df8ac720dff54ee7c72b3',
  port: 5432,
  host: 'ec2-52-54-212-232.compute-1.amazonaws.com',
  ssl: true
})

module.exports = { pool };