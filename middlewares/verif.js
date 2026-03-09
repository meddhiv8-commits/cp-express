
function verif(req, res, next) {
  const dateCourante = new Date();
  const jours = dateCourante.getDay();
  const heures = dateCourante.getHours();
  if (jours > 0 && jours < 6 && heures > 9 && heures < 17) {
    next();
  } else {
    res.send("le site est disponible du lundi au vendredi de 9h à 17h");
  }
}
module.exports = verif;