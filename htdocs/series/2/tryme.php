<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// $arr=array();
// $arr['id']='1';
// $arr['name']='caleb';
// $arr['age']='23';

$cars = array
  (
  (object)array("name"=>"Volvo",22,18),
  (object)array("name"=>"BMW",15,13),
  (object)array("name"=>"Saab",5,2),
  (object)array("name"=>"Land Rover",17,15)
  );

echo json_encode($cars);
?>