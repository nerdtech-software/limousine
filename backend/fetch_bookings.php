<?php
// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "LuxuryLimousine";

// Create connection using mysqli
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set the content type to JSON
header('Content-Type: application/json');

// Query to fetch bookings
$query = "SELECT * FROM bookingform"; // Change to your table name
$result = $conn->query($query);

// Check if the query was successful
if ($result->num_rows > 0) {
    // Create an array to store the data
    $bookings = [];
    
    // Fetch all rows from the result
    while ($row = $result->fetch_assoc()) {
        $bookings[] = $row;
    }

    // Return the bookings as a JSON response
    echo json_encode($bookings);
} else {
    // Return an empty array if no results
    echo json_encode([]);
}

// Close the connection
$conn->close();
?>
