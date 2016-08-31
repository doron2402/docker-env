const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pkg = require('./package.json');

app
  .use('/version', (req, res) => {
    return res.json({
      version: pkg.version,
      name: pkg.name
    });
  })
  .use('*', (req, res) => {
  return res.json({ code: 'ok' });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`server started ${PORT}`);
});
