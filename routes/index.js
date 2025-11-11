<<<<<<< HEAD
const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  // Serve hw5-work.html instead of a Pug file
  res.sendFile(path.join(__dirname, '../public/hw5-work.html'));
});

/* POST home page (form submission) */
router.post('/', function(req, res, next) {
  // Build an HTML table with all submitted form data
  const formData = req.body;
  let tableRows = '';

  for (const [key, value] of Object.entries(formData)) {
    tableRows += `<tr><td>${key}</td><td>${value}</td></tr>`;
  }

  const responsePage = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Form Results</title>
        <link rel="stylesheet" href="/stylesheets/style.css">
        <style>
          table { border-collapse: collapse; margin: 20px 0; }
          th, td { border: 1px solid #ccc; padding: 8px 12px; }
          th { background-color: #f5f5f5; }
        </style>
      </head>
      <body>
        <h2>Form Data Received:</h2>
        <table>
          <tr><th>Field</th><th>Value</th></tr>
          ${tableRows}
        </table>
        <hr>
        <h3>Submit Another Response:</h3>
        ${require('fs').readFileSync(path.join(__dirname, '../public/hw5-work.html'), 'utf8')}
      </body>
    </html>
  `;

  res.send(responsePage);
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
>>>>>>> 3cad3852879bc3f6d1939f6276ff58821c3d5ad2
