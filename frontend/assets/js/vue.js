const Login = {
  template: `
  <section>

  <!--------------------------------------------------------------------------------------------------------->
    <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
    <br> <br>
      <button v-if="isLoggedIn" @click="logout" class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600">
        Logout
      </button>
    </div>


    <section>

      <!-- LOGINNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN -->
      <div class="grid grid-cols-2">
        <div class="LOGIN mt-0">
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <form v-if="!isLoggedIn" @submit="login" action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div class="mx-auto max-w-lg text-center">
                <h1 class="text-2xl font-bold sm:text-3xl">Log In</h1>
              </div>
              <br><br><br><br>
              <div>
                <label for="email" class="sr-only">Email</label>
                <div class="relative">
                  <input v-model="email" type="email" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" />
                  <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label for="password" class="sr-only">Password</label>
                <div class="relative">
                  <input v-model="password" type="password" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter password" />
                  <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div class="flex items-center justify-center">
                  <button type="submit" class="rounded-lg bg-blue-500 px-20 py-3 text-sm font-medium text-white hover:bg-blue-600">
                    Sing in
                  </button>
                </div>
            </form>
          </div>
        </div>

        <!--REGISTERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR-->

        <div class="REGISTER">
        
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <form v-if="!isLoggedIn" @submit="register" action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div class="mx-auto max-w-lg text-center">
                <h1 class="text-2xl font-bold sm:text-3xl">Register</h1>
              </div>

              <div>
                  <label for="firstname" class="sr-only">First Name</label>
                  <div class="relative">
                    <input v-model="firstName" type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="First Name" required />
                  </div>
              </div>

                <div>
                  <label for="lastname" class="sr-only">Last Name</label>
                  <div class="relative">
                    <input v-model="lastName" type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Last Name" required />
                  </div>
                </div>

                <div>
                  <label for="phonenumber" class="sr-only">Phone Number</label>
                  <div class="relative">
                    <input v-model="phoneNumber" type="number" inputmode="numeric" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm phone" placeholder="Phone Number" required />
                  </div>
                </div>
        
                <div>
                  <label for="billing address" class="sr-only">Billing Address</label>
                  <div class="relative">
                    <input v-model="billingAddress" type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Billing Address" required />

                  </div>
                </div>
        
                <div>
                  <label for="email" class="sr-only">Email</label>
                  <div class="relative">
                    <input v-model="regEmail" type="email" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Email" required />
                  </div>
                </div>
        
                <div>
                  <label for="password" class="sr-only">Password</label>
                  <div class="relative">
                    <input v-model="regPassword" type="password" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Password" required />
                  </div>
                </div>

                <div class="flex items-center justify-center">
                  <button type="submit" class="rounded-lg bg-blue-500 px-20 py-3 text-sm font-medium text-white hover:bg-blue-600">
                    Create Account
                  </button>
                </div>
            </form>
          </div>
        </div>
                  
      </div>
    </section>

    
  </section>

  `,
  data() {
    return {
      users: [],
      email: "",
      password: "",
      isLoggedIn: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      regEmail: "",
      regPassword: "",
      billingAddress: "",
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      const user = this.users.find(
        (u) => u.email === this.email && u.password === this.password
      );

      if (user) {
        this.isLoggedIn = true;
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        this.$router.push("/user-settings");
      } else {
        alert("Invalid email or password");
      }
    },
    logout() {
      this.isLoggedIn = false;
      sessionStorage.removeItem("loggedInUser");
    },
    register(event) {
      event.preventDefault();

      // Create an object with the user data from the form
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.regEmail,
        password: this.regPassword,
        billingAddress: this.billingAddress,
      };

      axios
        .post("http://localhost:3000/register", userData)
        .then((response) => {
          // Handle the successful registration response
          // Reset the form fields
          this.firstName = "";
          this.lastName = "";
          this.phoneNumber = "";
          this.regEmail = "";
          this.regPassword = "";
          this.billingAddress = "";

          // redirect
          this.$router.push("/user-settings");
        })
        .catch((error) => {
          // Handle the registration error
          console.error("Error registering user:", error);
          // Display an error message to the user
          alert(error.response.data.error);
        });
    },
    fetchUsers() {
      fetch("../backend/bd/users.json")
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
          this.checkLoggedInUser();
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    checkLoggedInUser() {
      const loggedInUser = sessionStorage.getItem("loggedInUser");
      if (loggedInUser) {
        this.isLoggedIn = true;
      }
    },
    saveUsersToFile() {
      const fs = require("fs");
      const filePath = "../backend/bd/users.json";

      // Convert the users array to JSON format
      const jsonData = JSON.stringify(this.users, null, 2);

      // Write the JSON data to the users.json file
      fs.writeFile(filePath, jsonData, "utf8", (err) => {
        if (err) {
          console.error("Error saving users to file:", err);
        } else {
          console.log("Users saved to file successfully.");
        }
      });
    },
  },
  created() {
    this.fetchUsers();
    this.checkLoggedInUser();
  },
};

const Home = {
  template: "#home",
  name: "Home",
  data() {
    return {
      products: [],
      searchKey: "",
      liked: [],
      cart: [],
      useDifferentShippingAddress: false,
      shippingAddress: '',
      expeditedDelivery: false,
    };
  },
  computed: {
    filteredList() {
      return this.products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].quantity * this.cart[item].price;
      }
      return total;
    },
    itemTotalAmount() {
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal = itemTotal + this.cart[item].quantity;
      }
      return itemTotal;
    },
  },
  methods: {
    createOrder() {
      try {
        const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
        const deliveryTime = this.expeditedDelivery ? 2 : 5;
        const deliveryDate = new Date(Date.now() + deliveryTime * 24 * 60 * 60 * 1000);
        const formattedDeliveryDate = deliveryDate.toISOString().slice(0, 10);
        const order = {
          userID: loggedInUser.userID,
          products: this.cart,
          deliveryDate: formattedDeliveryDate,
          deliveryAddress: this.useDifferentShippingAddress
            ? this.shippingAddress
            : loggedInUser.billingAddress,
          totalPrice: this.cartTotalAmount, // Update totalPrice with cartTotalAmount
        };
    
        // Make a POST request to save the order into the database
        axios
          .post("http://localhost:3000/orders", order)
          .then((response) => {
            // Clear the cart after successfully creating the order
            this.cart = [];
            alert("Order created successfully!");
          })
          .catch((error) => {
            console.error("Error creating order:", error);
            alert("An error occurred while creating the order.");
          });
      } catch {
        alert("You must be logged in to create an order.");
      }
    },
    getLikeCookie() {
      const likedCookie = this.$cookies.get("like");
      if (likedCookie) {
        this.liked = likedCookie;
      }
    },
  
    isProductInStock(product) {
      return product.stock > 0;
    },
    fetchProducts() {
      fetch("../backend/bd/products.json")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    setLikeCookie() {
      document.addEventListener("input", () => {
        setTimeout(() => {
          this.$cookies.set("like", JSON.stringify(this.liked));
        }, 300);
      });
    },
    addToCart(product) {
      if (product.stock > 0) {
        const existingCartItem = this.cart.find(
          (item) => item.id === product.id
        );
        if (existingCartItem) {
          if (existingCartItem.quantity < product.stock) {
            existingCartItem.quantity++;
          } else {
            // Alert the user that the maximum stock has been reached
            alert(
              "You have reached the maximum stock quantity for this product."
            );
          }
        } else {
          this.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1,
          });
        }
      }
    },
    cartPlusOne(product) {
      if (
        product.quantity >=
        this.products.find((item) => item.id === product.id).stock
      ) {
        alert("You have reached the maximum stock quantity for this product.");
      } else {
        product.quantity = product.quantity + 1;
      }
    },
    cartMinusOne(product, id) {
      if (product.quantity == 1) {
        this.cartRemoveItem(id);
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    cartRemoveItem(id) {
      this.$delete(this.cart, id);
    },
  },
  beforeMount() {
    this.fetchProducts();
  },
  mounted() {
    this.getLikeCookie();
  },
};

const UserSettings = {
  template: `
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="user-settings">
      <h1>User Settings</h1>
      <div v-if="isLoggedIn">
        <label for="firstName">First Name:</label>
        <input type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" id="firstName" v-model="user.firstName">
        
        <label for="lastName">Last Name:</label>
        <input type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" id="lastName" v-model="user.lastName">
        
        <label for="phoneNumber">Phone Number:</label>
        <input type="text" inputmode="numeric" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" id="phoneNumber" v-model="user.phoneNumber">
        
        <label for="email">Email:</label>
        <input type="email" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" id="email" v-model="user.email">
        
        <label for="billingAddress">Billing Address:</label>
        <input type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" id="billingAddress" v-model="user.billingAddress">
        
        <label for="password">Password:</label>
        <input type="password" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" id="password" v-model="password">
        <button @click="saveChanges">Save Changes</button>
        <button v-if="isAdmin" @click="redirectToAdminPage">Admin Page</button>
      </div>
      <div v-else>
        <p>Please log in to view and modify your user settings.</p>
      </div>
    </div>
  </div>

  `,
  name: "UserSettings",
  data() {
    return {
      isLoggedIn: false,
      user: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        billingAddress: ""
      },
      password: ""
    };
  },
  computed: {
    isAdmin() {
      return this.user.type === 'admin'; 
    }
  },
  methods: {
    redirectToAdminPage() {

      this.$router.push('/admin-page'); 
    },
    saveChanges() {
      // Perform validation and save changes to the database using axios or your preferred method
      if (this.password === this.user.password) {
        // Make the necessary API request to update the user's information
        axios.post("http://localhost:3000/editUser", {
          userID: this.user.userID,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          phoneNumber: this.user.phoneNumber,
          email: this.user.email,
          billingAddress: this.user.billingAddress,
          password: this.password
        })
        .then(response => {
          // Handle success
          console.log("User information updated successfully");

          // Update the session storage with the modified user data
          sessionStorage.setItem("loggedInUser", JSON.stringify(this.user));

          alert("User information updated successfully")
        })
        .catch(error => {
          // Handle error
          console.error("Error updating user information", error);

        });
      } else {
        // Display an error message or perform appropriate action if password is not provided
        console.error("Please provide your password to save the changes.");

        alert("Please provide your valid password to confirm changes.")
      }
    }
  },
  mounted(){
    {
      const loggedInUser = sessionStorage.getItem("loggedInUser");
      if (loggedInUser) {
        this.isLoggedIn = true;
        this.user = JSON.parse(loggedInUser);
      }
    }
  }
};

const OrderItem = {
  template: `
  
    <div class="order-item home-container">

      <div class="card-cart-container">
        <div class="card-container">
          <div class="card">
            <div class="img-container">
              <img :src="product.image" :alt="product.name" />
            </div>

            <div class="card-text">
              <h3>{{ product.name }}</h3>
              <p class="stock">Quantity: {{ product.quantity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  `,
  props: {
    productProp: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      productData: null
    };
  },
  mounted() {
    // Make a GET request to fetch the product information
    axios
      .get("http://localhost:3000/products", {
        params: {
          productID: this.productProp.id
        }
      })
      .then(response => {
        this.productData = response.data;
      })
      .catch(error => {
        console.error("Error fetching product information", error);
      });
  },
  computed: {
    product() {
      return {
        ...this.productProp,
        name: this.productData ? this.productData.name : "",
        image: this.productData ? this.productData.img : ""
      };
    }
  }
};

const OrdersList = {
  template: `


    <div class="overflow-x-auto rounded-lg border border-gray-200">
      <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mt-16">
        <thead class="ltr:text-left rtl:text-right table-heading">
          <tr>
            <th class="table-heading whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
              Order ID
            </th>
            <th class="table-heading whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
              Expected Delivery Date
            </th>
            <th class="table-heading whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
              Delivery Address
            </th>
            <th class="table-heading whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
              Total order price
            </th>
            <th class="table-heading whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
              Delivery Status
            </th>
            <th class="table-heading whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
              Products
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          <tr v-for="order in orders" :key="order.orderID">
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
              {{ order.orderID }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{{ order.deliveryDate }}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{{ order.deliveryAddress }}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{{ order.totalPrice }}€</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
              <div class="delivery-status">
                {{ order.status }}
                <br><br>
                <button id="deliveryStatus" v-if="order.status === 'Pending Delivery'" @click="markOrderDelivered(order)">Mark Delivered</button>
              </div>
            </td>
            <td colspan="4">
              <div class="product-images">
                <order-item v-for="product in order.products" :key="product.id" :productProp="product" />
              </div>
            </td>
          </tr>
          <tr v-if="orders.length === 0">
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center" colspan="5">No orders found.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
  name: "OrdersList",
  components: {
    'order-item': OrderItem
  },
  data() {
    return {
      orders: []
    };
  },
  mounted() {
    // Make a GET request to fetch the user's orders
    axios
      .get("http://localhost:3000/orders", {
        params: {
          userID: JSON.parse(sessionStorage.getItem("loggedInUser")).userID // provide the userID of the logged-in user
        }
      })
      .then(response => {
        this.orders = response.data;
      })
      .catch(error => {
        console.error("Error fetching user orders", error);
      });
  },
  methods: {
    markOrderDelivered(order) {
      if (order.status === "Pending Delivery") {
        const newStatus = "Delivered";
        axios
          .put(`http://localhost:3000/orders/${order.orderID}`, {
            status: newStatus
          })
          .then(response => {
            order.status = newStatus;
            console.log("Order marked as delivered successfully.");
          })
          .catch(error => {
            console.error("Error marking order as delivered", error);
          });
      }
    }
  }
};



const WishList = {
  template: `
  

  
<div class="home-container">
<!-- Tableau 1 - Wish List -->
  <div>
    <h1 class="text-center">Wish List</h1>

    <div v-if="liked.length === 0">
      <p>Your wish list is empty.</p>
    </div>

    <div v-else class="card-cart-container">
      <div class="card-container">
        <div v-for="product in liked" class="card">

          <div class="img-container">
            <img :src="product.img" />
          </div>

          <div class="card-text">
            <h3>{{ product.name }}</h3>
            <p style="background: #2eb7eb;
            font-weight: bold;
            padding: 4px 6px;
            color: white;
            border-radius: 4px;">{{ product.price }}€</p>
          </div>

          <div class="card-icons">
            <div class="like-container">
              <input
                type="checkbox"
                :value="product"
                name="checkbox"
                v-bind:id="product.id"
                v-model="liked"
                @click="setLikeCookie()"
              />
              <label v-bind:for="product.id">
                <i class="fas fa-heart"></i>
              </label>
            </div>

            <div class="add-to-cart">
              <button v-on:click="addToCart(product)" :disabled="!isProductInStock(product)">
                <i class="fas fa-shopping-cart"></i>
              </button>
              <span v-if="!isProductInStock(product)" class="out-of-stock">Out of Stock</span>
              <span v-else class="stock">Available: {{ product.stock }}</span>
            </div>
          </div>
        </div>
    </div>
  </div>

  <!-- Most Sold Item -->
    <div class="section-container">
      <div v-if="mostSoldItem" class="most-sold-item card-cart-container">
        <h2>Most Sold Item</h2>
        <div class="card-container">
          <div class="card">
            <div class="img-container">
              <img :src="mostSoldItem.img" />
            </div>
            <div class="card-text">
              <h3>{{ mostSoldItem.name }}</h3>
              <p style="background: #2eb7eb;
                font-weight: bold;
                padding: 4px 6px;
                color: white;
                border-radius: 4px;">{{ mostSoldItem.price }}€</p>
            </div>
            <p>Copies Sold: {{ mostSoldItem.quantity }}</p>
            <div class="card-icons">
              <div class="like-container">
                <input
                  type="checkbox"
                  :value="mostSoldItem"
                  name="checkbox"
                  v-bind:id="mostSoldItem.id"
                  v-model="liked"
                  @click="setLikeCookie()"
                />
                <label v-bind:for="mostSoldItem.id">
                  <i class="fas fa-heart"></i>
                </label>
              </div>
              <div class="add-to-cart">
                <button v-on:click="addToCart(mostSoldItem)" :disabled="!isProductInStock(mostSoldItem)">
                  <i class="fas fa-shopping-cart"></i>
                </button>
                <span v-if="!isProductInStock(mostSoldItem)" class="out-of-stock">Out of Stock</span>
                <span v-else class="stock">Available: {{ mostSoldItem.stock }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  
  

    <!-- Best Customer -->
    <h1>Best Customer</h1>
    <div class ="best-customer-container">
      <div v-if="bestCustomer">
        <p>Customer ID: {{ bestCustomer.userID }}</p>
        <p>Firstname: {{ bestCustomer.firstName }}</p>
        <p>Lastname: {{ bestCustomer.lastName }}</p>
        <p>Number of Products Bought: {{ this.maxSoldProducts }}</p>
      </div>

      <div v-else>
        <p>Loading...</p>
      </div>
    </div>

      <!-- cart display -->
      <transition name="cart-anim">
        <div v-if="cart.length > 0" class="shopping-cart" id="shopping-cart">
          <h2>Cart</h2>

          <transition-group name="item-anim" tag="div" class="item-group">
            <div v-for="product, id in cart" class="item" v-bind:key="product.id">

              <div class="img-container">
                <img v-bind:src='product.img' />
              </div>

              <div class="item-description">
                <h4>{{ product.name }}</h4>
                <p>{{ product.price }}€</p>
              </div>

              <div class="item-quantity">
                <h6>quantité : {{ product.quantity }}</h6>

                <div class="cart-icons">
                  <button v-on:click="cartPlusOne(product)">
                    <i class="fa fa-plus"></i>
                  </button>
                  <button v-on:click="cartMinusOne(product, id)">
                    <i class="fa fa-minus"></i>
                  </button>
                  <button @click="cartRemoveItem(id)">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </transition-group>

          <div class="grand-total">
            <div class="total">
              <h2>Total</h2>
              <h2>{{ cartTotalAmount }} €</h2>
            </div>
            <h6>Total articles : {{ itemTotalAmount }}</h6>
          </div>
          <div class="expedited-delivery">
              <label for="expedited-delivery-checkbox">Expedited Delivery</label>
              <input type="checkbox" id="expedited-delivery-checkbox" v-model="expeditedDelivery" />
            </div>
          <div class="shipping-address">
            <label for="shipping-address-checkbox">Provide a different shipping address</label>
            <input type="checkbox" id="shipping-address-checkbox" v-model="useDifferentShippingAddress" />
            <div v-if="useDifferentShippingAddress" class="input-container">
              <label for="shipping-address-input">Shipping Address:</label>
              <input type="text" id="shipping-address-input" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm adress-input" v-model="shippingAddress" />
            </div>
          </div>
          <div class="order-button">
            <button @click="createOrder">Commander</button>
          </div>
        </div>
      </transition>
    </div>
</div>



  `,
  name: "WishList",
  data() {
    return {
      liked: [],
      cart: [],
      useDifferentShippingAddress: false,
      shippingAddress: '',
      expeditedDelivery: false,
      orders: [],
      products: [],
      bestItem: {},
      users: [],
      maxSoldProducts: ''
    };
  },
  created() {
    this.liked = this.$cookies.get("like") ? this.$cookies.get("like") : [];
  },
  computed: {
    bestCustomer() {
      const customerStats = this.calculateCustomerStats();
      const bestCustomerID = this.findBestCustomerID(customerStats);

      // Find the customer with the matching ID
      const bestCustomer = this.users.find(
        (user) => user.userID === parseInt(bestCustomerID)
      );

      // Return the best customer information
      return bestCustomer;
    },
    mostSoldItem() {
      const mostSoldItem = this.findMostSoldItem();
      const { id, quantity } = mostSoldItem;

      // Find the product with the matching ID
      this.bestItem = this.products.find((prod) => prod.id === parseInt(id));
      
      // Return the product information along with the quantity sold
      return { ...this.bestItem, quantity };
    },
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].quantity * this.cart[item].price;
      }
      return total;
    },
    itemTotalAmount() {
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal = itemTotal + this.cart[item].quantity;
      }
      return itemTotal;
    },
    getLikeCookie() {
      const likedCookie = this.$cookies.get("like");
      if (likedCookie) {
        return likedCookie;
      }
    },
  },
  methods: {
    calculateCustomerStats() {
      const customerStats = {};

      // Iterate over the orders and calculate the quantity of products bought by each customer
      for (const order of this.orders) {
        const { userID, products } = order;

        if (!customerStats[userID]) {
          customerStats[userID] = 0;
        }

        for (const product of products) {
          customerStats[userID] += product.quantity;
        }
      }
      return customerStats;
    },

    findBestCustomerID(customerStats) {
      let bestCustomerID = null;
      let maxQuantity = 0;

      // Find the customer with the highest quantity of products
      for (const userID in customerStats) {
        const quantity = customerStats[userID];

        if (quantity > maxQuantity) {
          maxQuantity = quantity;
          bestCustomerID = userID;
        }
      }
      this.maxSoldProducts = maxQuantity;

      return bestCustomerID;
    },
    fetchOrders() {
      fetch("../backend/bd/orders.json")
        .then((response) => response.json())
        .then((data) => {
          this.orders = data;
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        });
    },
    fetchUsers(){
      fetch("../backend/bd/users.json")
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    findMostSoldItem() {
      const itemQuantities = {};

      // Iterate through each order
      this.orders.forEach((order) => {
        // Iterate through each product in the order
        order.products.forEach((product) => {
          const { id, quantity } = product;

          // Update the quantity for the product ID
          if (itemQuantities.hasOwnProperty(id)) {
            itemQuantities[id] += quantity;
          } else {
            itemQuantities[id] = quantity;
          }
        });
      });

      // Find the ID of the most sold item
      let mostSoldItemId = null;
      let mostSoldQuantity = 0;

      for (const id in itemQuantities) {
        if (itemQuantities[id] > mostSoldQuantity) {
          mostSoldItemId = id;
          mostSoldQuantity = itemQuantities[id];
        }
      }

      return { id: mostSoldItemId, quantity: mostSoldQuantity };
    },
    fetchProducts() {
      fetch("../backend/bd/products.json")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    isProductInStock(product) {
      return product.stock > 0;
    },
    setLikeCookie() {
      document.addEventListener("input", () => {
        setTimeout(() => {
          this.$cookies.set("like", JSON.stringify(this.liked));
        }, 300);
      });
    },
    addToCart(product) {
      if (product.stock > 0) {
        const existingCartItem = this.cart.find(
          (item) => item.id === product.id
        );
        if (existingCartItem) {
          if (existingCartItem.quantity < product.stock) {
            existingCartItem.quantity++;
          } else {
            // Alert the user that the maximum stock has been reached
            alert(
              "You have reached the maximum stock quantity for this product."
            );
          }
        } else {
          this.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1,
          });
        }
      }
    },
    cartPlusOne(product) {
      if (
        product.quantity >=
        this.products.find((item) => item.id === product.id).stock
      ) {
        alert("You have reached the maximum stock quantity for this product.");
      } else {
        product.quantity = product.quantity + 1;
      }
    },
    cartMinusOne(product, id) {
      if (product.quantity == 1) {
        this.cartRemoveItem(id);
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    cartRemoveItem(id) {
      this.$delete(this.cart, id);
    },
    createOrder() {
      try {
        const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
        const deliveryTime = this.expeditedDelivery ? 2 : 5;
        const deliveryDate = new Date(Date.now() + deliveryTime * 24 * 60 * 60 * 1000);
        const formattedDeliveryDate = deliveryDate.toISOString().slice(0, 10);
        const order = {
          userID: loggedInUser.userID,
          products: this.cart,
          deliveryDate: formattedDeliveryDate,
          deliveryAddress: this.useDifferentShippingAddress
            ? this.shippingAddress
            : loggedInUser.billingAddress,
          totalPrice: this.cartTotalAmount, // Update totalPrice with cartTotalAmount
        };
    
        // Make a POST request to save the order into the database
        axios
          .post("http://localhost:3000/orders", order)
          .then((response) => {
            // Clear the cart after successfully creating the order
            this.cart = [];
            alert("Order created successfully!");
          })
          .catch((error) => {
            console.error("Error creating order:", error);
            alert("An error occurred while creating the order.");
          });
      } catch {
        alert("You must be logged in to create an order.");
      }
    },
  },
  mounted() {
    this.fetchProducts();
    this.fetchOrders();
    this.fetchUsers();
  }
};



const adminPage = {
  template: `
  <div class="flex flex-col md:flex-row">
  <div class="md:w-1/2 flex-1 mt-16">
    <!-- Partie Produit -->
    <div class="flex items-center justify-center mb-4">
      <h2 class="text-2xl font-bold mr-2">Products</h2>
      <router-link to="/add-product">
        <button class="h-8 bg-blue-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="deleteProduct(product.id)">ADD</button>
      </router-link>
    </div>
    <div class="overflow-x-auto mb-8">
      <table class="w-full ">
        <thead>
          <tr>
            <th class="border border-black px-4 py-2 text-center bg-blue-100">ID Product</th>
            <th class="border border-black px-4 py-2 text-center bg-blue-100">Name</th>
            <th class="border border-black px-4 py-2 text-center bg-blue-100">Price</th>
            <th class="border border-black px-4 py-2 text-center bg-blue-100">Stock</th>
            <th class="border border-black px-4 py-2 text-center bg-blue-100">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="border-b border-l px-4 py-2 text-center">{{ product.id }}</td>
            <td class="border-b px-4 py-2 text-center"><input type="text" v-model="product.name" /></td>
            <td class="border-b px-4 py-2 text-center"><input type="number" v-model="product.price" style="width: 50px" /></td>
            <td class="border-b px-4 py-2 text-center"><input type="number" v-model="product.stock" style="width: 50px" /></td>
            <td class="border-b px-4 py-2 text-center">
              <button :class="{
                'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded': true,
                'bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded': product.stock < 3
              }" @click="updateProduct(product)">Update</button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="deleteProduct(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  &emsp;
  <div class="md:w-1/2 flex-1 mt-16">
    <!-- Partie Order -->
    <h2 class="text-2xl font-bold mb-4 text-center">Orders</h2>
    <div class="overflow-x-auto mb-8">
      <table class="w-full">
        <thead>
          <tr>
            <th class="border border-black px-4 py-2 text-center bg-blue-100">ID Order</th>
            <th class="border border-black px-4 py-2 text-center bg-blue-100">ID User</th>
            <th class="border border-black px-4 py-2 text-center bg-blue-100">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.orderID">
            <td class="border-l border-b px-4 py-2 text-center " style="width: 100px "> {{ order.orderID }}</td>
            <td class="border-b px-4 py-2 text-center " style="width: 100px">{{ order.userID }}</td>
            <td class="border-r border-b px-4 py-2 text-center" style="width: 100px">{{ order.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  `,
  name: "adminPage",
  data() {
    return {
      products: [],
      orders: [],
    };
  },
  methods: {
    fetchProducts() {
      fetch("../backend/bd/products.json")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    deleteProduct(productID) {
      axios
        .delete(`http://localhost:3000/admin/products/${productID}`)
        .then(response => {
          console.log(response.data.message);
          // Refresh the products list after deleting the product
          this.fetchProducts();
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    },
    fetchOrders() {
      fetch("../backend/bd/orders.json")
        .then((response) => response.json())
        .then((data) => {
          this.orders = data;
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        });
    },
    updateProduct(product) {
      axios
        .put(`http://localhost:3000/admin/products/${product.id}`, {
          name: product.name,
          price: parseInt(product.price),
          stock: parseInt(product.stock)
        })
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error('Error updating product:', error);
        });
    }
  },
  mounted() {
    this.fetchProducts();
    this.fetchOrders();
  },
  beforeRouteEnter(to, from, next) {
    // Check if the user is an admin 
    const userType = JSON.parse(sessionStorage.getItem("loggedInUser")).type;

    if (userType === 'admin') {
      next();
    } else {
      next({ name: 'Home' }); // Redirect to the home page
    }
  },
};

const addProduct = {
  template: `
  

    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-white-800">
      <div class="flex items-center justify-center"
        <h1 class="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center">Add Product</h2>
      </div>
      <form @submit.prevent="saveProduct" >
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="name">Name</label>
            <input id="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="product.name" required>
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="price">Price</label>
            <input id="price" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="product.price" required>
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="stock">Stock</label>
            <input id="stock" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="product.stock" required>
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="img">Image</label>
            <input id="img" type="file" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" @change="handleImageUpload" required>
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type="submit">Save Product</button>
        </div>
      </form>
    </section>

  `,
  name: "addProduct",
  data() {
    return {
      product: {
        name: "",
        price: 0,
        stock: 0,
        img: null,
      },
    };
  },
  methods: {
    saveProduct() {
      // Prepare the form data to be sent
      const formData = new FormData();
      formData.append("name", this.product.name);
      formData.append("price", this.product.price);
      formData.append("stock", this.product.stock);
      formData.append("img", this.product.img);

      // Make a POST request to save the product
      axios
        .post("http://localhost:3000/addProduct", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data.message);
          // Reset the form fields after saving the product
          this.product.name = "";
          this.product.price = 0;
          this.product.stock = 0;
          this.product.img = null;
        })
        .catch((error) => {
          console.error("Error saving product:", error);
        });
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.product.img = file;
    },
  },
  beforeRouteEnter(to, from, next) {
    // Check if the user is an admin 
    const userType = JSON.parse(sessionStorage.getItem("loggedInUser")).type;

    if (userType === 'admin') {
      next();
    } else {
      next({ name: 'Home' }); // Redirect to the home page
    }
  },
};




// router
const router = new VueRouter({
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/user-settings", component: UserSettings, name: "UserSettings" },
    { path: "/wish-list", component: WishList, name: "WishList" },
    { path: "/orders-list", component: OrdersList, name: "OrdersList" },
    { path: "/login", component: Login, name: "Login" }, 
    { path: "/admin-page", component: adminPage, name: "adminPage" },
    { path: "/add-product", component: addProduct, name: "addProduct" },
  ],
});

const vue = new Vue({
  router,
}).$mount("#app");
