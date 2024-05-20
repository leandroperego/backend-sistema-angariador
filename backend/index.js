const express = require("express");
const userRoutes = require("./user-routes");
const imovelRoutes = require("./imovel-routes");

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(imovelRoutes);

app.use((req, res) => {
    res.status(404).send("Página não encontrada!");
    res.json({ message: "Página não encontrada!" });
})

app.listen(3333, () => {
    console.log("Server is running on http://localhost:3333");
});