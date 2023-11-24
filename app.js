const express = require("express");
const path = require("path");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files like CSS and JS from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the homepage ('/') to serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for handling POST requests to '/calculate'
app.post("/calculate", (req, res) => {
  let expression = req.body.expression;
  let result;
  try {
    result = eval(expression); // Caution: 'eval' is used for demonstration purposes
  } catch (error) {
    result = "Error";
  }
  res.json({ result: result });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
