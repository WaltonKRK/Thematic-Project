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

// Handle register form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Query to check if email already exists in the database
    $check_email_query = "SELECT * FROM users WHERE email = '$email'";
    $check_result = $conn->query($check_email_query);

    if ($check_result->num_rows > 0) {
        // Email already exists, show error message
        echo "Email already registered!";
    } else {
        // Insert new user into the database
        $insert_query = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
        
        if ($conn->query($insert_query) === TRUE) {
            // Registration successful, redirect to login page or wherever you want
            header("Location: login.php");
            exit();
        } else {
            // Error inserting new user
            echo "Error: " . $insert_query . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
