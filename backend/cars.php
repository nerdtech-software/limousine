<?php
// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "LuxuryLimousine";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// Handle the POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['car_img'])) {
        $error = $_FILES['car_img']['error'];

        // Handle upload errors
        if ($error !== UPLOAD_ERR_OK) {
            $errorMessages = [
                UPLOAD_ERR_INI_SIZE => "The uploaded file exceeds the maximum size allowed by the server.",
                UPLOAD_ERR_FORM_SIZE => "The uploaded file exceeds the maximum size allowed by the form.",
                UPLOAD_ERR_PARTIAL => "The file was only partially uploaded.",
                UPLOAD_ERR_NO_FILE => "No file was uploaded.",
                UPLOAD_ERR_NO_TMP_DIR => "Missing a temporary folder.",
                UPLOAD_ERR_CANT_WRITE => "Failed to write file to disk.",
                UPLOAD_ERR_EXTENSION => "File upload stopped by a PHP extension."
            ];
            $message = $errorMessages[$error] ?? "Unknown file upload error.";
            echo json_encode(["status" => "error", "message" => $message]);
            exit;
        }

        $target_dir = __DIR__ . "/../uploads/";

        // Check if directory exists, if not, create it
        if (!is_dir($target_dir)) {
            if (!mkdir($target_dir, 0755, true)) {
                echo json_encode(["status" => "error", "message" => "Failed to create upload directory."]);
                exit;
            }
        }

        // Check if directory is writable
        if (!is_writable($target_dir)) {
            echo json_encode(["status" => "error", "message" => "Upload directory is not writable."]);
            exit;
        }

        $target_file = $target_dir . basename($_FILES["car_img"]["name"]);
        $validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        $maxSize = 5 * 1024 * 1024; // 5MB

        // Validate file size
        if ($_FILES['car_img']['size'] > $maxSize) {
            echo json_encode(["status" => "error", "message" => "File is too large. Maximum size is 5MB."]);
            exit;
        }

        // Validate file type
        if (!in_array($_FILES['car_img']['type'], $validTypes)) {
            echo json_encode(["status" => "error", "message" => "Invalid file type. Only JPG, PNG, or GIF are allowed."]);
            exit;
        }

        // Move the uploaded file
        if (!move_uploaded_file($_FILES["car_img"]["tmp_name"], $target_file)) {
            echo json_encode(["status" => "error", "message" => "Error moving uploaded file."]);
            exit;
        }

        $car_img = "/uploads/" . basename($_FILES["car_img"]["name"]); // Save relative path
    } else {
        echo json_encode(["status" => "error", "message" => "No file uploaded."]);
        exit;
    }

    // Sanitize and validate form data
    $content = isset($_POST['content']) ? $conn->real_escape_string($_POST['content']) : null;

    if (!$content) {
        echo json_encode(["status" => "error", "message" => "Content is required."]);
        exit;
    }

    // Use prepared statements for the database query
    $stmt = $conn->prepare("INSERT INTO cars (car_img, content) VALUES (?, ?)");
    $stmt->bind_param("ss", $car_img, $content);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Car added successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error: " . $stmt->error]);
    }

    // Close the prepared statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
