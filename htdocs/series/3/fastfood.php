<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$imgDirectory = "file:///D:/Program Files (x86)/xampp/htdocs/images/";

$kfc=array(
	"name"=>"KFC",
	"type"=>"Fast Food",
	"rating"=>4,
	"sale"=>12,
	"img"=>$imgDirectory . "KFC.png"
);

$burgerking=array(
	"name"=>"BurgerKing",
	"type"=>"Fast Food",
	"rating"=>4.5,
	"sale"=>32,
	"img"=>$imgDirectory . "BurgerKing.png"
);

$subway=array(
	"name"=>"Subway",
	"type"=>"Fast Food",
	"rating"=>4,
	"sale"=>23,
	"img"=>$imgDirectory . "Subway.png"
);

$dominos=array(
	"name"=>"Domino's Pizza",
	"type"=>"Fast Food",
	"rating"=>"4.2",
	"sale"=>"21",
	"img"=>$imgDirectory . "Dominos.png"
);

$pizzahut=array(
	"name"=>"Pizza Hut",
	"type"=>"Fast Food",
	"rating"=>"4.0",
	"sale"=>"18",
	"img"=>$imgDirectory . "PizzaHut.png"
);

$mcdonalds=array(
	"name"=>"Mcdonald's",
	"type"=>"Fast Food",
	"rating"=>"4.5",
	"sale"=>"18",
	"img"=>$imgDirectory . "Mcdonald's.png"
);

$burgerfuel=array(
	"name"=>"BurgerFuel",
	"type"=>"Fast Food",
	"rating"=>"4.7",
	"sale"=>"40",
	"img"=>$imgDirectory . "BurgerFuel.png"
);

$fastfood=array(
	(object) $burgerking,
	(object) $dominos,
	(object) $mcdonalds,
	(object) $pizzahut,
	(object) $kfc,
	(object) $burgerfuel,
	(object) $subway
	// (object) $,
);

echo json_encode($fastfood);

?>