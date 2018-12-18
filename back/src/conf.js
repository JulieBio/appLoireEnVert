<<<<<<< HEAD
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost", // adresse du serveur
  user: "root", // le nom d'utilisateur
  // password: "*****", // le mot de passe
  database: "Loire_en_Vert" // le nom de la base de données
=======
const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  '****', // le mot de passe
database :  'Loire_en_Vert', // le nom de la base de données
>>>>>>> c75e75aa7a4a4ab5c3a39c6123c374454a21968f
});
module.exports = connection;
