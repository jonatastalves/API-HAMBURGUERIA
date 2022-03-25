const express = require("express");

const app = express();

const port = process.env.PORT || 3003;

app.use(express.json());

const sequelize = require("./src/database/conexao.js"); 

const models = require("./src/models/modelsClientes.js"); 

const routeClientes = require("./src/routers/routeClientes.js");

app.use("/cliente", routeClientes); 



app.get("/teste", (req, res) => {
  return res.status(200).json({ menssagem: "Server Online" });
});

async function conectar() {
  try {
    await sequelize.sync();
    app.listen(port, () =>
      console.log(`Servidor rodando na porta http://localhost:${port}`)
    );
  } catch (error) {
    console.log("erro ao conectar com o banco.", error);
  }
}

conectar();
