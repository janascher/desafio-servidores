const express = require("express");
const route = require("./routes/routes");
const app = express();
const PORT = 8000;

app.use(express.json()); // faz com que o express entenda JSON
app.use(express.urlencoded({ extended: true })); //não tenho certeza se é true ou false

app.use("/users", route);
//app.use(express.static("."));

app.listen(PORT, () => {
    console.log(`Servidor criado em: http://localhost:${PORT}`);
});
