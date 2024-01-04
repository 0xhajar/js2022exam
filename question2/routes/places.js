const express = require('express');

const router = express.Router();
const Place = require('../models/Place');

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'e-baron' }] });
});

/* POST new place. */
router.post('/createPlace', (req, res) => {
  const nom = req?.body?.nom?.length !== 0 ? req.body.nom : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;

  if (!nom || !description) return res.sendStatus(400);
  const createdPlace = Place.createOnePlace(
    nom,
    description,
  );
  return res.json(createdPlace);
});

module.exports = router;
