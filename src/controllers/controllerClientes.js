const modelsClientes = require("../models/modelsClientes.js");

class controllerClientes {
 
  static async mostraTodos(req, res) {
    try {
      const cliente = await modelsClientes.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      return res.status(200).json({ resultado: cliente });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        menssagem: error.menssagem,
      });
    }
    console.log({ mostraTodos });
  }

  
  static async mostrarPorId(req, res) {
    const { id } = req.params;

    try {
      const cliente = await modelsClientes.findByPk(id, {
        attributes: { exclude: [ "createdAt", "updatedAt" ] },
      });
      if (!cliente) {
        return res.status(400).json({
          status: 400,
          menssagem: "Cliente nao encontrado",
        });
      }
      return res.status(200).json({ endereco: cliente });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        menssagem: error.menssagem,
      });
    }
    console.log({ mostrarPorId });
  }

 
  static async criar(req, res) {
    const novoCliente = {
      nome: req.body.nome,
      telefone: req.body.telefone,
      idade: req.body.idade,
      cpf: req.body.cpf,
      
    };

    const clienteExistente = await modelsClientes.findOne({
      where: { nome: req.body.nome },
    });

    if (clienteExistente) {
      return res.status(400).json({
        status: 400,
        menssagem: "Cliente existente",
      });
    }

    try {
      await modelsClientes.create(novoCliente);
      res.status(200).json({
        status: 200,
        menssagem: "Cliente cadastrado com sucesso",
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: `${error}`,
      });
    }
    console.log({ novoCliente });
  }

  
  static async deletar(req, res) {
    const { id } = req.params;
    const cliente = await modelsClientes.findOne({
      where: { id: id },
      raw: true,
    });
    if (!cliente) {
      return res.status(400).json({
        status: 400,
        menssagem: "Cliente não encontrado",
      });
    }
    try {
      await modelsClientes.destroy({ where: cliente });
      return res.status(200).json({
        status: 200,
        menssagem: "Cliente deletado com sucesso",
      });
    } catch (error) {
      return res
        .status(400)
        .json({ status: 400, message: "Cliente não encontrado" });
    }
   
  }

  
  static async atualizar(req, res) {
    const { id } = req.params;
    const updateCliente = {
      nome: req.body.nome,
      telefone: req.body.telefone,
      idade: req.body.idade,
      cpf: req.body.cpf,
    };
    const cliente = await modelsClientes.findOne({
      where: { id: id },
      raw: true,
    });

    try {
      await modelsClientes.update(updateCliente, { where: cliente });
      return res.status(200).json({
        status: 200,
        menssagem: "Cliente atualizado com sucesso",
      });
    } catch (error) {
      return res
        .status(400)
        .json({ status: 400, message: "Cliente não encontrado" });
    }
    console.log(updateCliente);
  }
}

module.exports = controllerClientes;
