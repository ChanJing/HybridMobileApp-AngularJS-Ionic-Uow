<?php
header('Acess-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers: *');
$arr=array();
$arr['id']=$_GET['id'];
$arr['name']='nihao';
$arr['age']=$_GET['age'];

echo json_encode($arr)
?>