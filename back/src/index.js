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
// Marion : Début essaie route BDD mysql Loire en Vert
//Marion : filtres pour la présentation de vendredi
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

  let query = 'SELECT * from eventLoire';
  let queryParams = [];
console.log(req.body)

  if (req.body.where) {
    query += ' WHERE event_where = ? AND who= ?';
    queryParams.push(req.body.where)
    queryParams.push(req.body.who)
  }
  // connection à la base de données, et sélection des évènements filtrés avec le filtre where
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
  connection.query('SELECT * from eventLoire', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des évènements');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results[0]);
    }
  });

});




/*Marion: A travailler semaine prochaine

app.get('/event/filterwho', (req, res) => {

  // connection à la base de données, et sélection du type de public pour filtrer les évènements
  connection.query('SELECT * from eventLoire WHERE who = "Famille"', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des évènements filtrés');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});
*/


// Marion : Fin essaie route BDD mysql Loire en Vert




let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});
