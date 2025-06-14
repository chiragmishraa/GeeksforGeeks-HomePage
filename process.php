<?php
include_once 'database.php';
if(isset($_POST['save']))
{	  $User_id = $_POST['user_id'];
	 $first_name = $_POST['first_name'];
	 $last_name = $_POST['last_name'];
	 $email = $_POST['email'];
	 $sql = "INSERT INTO employee (userid,first_name,last_name,email)
	 VALUES ('$User_id','$first_name','$last_name','$email')";
	 if (mysqli_query($conn, $sql)) {
		echo "New record created successfully !";
	 } else {
		echo "Error: " . $sql . "" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>