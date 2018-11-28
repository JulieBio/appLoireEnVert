const express = require('express');
const router = express.Router();
const JsonDB = require('node-json-db');
const db = new JsonDB("myDataBase", true, true);


/**
 * BEGIN MODIFICATIONS
 */

router.get('/', function (req, res) {
  res.send("Hello World");
});

router.get('/event', function (req, res) {
  const data = db.getData("/event");
  const events= [];
  Object.keys(data).map((key)=> {
    events.push({...data[key],id:key})
  });
  console.log(JSON.stringify(events,2,2))
  res.json({events});
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


module.exports = router;