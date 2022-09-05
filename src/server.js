const express = require("express");
//const database = require("./database ");
const route = require("./routes/routes");
const app = express();
const PORT = 8080;

app.use(express.json()); // faz com que o express entenda JSON
app.use(express.urlencoded({ extended: true }));

app.use("/users", route);
//app.use(express.static("."));

app.listen(PORT, () => {
    console.log(`Servidor criado em: http://localhost:${PORT}`);
});
