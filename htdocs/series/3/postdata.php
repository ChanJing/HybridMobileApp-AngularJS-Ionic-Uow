<?php
header('Access-Control-Allow-Origin: *');  


    if(isset($_POST["id"])){
    	print_r($_POST);
}

// print_r($_POST);

// $request = json_decode($_POST);
// $email = $request->firstName;
// echo $email;

// if(isset($_POST['firstName'])){
// 	print_r(json_decode($_POST));
// }
?>