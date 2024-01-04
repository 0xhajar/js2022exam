const { v4: uuidv4 } = require('uuid');
const path = require('node:path');

const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/users.json');
const jsonDbPath2 = path.join(__dirname, '/../data/favoris.json');

function createOneUser(nom, mail) {
  const userFound = emailExists(mail);
  if (userFound) return undefined;

  const users = parse(jsonDbPath, []);
  const createdUser = {
    id: uuidv4(),
    nom,
    mail,
  };
  users.push(createdUser);
  serialize(jsonDbPath, users);

  return createdUser.id;
}

function emailExists(mail) {
  const users = parse(jsonDbPath, []);
  let userFound;
  users.forEach((e) => {
    if (e.mail === mail) userFound = e;
  });
  return userFound;
}

function addOneFavori(idUser, idPlace) {
  const favoris = parse(jsonDbPath2, []);
  const addedFavori = {
    idUser,
    idPlace,
  };
  favoris.push(addedFavori);
  serialize(jsonDbPath2, favoris);

  return addedFavori;
}

function idUserExists(idUser) {
  const users = parse(jsonDbPath, []);
  let idUserFound;
  users.forEach((e) => {
    if (e.id === idUser) idUserFound = e;
  });
  return idUserFound;
}

function favoriExists(idUser, idPlace) {
  const favoris = parse(jsonDbPath2, []);
  let favoriFound;
  favoris.forEach((e) => {
    if (e.idUser === idUser && e.idPlace === idPlace) favoriFound = e;
  });
  return favoriFound;
}

module.exports = {
  createOneUser,
  emailExists,
  addOneFavori,
  idUserExists,
  favoriExists,
};
