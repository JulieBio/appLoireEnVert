const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
<<<<<<< HEAD
password :  'Back18!Ana', // le mot de passe
=======
// password :  '', // le mot de passe
>>>>>>> 97cbd986e86d9bd8bf3160e4ec30469e969b52b1
database :  'Loire_en_Vert', // le nom de la base de données
});
module.exports = connection;
