const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Colorful Page</title>
      </head>
      <body style="background-color: #ADD8E6; color: #333; text-align: center; font-family: Arial, sans-serif;">
        <h1>Welcome to the Colorful Page!</h1>
        <p style="color: #FF6347;">This is a page with a light blue background and tomato-colored text.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
