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
	"img"=>$imgDirectory . "BurgerKing.png",
	"menuList"=>"BurgerKingMenu.php"
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

$homesteadbareatery=array(
	"name"=>"Homestead Bar and Eatery",
	"type"=>"Café",
	"rating"=>"4.0",
	"sale"=>"29",
	"img"=>$imgDirectory . "HomesteadBar&Eatery.png"
);

$babaganush=array(
	"name"=>"Babaganush Turkish Restaurant and Cafe",
	"type"=>"Café",
	"rating"=>"2.9",
	"sale"=>"22",
	"img"=>$imgDirectory . "Babaganush.png"
);

$domaine=array(
	"name"=>"Domaine",
	"type"=>"Café",
	"rating"=>"3.4",
	"sale"=>"24",
	"img"=>$imgDirectory . "Domaine.png"
);

$agenda=array(
	"name"=>"Agenda",
	"type"=>"Café",
	"rating"=>"3.6",
	"sale"=>"13",
	"img"=>$imgDirectory . "Agenda.png"
);

$thehelm=array(
	"name"=>"The Helm Bar & Kitchen",
	"type"=>"Café",
	"rating"=>"4.5",
	"sale"=>"34",
	"img"=>$imgDirectory . "Helm.png"
);

$burgerfuel=array(
	"name"=>"BurgerFuel",
	"type"=>"Fast Food",
	"rating"=>"4.7",
	"sale"=>"40",
	"img"=>$imgDirectory . "BurgerFuel.png"
);

$newdelhi=array(
	"name"=>"New Delhi",
	"type"=>"Café",
	"rating"=>"3.6",
	"sale"=>"12",
	"img"=>$imgDirectory . "NewDelhi.png"
);

// $=array(
// 	"name"=>"",
// 	"type"=>"",
// 	"rating"=>"",
// 	"sale"=>"",
// 	"img"=>$imgDirectory . ""
// );

$restaurant=array(
	(object) $domaine,
	(object) $burgerking,
	(object) $newdelhi,
	(object) $dominos,
	(object) $homesteadbareatery,
	(object) $mcdonalds,
	(object) $pizzahut,
	(object) $babaganush,
	(object) $kfc,
	(object) $agenda,
	(object) $thehelm,
	(object) $burgerfuel,
	(object) $subway
	// (object) $,
);


echo json_encode($restaurant);

?>
