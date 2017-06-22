// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="stylesheets/style.css">
        <title>THE OFFICE</title>
      </head>
      <body>
      <div class="title">
      <h1>WELCOME TO THE DWIGHT HOME PAGE</h1>
      </div>
      <a href="/about">ABOUT DWIGHT</a><br> <a href="/pictures">PICTURES</a><br>
        <img src="images/31598.jpg"/><br>

      </body>
    </html>
  `);
  next();
});

app.get('/about', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="stylesheets/style.css">
      </head>
      <body>
      <div class="about">
      <h1>Dwight Kurt Schrute III </h1>
      <p>(born January 20, 1968) is a character on NBC's The Office portrayed by Rainn Wilson. He was originally based on Gareth Keenan from the original UK version of The Office. Dwight is the "Assistant to the Regional Manager in selling paper, despite lacking social skills and common sense.[1] Despite his initial personal dislike of Jim Halpert, the two are a very effective sales team.
      </p>
      <h2>Character Information</h2>
      <p>When the series begins, Dwight Schrute is a competent salesman at the Scranton branch of the paper-goods distribution company Dunder Mifflin. Dwight formally held the title of "Assistant to the Regional Manager"[9] but constantly refers to himself as "Assistant Regional Manager," attempting to elevate himself to second-in-command to Michael Scott. Dwight craves authority over others and relishes any minor task that Michael or anyone else gives him.[2] Though Dwight acts like a know-it-all, he is actually quite gullible and naïve.[2] For this reason, he is easily tricked and pranked by his desk-mate and fellow salesman Jim Halpert.[10] Dwight speaks in a halting, intense manner, even in casual conversations.
      </p>
      <a href="/pictures">PICTURES</a> <br>
        <a href="/home">HOME</a>
      </div>
      </body>
    </html>
  `);
  // next();
});

app.get('/pictures', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="stylesheets/style.css">
      </head>
      <body>
      <div class="pictures">
      <a href="/about">ABOUT DWIGHT</a> <br>
        <a href="/home">HOME</a>

        <img src="images/31596.jpeg" height="338"/><br>
        <img src="images/31597.jpg" height="338"/><br>
        <img src="images/31598.jpg" height="338"/><br>
        <img src="images/31599.jpg" height="338"/><br>

      </div>
      </body>
    </html>
  `);
  // next();
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
