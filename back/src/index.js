const express = require('express');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const app = express();
const connection = require('./conf');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
{/*app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));




app.use('/', require('./routes'));



/// Error 404
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});
// Marion : Début BDD mysql Loire en Vert
// écoute de l'url "/event"
app.get('/event', (req, res) => {

  // connection à la base de données, et sélection des évènements
  connection.query('SELECT * from eventLoire', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des évènements');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

app.post('/event', (req, res) => {
//Marion : sélectionne tous les évènements dans la table
  let query = 'SELECT * from eventLoire';
  let queryParams = [];
console.log(req.body)
//Marion: si filtre where et où sont sélectionnés,...
  if (req.body.where) {
    query += ' WHERE event_where = ? AND who= ?';
    queryParams.push(req.body.where)
    queryParams.push(req.body.who)
  }
  // ...connection à la base de données, et sélection des évènements filtrés avec le filtre where et who
  connection.query(query, queryParams
   , (err, results) => {

      if (err) {

        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send(err);
      } else {

        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
});


app.get(`/event/:id`, (req, res) => {
  const id = req.params.id; // récupère id
  connection.query('SELECT * from eventLoire WHERE id = ?', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des évènements');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results[0]);
    }
  });

});


// Marion : Fin BDD mysql Loire en Vert




let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});
