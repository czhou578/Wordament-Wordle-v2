import mysql from "mysql2";

export const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "wordament",
  multipleStatements: true,
});
