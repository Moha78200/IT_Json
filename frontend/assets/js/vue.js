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
        <div>
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

        <div>
        
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
                    <input v-model="phoneNumber" type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Phone Number" required />
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
          console.log(response.data.message);
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
          // console.log('Users fetched:', this.users);
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
    getLikeCookie() {
      let cookieValue = JSON.parse(this.$cookies.get("like"));
      return cookieValue == null
        ? (this.liked = [])
        : (this.liked = cookieValue);
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
    this.getLikeCookie;
  },
};

const UserSettings = {
  template: `
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="user-settings">
      <h1>User Settings</h1>
      <div v-if="isLoggedIn">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="user.firstName">
        
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="user.lastName">
        
        <label for="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" v-model="user.phoneNumber">
        
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email">
        
        <label for="billingAddress">Billing Address:</label>
        <input type="text" id="billingAddress" v-model="user.billingAddress">
        
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
        <button @click="saveChanges">Save Changes</button>
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
  methods: {
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
    <div class="order-item">
      <img :src="product.image" :alt="product.name" />
      <div>
        <h3>{{ product.name }}</h3>
        <p>Quantity: {{ product.quantity }}</p>
      </div>
      

      <br><br><br><br>
      <div class="order-item">
      <!-- cards display -->
        <div class="card-cart-container">
          <div class="card-container">
            <div class="card">

              <div class="img-container">
                <img :src='product.image' />
              </div>

              <div class="card-text">
                <h3>{{ product.name }}</h3>
              </div>

              <div class="card-icons">

                <div class="add-to-cart">
                  <span class="stock">Quantity: {{ product.quantity }}</span>
                </div>
              </div>
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
    axios.get("http://localhost:3000/products", {
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
    <div>
      <h1>List of orders</h1>
      <div v-if="orders.length > 0">
        <div v-for="order in orders" :key="order.orderID">
          <h2>Order ID: {{ order.orderID }}</h2>
          <p>Delivery Date: {{ order.deliveryDate }}</p>
          <p>Delivery Address: {{ order.deliveryAddress }}</p>
          <h3>Products:</h3>
          <order-item v-for="product in order.products" :key="product.id" :productProp="product" />
        </div>
      </div>
      <div v-else>
        <p>No orders found.</p>
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
    axios.get("http://localhost:3000/orders", {
      params: {
        userID: JSON.parse(sessionStorage.getItem("loggedInUser")).userID// provide the userID of the logged-in user
      }
    })
    .then(response => {
      this.orders = response.data;
    })
    .catch(error => {
      console.error("Error fetching user orders", error);
    });
  }
};



const WishList = {
  template: "<h1>Wish List</h1>",
  name: "WishList",
};


// router
const router = new VueRouter({
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/user-settings", component: UserSettings, name: "UserSettings" },
    { path: "/wish-list", component: WishList, name: "WishList" },
    { path: "/orders-list", component: OrdersList, name: "OrdersList" },
    { path: "/login", component: Login, name: "Login" }, // Add this line
  ],
});

const vue = new Vue({
  router,
}).$mount("#app");
