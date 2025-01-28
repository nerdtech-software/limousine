<?php
include 'config.php';
ini_set('display_errors', 1);
error_reporting(E_ALL);

// CORS headers to allow cross-origin requests and preflight
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// If the request is a preflight request (OPTIONS), handle it and exit
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get JSON data from the body of the request
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if the required fields are provided
    if (
        isset($data['service_type']) && isset($data['name']) && isset($data['phone_no']) &&
        isset($data['pickup_date']) && isset($data['pickup_time']) && isset($data['pickup_location']) &&
        isset($data['drop_location']) && isset($data['quantity']) && isset($data['luggage']) // Added luggage field
    ) {
        // Sanitize input data to prevent XSS
        $service_type = htmlspecialchars($data['service_type']);
        $name = htmlspecialchars($data['name']);
        $phone_no = htmlspecialchars($data['phone_no']);
        $pickup_date = htmlspecialchars($data['pickup_date']);
        $pickup_time = htmlspecialchars($data['pickup_time']);
        $pickup_location = htmlspecialchars($data['pickup_location']);
        $drop_location = htmlspecialchars($data['drop_location']);
        $quantity = intval($data['quantity']); // Ensure quantity is an integer
        $luggage = htmlspecialchars($data['luggage']); // Sanitize luggage input

        // Fix: Append ":00" to pickup_time to make it a valid TIME format
        if (strpos($pickup_time, ':') !== false && strlen($pickup_time) === 5) {
            $pickup_time .= ":00";  // If the time is like '15:55', make it '15:55:00'
        }

        // Prepare the SQL statement to insert data into the database
        $stmt = $pdo->prepare("INSERT INTO bookingform (service_type, name, phone_no, pickup_date, pickup_time, pickup_location, drop_location, quantity, luggage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

        // Execute the statement and check if the insert was successful
        if ($stmt->execute([$service_type, $name, $phone_no, $pickup_date, $pickup_time, $pickup_location, $drop_location, $quantity, $luggage])) {
            // Return the success response along with the data received
            echo json_encode([
                "success" => true, 
                "message" => "Booking successful",
                "data" => [
                    "service_type" => $service_type,
                    "name" => $name,
                    "phone_no" => $phone_no,
                    "pickup_date" => $pickup_date,
                    "pickup_time" => $pickup_time,
                    "pickup_location" => $pickup_location,
                    "drop_location" => $drop_location,
                    "quantity" => $quantity,
                    "luggage" => $luggage
                ]
            ]);
        } else {
            // Log failed insertion attempt
            echo json_encode(["success" => false, "message" => "Failed to book. Please try again."]);
        }
    } else {
        // If any required field is missing, send an error response
        echo json_encode(["success" => false, "message" => "Missing required fields"]);
    }
} else {
    // If the request method is not POST, return an error
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
