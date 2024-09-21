const express = require('express');
const app = express();
const port = 3000;

// Serve static files like images or CSS
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome to Hemanthforyou Channel</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url('/images/ocean-mountains-sunrise.jpg');
            background-size: cover;
            background-position: center;
            font-family: Arial, sans-serif;
            color: white;
            text-align: center;
          }
          .container {
            background-color: rgba(0, 0, 0, 0.5);
            padding: 20px;
            border-radius: 10px;
          }
          h1 {
            font-size: 3em;
            margin-bottom: 20px;
          }
          .login-form {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          input[type="text"], input[type="password"] {
            padding: 10px;
            margin: 10px;
            width: 250px;
            border: none;
            border-radius: 5px;
          }
          input[type="submit"] {
            padding: 10px 20px;
            border: none;
            background-color: #28a745;
            color: white;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1.2em;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to Hemanthforyou Channel</h1>
          <form class="login-form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <input type="submit" value="Login" />
          </form>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
