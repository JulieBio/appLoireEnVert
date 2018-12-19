const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost", // adresse du serveur
  user: "root", // le nom d'utilisateur
<<<<<<< HEAD
  password: "****", // le mot de passe
=======
  // password: "*****", // le mot de passe
>>>>>>> 476c9215b7ed09a872374ca1fef5a1b1781d6e84
  database: "Loire_en_Vert" // le nom de la base de données
});
module.exports = connection;
