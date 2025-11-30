const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to the e-commerce platform API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});