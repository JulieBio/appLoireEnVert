const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'Safsoufa2016!', // le mot de passe
database :  'MOVIES', // le nom de la base de données
});
module.exports = connection;