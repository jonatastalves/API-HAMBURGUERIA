const sequelize = require("../database/conexao.js");
const { DataTypes } = require("sequelize");

const Cliente = sequelize.define("CLIENTE", {
  nome: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "o campo cliente deve ser informado",
      },
      len: {
        args: [1, 24],
        msg: "Esse campo deve ter mais de 1 caracter e menos de 24"
      },
    },
  },

  telefone: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo telefone deve ser informado",
      },
      isNumeric: true,
    },
  },

  idade: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo idade deve ser informado",
      },
      isNumeric: true,
    },
  },

  cpf: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo CPF deve ser informado",
      },
      isNumeric: true,

    },
  },
});

module.exports = Cliente;
