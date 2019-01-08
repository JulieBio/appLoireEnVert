const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost", // adresse du serveur
  user: "root", // le nom d'utilisateur
<<<<<<< HEAD
  port:"8889",
  password: "root", // le mot de passe
=======
  password: "*****", // le mot de passe
>>>>>>> dev
  database: "Loire_en_Vert" // le nom de la base de données
});
module.exports = connection;
