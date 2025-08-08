const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle checkout
app.post('/checkout', (req, res) => {
    const { name, mobile, address, pincode, cart } = req.body;

    // Here you can add logic to save the order to a database
    console.log('Order received:', { name, mobile, address, pincode, cart });

    // Send a response back to the client
    res.json({ message: 'Order placed successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on https://ashwin-jagtap007.github.io/Har-Din-Grocery-Store-/:${PORT}`);
});

