const express = require('express');
const User = require('../models/User');

const router = express.Router();

const { idPlaceExists } = require('../models/Place');
const { idUserExists, favoriExists } = require('../models/User');

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'e-baron' }] });
});

/* POST new user. */
router.post('/createUser', (req, res) => {
  const nom = req?.body?.nom?.length !== 0 ? req.body.nom : undefined;
  const mail = req?.body?.mail?.length !== 0 ? req.body.mail : undefined;

  if (!nom || !mail) return res.sendStatus(400);

  const createdUser = User.createOneUser(
    nom,
    mail,
  );
  if (createdUser) return res.json(createdUser);
  return res.sendStatus(409);
});

/* ADD favorite place */
router.post('/addFavori', (req, res) => {
  const idUser = req?.body?.idUser?.length !== 0 ? req.body.idUser : undefined;
  const idPlace = req?.body?.idPlace?.length !== 0 ? req.body.idPlace : undefined;

  if (!idUser || !idPlace) return res.sendStatus(400);

  const idUserNotFound = idUserExists(idUser);
  if (!idUserNotFound) return res.sendStatus(400);

  const idPlaceNotFound = idPlaceExists(idPlace);
  if (!idPlaceNotFound) return res.sendStatus(400);

  const favoriExist = favoriExists(idUser, idPlace);
  if (favoriExist) return res.sendStatus(400);

  const addedFavori = User.addOneFavori(
    idUser,
    idPlace,
  );
  if (addedFavori) return res.json(addedFavori);
  return res.sendStatus(409);
});

module.exports = router;
