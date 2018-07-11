var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');
const { SGApiKey } = process.env;
sgMail.setApiKey(SGApiKey);

/* GET home page. */
router.post('/', function (req, res, next) {
  let date = new Date(req.body.datePicker);
  let emailBody = `<p><strong>Nombre:</strong> ${req.body.name}</p>
<p><strong>Correo electrónico:</strong> ${req.body.email}</p>
<p><strong>Fecha:</strong> ${date.toDateString()}</p>
<p><strong>Cantidad de personas:</strong> ${Number.parseInt(req.body.people)}</p>
<p><strong>Comentarios:</strong> ${req.body.coments}</p>
<p><strong>Nombre del viaje:</strong> ${req.body.tripName}</p>
<p><strong>ID del viaje:</strong> ${req.body.tripId}</p>
<p><strong>Precio pp:</strong> ${Number.parseFloat(req.body.tripPrice)}</p>
<p><strong>Precio final:</strong> ${Number.parseFloat(req.body.finalPrice)}</p>`;

  const msg = {
    to: 'manu05091991@gmail.com',
    from: 'SunZunTour<noreplay@sunzuntour.com>',
    replyTo: req.body.email,
    subject: `Nueva reservación de ${req.body.name}`,
    html: emailBody,
  };

  sgMail.send(msg)
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.error(error.toString());
      res.sendStatus(500);
    });

});

module.exports = router;
