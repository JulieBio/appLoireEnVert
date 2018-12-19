const mysql = require("mysql");
const connection = mysql.createConnection({
<<<<<<< HEAD
  host: 'localhost', // adresse du serveur
  // port: '8889',
  user: 'root', // le nom d'utilisateur
  // password: '******', // le mot de passe
  database: 'Loire_en_Vert', // le nom de la base de données
=======
  host: "localhost", // adresse du serveur
  user: "root", // le nom d'utilisateur
  password: "*****", // le mot de passe
  database: "Loire_en_Vert" // le nom de la base de données
>>>>>>> dev
});
module.exports = connection;
