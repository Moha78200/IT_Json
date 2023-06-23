const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());



app.post('/register', (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, password, billingAddress } = req.body;

    // Read the existing users from the JSON file
    const usersData = JSON.parse(fs.readFileSync('./bd/users.json', 'utf-8'));

    // Check if any user already has the same userID
    const existingUser = usersData.find(user => user.userID === usersData.length + 1);
    if (existingUser) {
      // If a user with the same userID exists, generate a new unique userID
      const maxUserId = Math.max(...usersData.map(user => user.userID));
      newUserId = maxUserId + 1;
    } else {
      // If no user with the same userID exists, use the current count + 1 as the new userID
      newUserId = usersData.length + 1;
    }

    // Create a new user object
    const newUser = {
      userID: newUserId,
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      billingAddress,
      type: 'user' // Set the user type as 'user'
    };

    // Add the new user to the users array
    usersData.push(newUser);

    // Write the updated users array back to the JSON file
    fs.writeFileSync('./bd/users.json', JSON.stringify(usersData, null, 2));

    res.status(200).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
});

app.post('/editUser', (req, res) => {
  try {
    const { userID, firstName, lastName, phoneNumber, email, password, billingAddress } = req.body;

    // Read the existing users from the JSON file
    const usersData = JSON.parse(fs.readFileSync('./bd/users.json', 'utf-8'));

    // Find the index of the user to update using userID
    const userToUpdate = usersData.findIndex(user => user.userID === userID);
    if (userToUpdate === -1) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Check the password
    if (usersData[userToUpdate].password !== password) {
      return res.status(401).json({ error: 'Wrong password.' });
    }

    // Update the selected user
    usersData[userToUpdate].firstName = firstName;
    usersData[userToUpdate].lastName = lastName;
    usersData[userToUpdate].phoneNumber = phoneNumber;
    usersData[userToUpdate].email = email;
    usersData[userToUpdate].billingAddress = billingAddress;

    // Write the updated usersData back to the JSON file
    fs.writeFileSync('./bd/users.json', JSON.stringify(usersData, null, 2));

    return res.status(200).json({ message: 'User updated successfully.' });
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
});

app.get('/orders', (req, res) => {
  try {
    const { userID } = req.query;

    // Read the existing orders from the JSON file
    const ordersData = JSON.parse(fs.readFileSync('./bd/orders.json', 'utf-8'));

    // Filter orders based on the user ID
    const userOrders = ordersData.filter(order => order.userID === parseInt(userID));

    res.status(200).json(userOrders);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({ error: 'An error occurred while fetching user orders.' });
  }
});


app.get('/products', (req, res) => {
  try {
    const { productID } = req.query;

    // Read the existing products from the JSON file
    const productsData = JSON.parse(fs.readFileSync('./bd/products.json', 'utf-8'));

    // Find the product with the matching ID
    const product = productsData.find(prod => prod.id === parseInt(productID));

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found.' });
    }
  } catch (error) {
    console.error('Error fetching product information:', error);
    res.status(500).json({ error: 'An error occurred while fetching product information.' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
