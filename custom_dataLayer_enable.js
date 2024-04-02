
//View_item//

<script>
  var name = document.querySelector("div.summary.entry-summary > h1").innerText;
  var price = parseFloat(document.querySelector("div.summary.entry-summary > p > span > bdi").innerText.replace(/[^\d.]/g, ''));

  var quantity = parseFloat(document.querySelector("input[name=quantity]").value);
  var items = {{cJS - single item_array}};

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
  window.dataLayer.push({
    event: "view_item",
    ecommerce: {
      currency: "USD",
      value: price,
      items: items
    }
  });
</script>




//add_to_cart//

<script>
  var name = document.querySelector("div.summary.entry-summary > h1").innerText;
  var price = parseFloat(document.querySelector("div.summary.entry-summary > p > span > bdi").innerText.replace(/[^\d.]/g, ''));

  var quantity = parseFloat(document.querySelector("input[name=quantity]").value);
  var items = {{cJS - single item_array}};

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
  window.dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
      currency: "USD",
      value: price,
      items: items
    }
  });
</script>





//View_cart//

<script>
  
{/* // Select the product rows in the cart */}
var productRows = document.querySelectorAll('.woocommerce-cart-form__cart-item');

{/* // Array to store product objects */}
var products = [];

// Iterate through each product row
productRows.forEach(function (productRow) {
    // Extract product details
    var productName = productRow.querySelector('.product-name a').innerText.trim();
    var productPrice = parseFloat(productRow.querySelector('.product-price .woocommerce-Price-amount').innerText.replace('$', '').trim());
    var productQuantity = parseInt(productRow.querySelector('.product-quantity input').value, 10);

    // Extract product ID from the remove link
    var removeLink = productRow.querySelector('.product-remove a');
    var productId = removeLink.getAttribute('data-product_id');

    // Create a product object
    var product = {
        item_id: productId,
        item_name: productName,
        price: productPrice,
        quantity: productQuantity,
    };

    // Add the product object to the array
    products.push(product);
});

// Log the array of product objects
console.log(products);

// Set the array in localStorage
localStorage.setItem('cartProducts', JSON.stringify(products));

     
 var totalValue = {{cJS - ls - set - total_value}};
     
  window.dataLayer = window.dataLayer || [];
  //window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
  window.dataLayer.push({
    event: "view_cart",
    ecommerce: {
      currency: "USD", // Replace with your desired currency code
      value: totalValue,
      items: products
    }
  });
</script>






//Begin_checkout//

<script>

{/* // Get the array from localStorage */}
var storedProducts = localStorage.getItem('cartProducts');
{/* // Parse the stored data as JSON */}
var products = JSON.parse(storedProducts) || [];
{/* // Log the array of product objects */}
console.log(products);
  
  var totalValue = {{ls - get - total_value}};
  
 
  
  
  {/* // Array to store user form data */}
var usersData = [];

{/* // Get form field values */}
var firstName = document.querySelector('#billing_first_name').value;
var lastName = document.querySelector('#billing_last_name').value;
var country = document.querySelector('#billing_country').value;
var streetAddress = document.querySelector('#billing_address_1').value;
var city = document.querySelector('#billing_city').value;
var postcode = document.querySelector('#billing_postcode').value;
var phone = document.querySelector('#billing_phone').value;
var email = document.querySelector('#billing_email').value;

// Create an object to store the form field values
var formData = {
  first_name: firstName,
  last_name: lastName,
  country: country,
  street_address: streetAddress,
  city: city,
  postcode: postcode,
  phone: phone,
  email: email
};

{/* // Add the form data object to the array */}
usersData.push(formData);

{/* // Convert the array to a JSON string */}
var usersDataJSON = JSON.stringify(usersData);

{/* // Set the JSON string in localStorage */}
localStorage.setItem('usersData', usersDataJSON);

{/* // Log the array of user form data */}
console.log(usersData);

  
  
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "begin_checkout",
    ecommerce: {
      currency: "USD", // Replace with your desired currency code
      value: totalValue,
      items: products
    }
  
  });
</script>





// Purchase

<script>

  {/* // Get the array from localStorage */}
var storedProducts = localStorage.getItem('cartProducts');
{/* // Parse the stored data as JSON */}
var products = JSON.parse(storedProducts) || [];
{/* // Log the array of product objects */}
console.log(products);
       
  var totalValue = {{ls - get - total_value}};
  var transactionId = document.querySelector("div > div > div > ul > li.woocommerce-order-overview__order.order").innerText.replace(/[^\d.]/g, '');
  
  
  {/* // Get the JSON string from localStorage */}
var usersDataJSON = localStorage.getItem('usersData');
{/* // Parse the JSON string to get the array */}
var usersData = JSON.parse(usersDataJSON) || [];
{/* // Log the array of user form data */}
console.log(usersData);



      
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "purchase",
    ecommerce: {
      currency: "USD", // Replace with your desired currency code
      value: totalValue,
      items: products,
      transaction_id: transactionId,
      user: usersData
      
    }
  });

</script>
