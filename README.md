
# E-Commerce Platform

## Overview

This is a simple e-commerce platform that allows users to browse products, add items to a shopping cart, and place orders. It is built using HTML, CSS, and JavaScript, with data fetched from the Fake Store API. The platform features product display, search functionality, shopping cart management, and an order placement popup.

## Features

- **Product Listing**: Products are fetched from [Fake Store API](https://fakestoreapi.com/products) and displayed with images, titles, prices, and ratings.
- **Search Functionality**: Users can search for products using the search bar at the top of the page.
- **Shopping Cart**: Users can add, remove, and modify the quantity of products in the cart.
- **Price Details**: The cart includes a price summary showing total MRP, coupon discounts (if applicable), platform fees, and shipping charges.
- **Order Placement**: Users can place an order, which triggers a confirmation popup.
  
## Technologies Used

- **HTML5**: Structuring the web page.
- **CSS3**: Styling the components and layout.
- **JavaScript**: Managing the cart, fetching API data, and handling interactive elements.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Navneeth18/E-commerce-Platform.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ecommerce-platform
   ```
3. Open `index.html` in your browser to view the platform.

## Project Structure

- **index.html**: The main HTML file that contains the structure of the e-commerce platform. It links to the external styles and JavaScript files.
- **styles.css**: The CSS file responsible for the design and layout, including product cards, cart section, and popup styles.
- **cart-script.js**: The JavaScript file handling dynamic elements such as fetching product data, cart management, and order placement functionality.

## Usage

- Search for products using the search bar.
- Add products to the cart by clicking "Add to Cart."
- Increase or decrease the quantity of items or remove them from the cart.
- Review the total amount, including discounts, fees, and shipping charges.
- Click "Place Order" to finalize the purchase, and a confirmation popup will appear.

## License

This project is open-source and available under the MIT License.
