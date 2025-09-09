<?php
//  1. DATABASE CONNECTION 
// Define PostgreSQL connection parameters
$host = 'localhost';
$port = '5432';
$dbname = 'food_ordering';
$user = 'postgres'; // Default PostgreSQL username
$password = 'Jeruto'; // Replace with your PostgreSQL password

// Create connection string
$conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password";

// Establish connection to PostgreSQL
$conn = pg_connect($conn_string);

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . pg_last_error()); // If connection fails, stop and print error
}

// 2. CAPTURE FORM DATA 

// Get current date and time
$today = date('Y-m-d H:i:s');

// Retrieve user-submitted form data using $_POST superglobal
$fullName = $_POST['cname'];      // Customer's name
$phone = $_POST['phone'];         // Phone number
$email = $_POST['email'];         // Email address
$prefs = $_POST['prefs'];         // Food preferences (if any)
$mode = $_POST['mode'];           // Mode of payment
$town = $_POST['town'];           // Town/location of the customer
$foodItemsArray = $_POST['food']; // Array of selected food items (e.g. Chapo, Ugali) 

// @TODO 2/; SERVER-SIDE NAME VALIDATION 

// Check if full name contains only letters, spaces, apostrophes, and hyphens
if (!preg_match("/^[a-zA-Z\s'-]+$/", $fullName)) {
    
    die("Invalid name format. Use only letters, spaces, apostrophes, and hyphens.");
//if name is invalid, stops immediately and shows the error message 
//die function usally stops script execution immediately
}
//preg_match - a PHP function that checks if a string matches a specific pattern
 //using regexx pattern ^ - Start of the string [allowed charachters] + one or more of the above charachters $-end of string
 //makes sure it only contains letters A-Z, a-z, spaces, apostrophes and hyphens


//  4. COST CALCULATION 

// Define price list for each food item
$prices = [
    'Chapo' => 20,
    'Ugali' => 15,
    'Rice' => 25,
    'Beans' => 30,
    'Ndengu' => 35,
    'Beef' => 150
];

// Initialize total cost and empty strings for storing ordered items and quantities
$total_cost = 0;
$foodItemsString = ''; // Will store food items as comma-separated string e.g. "Chapo, Ugali"
$foodItemsQty = '';    // Will store quantities as string e.g. "Chapo:2, Ugali:1"

foreach ($foodItemsArray as $foodItem) {
    $qty = (int)$_POST[$foodItem . '-qty']; // Get quantity from forM LIKE 'chapo-qty'
    $cost = $prices[$foodItem] * $qty;      // Calculate item cost
    $total_cost += $cost;                   // Add to total cost

    $foodItemsString .= $foodItem . ', ';                  // Add item to list
    $foodItemsQty .= $foodItem . ':' . $qty . ', ';        // Add item and quantity to list
}

// Remove trailing comma and space from food items and quantities
$foodItemsString = rtrim($foodItemsString, ', ');
$foodItemsQty = rtrim($foodItemsQty, ', ');

//@TODO3 - Write an SQL Query to insert the data into food_orderings db

// Create SQL INSERT statement using placeholders ($1 to $9) for prepared statement
$query = "INSERT INTO orders 
    (name, phone, email, mode_of_payment, town, food_items, food_items_quantity, total_cost, created_at) 
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

// Store actual values in an array in the same order as placeholders
$params = [
    $fullName,
    $phone,
    $email,
    $mode,
    $town,
    $foodItemsString,
    $foodItemsQty,
    $total_cost,
    $today
];

// Execute query with parameters (safe from SQL injection)
$result = pg_query_params($conn, $query, $params);

// 6. RESULT MESSAGE TO USER 

// Check if the query was successful
if ($result) {
    echo "<h3 style='color: green;'> Order placed successfully!</h3>";
    echo "<p>Thank you, <strong>$fullName</strong>. Your order has been received.</p>";
    echo "<p><strong>Total: KSh " . number_format($total_cost, 2) . "</strong></p>";
} else {
    // If there was an error inserting the data, show error message
    echo "<h3 style='color: red;'>❌ Error placing order: " . pg_last_error($conn) . "</h3>";
}

// Close the PostgreSQL connection
pg_close($conn);
?>
