const { v4: uuidv4 } = require('uuid');
const path = require('node:path');

const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/places.json');

function createOnePlace(nom, description) {
  const places = parse(jsonDbPath, []);
  const createdPlace = {
    id: uuidv4(),
    nom,
    description,
  };
  places.push(createdPlace);
  serialize(jsonDbPath, places);

  return createdPlace.id;
}

function idPlaceExists(idPlace) {
  const places = parse(jsonDbPath, []);
  let idPlaceFound;
  places.forEach((e) => {
    if (e.id === idPlace) idPlaceFound = e;
  });
  return idPlaceFound;
}

module.exports = {
  createOnePlace,
  idPlaceExists,
};
