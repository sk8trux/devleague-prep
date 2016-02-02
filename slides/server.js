const express = require('express');
const path = require('path');

const port = process.argv[2] || 9001;
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.use((req, res) => {
  const msg = `Unrecognized path: ${req.url}`;
  if (req.url !== '/favicon.ico') {
    console.log(msg);
  }
  res.status(400).send(msg);
});

app.listen(port, () => {
  console.log(`Express server listening on ${port}...`);
});
