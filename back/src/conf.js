const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
<<<<<<< HEAD
password :  'Back18!Ana', // le mot de passe
=======
password :  'Safsoufa2016!', // le mot de passe
>>>>>>> 217bb288317fe83715d5ab2c8d0e4a1fecc5608a
database :  'Loire_en_Vert', // le nom de la base de données
});
module.exports = connection;
