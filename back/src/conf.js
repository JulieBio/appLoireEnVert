const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost", // adresse du serveur
  user: "root", // le nom d'utilisateur
<<<<<<< HEAD
  // password: "****", // le mot de passe
=======
<<<<<<< HEAD
  // password: "****", // le mot de passe
=======
  password: "*****", // le mot de passe
>>>>>>> 77b1bc72143137dbae5d339fa419f64d1bbc164b
>>>>>>> dev
  database: "Loire_en_Vert" // le nom de la base de données
});
module.exports = connection;