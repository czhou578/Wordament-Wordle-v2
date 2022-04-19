var msql = require('mysql')

var con = msql.createConnection({
  user: "colinzhou",
  host: "localhost",
  password: "podium218",
  database: "wordament",
  multipleStatements: true
})