const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
<<<<<<< HEAD
port: '8889',
user :  'root', // le nom d'utilisateur
password :  'root', // le mot de passe
=======
user :  'root', // le nom d'utilisateur
password :  '****', // le mot de passe
>>>>>>> ab30b99425f6050ee30b2be8ee0428059877fda1
database :  'Loire_en_Vert', // le nom de la base de données
});
module.exports = connection;
