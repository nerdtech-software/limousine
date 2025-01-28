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
    // Handle image upload
    if (isset($_FILES['poster'])) {
        $error = $_FILES['poster']['error'];

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
            mkdir($target_dir, 0755, true);
        }

        // Check if directory is writable
        if (!is_writable($target_dir)) {
            echo json_encode(["status" => "error", "message" => "Upload directory is not writable."]);
            exit;
        }

        $target_file = $target_dir . basename($_FILES["poster"]["name"]);
        $validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        $maxSize = 5 * 1024 * 1024; // 5MB

        if ($_FILES['poster']['size'] > $maxSize) {
            echo json_encode(["status" => "error", "message" => "File is too large. Maximum size is 5MB."]);
            exit;
        }

        if (!in_array($_FILES['poster']['type'], $validTypes)) {
            echo json_encode(["status" => "error", "message" => "Invalid file type. Only JPG, PNG, or GIF are allowed."]);
            exit;
        }

        if (!move_uploaded_file($_FILES["poster"]["tmp_name"], $target_file)) {
            echo json_encode(["status" => "error", "message" => "Error moving uploaded file."]);
            exit;
        }

        $poster_img = "/uploads/" . basename($_FILES["poster"]["name"]); // Save relative path
    } else {
        echo json_encode(["status" => "error", "message" => "No file uploaded."]);
        exit;
    }

    // Handle alt text
    if (isset($_POST['alt'])) {
        $poster_alt = $conn->real_escape_string($_POST['alt']);
    } else {
        echo json_encode(["status" => "error", "message" => "Alt text is required."]);
        exit;
    }

    // Use prepared statements for the database query
    $stmt = $conn->prepare("INSERT INTO poster (poster_img, poster_alt) VALUES (?, ?)");
    $stmt->bind_param("ss", $poster_img, $poster_alt);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Home image added successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error: " . $conn->error]);
    }

    // Close the prepared statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
