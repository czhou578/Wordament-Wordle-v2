import mysql from "mysql"

export const database = mysql.createConnection({
  host: "localhost",
  user: "colizu",
  password: "issaquah",
  database: "wordament",
  multipleStatements: true,
});
