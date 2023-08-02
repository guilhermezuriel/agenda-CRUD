const { async } = require('regenerator-runtime');
const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
  const contatos = await Contato.searchContats();
  res.render('index', {contatos});
};
