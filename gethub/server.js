const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/checkout', (req, res) => {
  const { name, mobile, address, pincode, cart } = req.body;

  console.log('New Order:', { name, mobile, address, pincode, cart });

  // You can save this to a database here

  res.json({ message: `Order received for ${name}` });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
