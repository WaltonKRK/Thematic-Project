<?php
// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "craftycards";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Query to check if user exists in the database
    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // User found, redirect to dashboard or wherever you want
        header("Location: dashboard.php");
        exit();
    } else {
        // User not found or credentials are incorrect
        echo "Invalid email or password";
    }
}

$conn->close();
?>
