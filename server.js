const express = require("express");

const app = express();
//config
app.set("view engine", "ejs");
app.set("views", "./views");
//middelware
const verif = require("./middlewares/verif");
app.use(express.static("public-img"));
app.use(verif);
//Routes
//-----------------home------------------------
app.get("/", (req, res) => {
res.render("home");
});
//-----------------Services--------------------
app.get("/services", (req, res) => {
res.render("services");
});
//----------------contactes--------------------
app.get("/contact", (req, res) => {
res.render("contact");
});

// ----------------fin du p-------------------

const PORT = 3500;

app.listen(PORT, (err) => {
err
    ? console.log(err)
    : console.log(`the server is running on http://localhost:${PORT}`);
});
