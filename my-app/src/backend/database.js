var msql = require('mysql')

module.exports = msql.createConnection({
  host: "localhost",
  user: "colizu",
  password: "issaquah",
  database: "wordament",
  multipleStatements: true
})

