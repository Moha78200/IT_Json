const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());

app.post('/orders', (req, res) => {
  try {
    const { deliveryDate, userID, deliveryAddress, products, totalPrice } = req.body;

    // Read the existing orders from the JSON file
    let ordersData = JSON.parse(fs.readFileSync('./bd/orders.json', 'utf-8'));

    // Read the existing products from the JSON file
    let productsData = JSON.parse(fs.readFileSync('./bd/products.json', 'utf-8'));

    // Generate a new order ID
    // Check if any order already has the same orderID
    let newOrderID = ordersData.find(order => order.orderID === ordersData.length + 1);
    if (newOrderID) {
      // If an order with the same orderID exists, generate a new unique orderID
      const maxOrderId = Math.max(...ordersData.map(order => order.orderID));
      newOrderID = maxOrderId + 1;
    } else {
      // If no order with the same orderID exists, use the current count + 1 as the new orderID
      newOrderID = ordersData.length + 1;
    }

    // Create a new order object
    const newOrder = {
      orderID: newOrderID,
      deliveryDate,
      userID,
      deliveryAddress,
      products: products.map(product => ({ id: product.id, quantity: product.quantity })),
      status: 'Pending Delivery', // Set the initial status as 'Pending Delivery'
      totalPrice
    };

    // Update the stock in the products data based on the ordered quantities
    productsData.forEach(product => {
      const orderedProduct = products.find(p => p.id === product.id);
      if (orderedProduct) {
        product.stock -= orderedProduct.quantity;
      }
    });

    // Add the new order to the orders array
    ordersData.push(newOrder);

    // Write the updated orders array back to the JSON file
    fs.writeFileSync('./bd/orders.json', JSON.stringify(ordersData, null, 2));

    // Write the updated products data back to the JSON file
    fs.writeFileSync('./bd/products.json', JSON.stringify(productsData, null, 2));

    // Send the response with the new orderID and totalPrice
    res.status(200).json({ message: 'Order created successfully.', orderID: newOrderID, totalPrice });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'An error occurred while creating the order.' });
  }
});



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

app.put('/orders/:orderID', (req, res) => {
  try {
    const { orderID } = req.params;
    const { status } = req.body;

    // Read the existing orders from the JSON file
    const ordersData = JSON.parse(fs.readFileSync('./bd/orders.json', 'utf-8'));

    // Find the index of the order to update using orderID
    const orderToUpdate = ordersData.findIndex(order => order.orderID === parseInt(orderID));
    if (orderToUpdate === -1) {
      return res.status(404).json({ error: 'Order not found.' });
    }

    // Update the status of the order
    ordersData[orderToUpdate].status = status;

    // Write the updated ordersData back to the JSON file
    fs.writeFileSync('./bd/orders.json', JSON.stringify(ordersData, null, 2));

    return res.status(200).json({ message: 'Order status updated successfully.' });
  } catch (error) {
    console.error('Error updating order status:', error);
    return res.status(500).json({ error: 'An error occurred while updating the order status.' });
  }
});


app.route('/orders')
  .get((req, res) => {
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
  })
  .put((req, res) => {
    // Handle the PUT request separately as defined in the new route above
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

//Admin

app.delete('/admin/products/:productID', (req, res) => {
  try {
    const { productID } = req.params;

    // Read the existing products from the JSON file
    let productsData = JSON.parse(fs.readFileSync('./bd/products.json', 'utf-8'));

    // Find the index of the product to delete using productID
    const productIndex = productsData.findIndex(product => product.id === parseInt(productID));
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    // Remove the product from the products array
    productsData.splice(productIndex, 1);

    // Write the updated products array back to the JSON file
    fs.writeFileSync('./bd/products.json', JSON.stringify(productsData, null, 2));

    return res.status(200).json({ message: 'Product deleted successfully.' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ error: 'An error occurred while deleting the product.' });
  }
});

app.get('/admin/orders', (req, res) => {
  try {
    // Read the existing orders from the JSON file
    const ordersData = JSON.parse(fs.readFileSync('./bd/orders.json', 'utf-8'));

    res.status(200).json(ordersData);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'An error occurred while fetching orders.' });
  }
});

app.put('/admin/products/:productID', (req, res) => {
  try {
    const { productID } = req.params;
    const { name, stock } = req.body;

    // Read the existing products from the JSON file
    const productsData = JSON.parse(fs.readFileSync('./bd/products.json', 'utf-8'));

    // Find the index of the product to update using productID
    const productToUpdate = productsData.findIndex(product => product.id === parseInt(productID));
    if (productToUpdate === -1) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    // Update the selected product
    productsData[productToUpdate].name = name;
    productsData[productToUpdate].stock = stock;

    // Write the updated productsData back to the JSON file
    fs.writeFileSync('./bd/products.json', JSON.stringify(productsData, null, 2));

    return res.status(200).json({ message: 'Product updated successfully.' });
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ error: 'An error occurred while updating the product.' });
  }
});

// Add products

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../frontend/assets/img'); // Change the destination folder as per your requirement
  },
  filename: function (req, file, cb) {
    const name = req.body.name; // Assuming the name of the game is provided in the request body
    const extension = 'jpeg';
    const imageName = `${name}.${extension}`;
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage });

// Middleware to serve static files
app.use(express.static('public'));

// Parse JSON request body
app.use(express.json());

// Define your existing routes here

// Route to handle the addition of a new product
app.post('/addProduct', upload.single('img'), (req, res) => {
  // Process the product data and save it to the database
  const { name, price, stock } = req.body;
  const image = req.file;

  // Read the existing products from the JSON file
  let productsData = JSON.parse(fs.readFileSync('./bd/products.json', 'utf-8'));

  // Check if any product already has the same id
  const checkID = productsData.find(prod => prod.id === prod.length + 1);
  if (checkID) {
    // If a product with the same id exists, generate a new unique id
    const actualID = Math.max(...productsData.map(prod => prod.id));
    finalID = actualID + 1;
  } else {
    // If no user with the same userID exists, use the current count + 1 as the new userID
    finalID = productsData.length + 1;
  }

  // Save the product to the database

      // Create a new product object
      const newProduct = {
        id: finalID,
        name: name,
        price: price,
        stock: stock,
        img: ("assets/img/"+image.filename),
      };

      // Add the new product to the existing products array
      productsData.push(newProduct);

      // Write the updated products array back to the JSON file
      fs.writeFileSync('./bd/products.json', JSON.stringify(productsData, null, 2));
});

// fetch the liked products based on the list of id
app.get('/wished', (req, res) => {
  try {

    const productIds = req.query.ids;

    // Read the existing products from the JSON file
    const productsData = JSON.parse(fs.readFileSync('./bd/products.json', 'utf-8'));

    // Filter the products based on the provided product ids
    const filteredProducts = productsData.filter(product => productIds.includes(parseInt(product.id)));

    res.status(200).json(filteredProducts);
    console.log("products fetched : ", filteredProducts)

    
  } catch (error) {
    console.error('Error fetching product information:', error);
    res.status(500).json({ error: 'An error occurred while fetching product information.' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
