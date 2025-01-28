<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "LuxuryLimousine";
// CORS headers to allow cross-origin requests and preflight
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// Fetch the latest poster
$result = $conn->query("SELECT poster_img, poster_alt FROM poster ORDER BY id DESC LIMIT 1");

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode(["status" => "success", "poster_img" => $row['poster_img'], "poster_alt" => $row['poster_alt']]);
} else {
    echo json_encode(["status" => "error", "message" => "No poster found."]);
}

$conn->close();
?>
