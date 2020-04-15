const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const HOME_DIR = path.join(__dirname, '.');

app.use(cors());
app.use(bodyParser.json());

/* Front-End */
app.use(express.static(path.join(HOME_DIR, '/dist/WORKER/')));
app.get('/*', (req, res) => res.sendFile(path.join(HOME_DIR)));
/* Front-End */

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});