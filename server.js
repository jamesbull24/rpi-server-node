const { readFileSync, writeFileSync } = require('fs'); // from nodeJS

const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
    const count = readFileSync('./count.txt', 'utf-8');
    console.log('count', count);

    const newCount = parseInt(count) + 1; //convert to Integer and increment
    writeFileSync('./count.txt', newCount); //write back to same file

    /* sending response to Endpoint */
    res.send(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>RPi Hosted Website Test</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1>RasberryPi server { isOnline: true }</h1>
        <p>This page has been viewed ${newCount} times!</p>
    </body>
    </html>
    `);
});

app.listen(5000, () => console.log('http://localhost:5000/') ); 