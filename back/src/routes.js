const express = require('express');
//const router = express.Router();
//const JsonDB = require('node-json-db');
//const db = new JsonDB("myDataBase", true, true);
const app = express();
const connection = require('./conf');


/**
 * BEGIN MODIFICATIONS
 */

/*router.get('/', function (req, res) {
  res.send("Hello World");
});

router.get('/event', function (req, res) {

  const data = db.getData("/event");
  console.log("events");
  const events= [];
  Object.keys(data).map((key)=> {
    events.push({...data[key],id:key})
  });
  console.log(JSON.stringify(events,2,2))
  res.json({events});
  console.log("fetch in back")
});

router.get('/event/:id', function (req, res) {
  const data = db.getData(`/event/${req.params.id}`);
  res.send(data);
});

router.post('/event', function (req, res) {
  const id = Date.now();
  try {
    db.push(`/event/${id}`, req.body)
    res.send({ id });
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/event/:id', function (req, res) {
  const id = req.params.id;
  try {
    db.push(`/event/${id}`, req.body)
    res.send({ id });
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/event/:id', function (req, res) {
  try {
    db.delete(`/event/${req.params.id}`)
    res.end()
  } catch (error) {
    res.status(500).send({ error })
  }
})

/**
 * END MODIFICATIONS
 */




//module.exports = router;

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




app.get('/event/filterwhere', (req, res) => {

  // connection à la base de données, et sélection des évènements filtrés avec le filtre where
  connection.query('SELECT * from eventLoire WHERE event_where = "Stéphanois-Pilat"', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des évènements filtrés');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});*/

//Marion : filtres pour la présentation de vendredi
app.get('/event/stephanois-pilat', (req, res) => {

  // connection à la base de données, et sélection des évènements filtrés avec le filtre where
  connection.query('SELECT * from eventLoire WHERE event_where = "Stéphanois-Pilat"', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des évènements filtrés');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

app.get('/event/forez', (req, res) => {

  // connection à la base de données, et sélection des évènements filtrés avec le filtre where
  connection.query('SELECT * from eventLoire WHERE event_where = "Forez"', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des évènements filtrés');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

app.get('/event/roannais', (req, res) => {

  // connection à la base de données, et sélection des évènements filtrés avec le filtre where
  connection.query('SELECT * from eventLoire WHERE event_where = "Roannais"', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des évènements filtrés');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});
// Marion : Fin essaie route BDD mysql Loire en Vert
