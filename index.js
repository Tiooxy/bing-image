const express = require('express')
const router = express.Router();
const FormData = require('form-data');
const stalk = require('./skrep.js');
const app = express();
const port = 8080;

router.get('/igstalk', async (req, res) => {
  let q = req.query.text
  if (!q) return res.json('Masukan username')
  let result = await stalk.igstalk(q)
  res.header('Content-Type: application/json')
  res.type('json').send(JSON.stringify(result, null, 2))
})


app.use('/', router);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
