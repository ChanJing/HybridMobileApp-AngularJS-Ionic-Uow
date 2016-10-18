<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$imgDirectory = "file:///D:/Program Files (x86)/xampp/htdocs/images/";

$INFO=array(
	"name"=>"BurgerKing"
);

$BeefEgg=array(
	"name"=>"Beef & Egg",
	"price"=>6,
	"img"=>$imgDirectory . "Beef & Egg Thumbnail.png",
	"num"=>0
);

$WhopperCheese=array(
	"name"=>"Whopper with Cheese",
	"price"=>7,
	"img"=>$imgDirectory . "WhopperCheese Thumbnail.png",
	"num"=>0
);

$DoubleWhopperCheese=array(
	"name"=>"Double Whopper with Cheese",
	"price"=>10,
	"img"=>$imgDirectory . "DoubleWhopperCheese Thumbnail.png",
	"num"=>0
);
$StreakyBaconSteakhouse=array(
	"name"=>"Streaky Bacon Angus Steakhouse",
	"price"=>7,
	"img"=>$imgDirectory . "StreakyBaconSteakhouse Thumbnail.png",
	"num"=>0
);

$BURGERS=array(
	(object)$BeefEgg,
	(object)$WhopperCheese,
	(object)$DoubleWhopperCheese,
	(object)$StreakyBaconSteakhouse,

);


$BananaSuperShake=array(
	"name"=>"Banana Super Shake",
	"price"=>3,
	"img"=>$imgDirectory . "Banana Super Shake Thumbnail.png",
	"num"=>0
);
$FrozenCoke=array(
	"name"=>"Frozen Coke",
	"price"=>1,
	"img"=>$imgDirectory . "Frozen Coke Thumbnail.png",
	"num"=>0
);
$Coke=array(
	"name"=>"Soft Drinks",
	"price"=>1,
	"img"=>$imgDirectory . "Coke Thumbnail.png",
	"num"=>0
);
$Coffee=array(
	"name"=>"Premium Coffee",
	"price"=>2,
	"img"=>$imgDirectory . "Coffee Thumbnail.png",
	"num"=>0
);
$HotChoc=array(
	"name"=>"Hot Chocolate",
	"price"=>3,
	"img"=>$imgDirectory . "Hot Choc Thumbnail.png",
	"num"=>0
);
$Tea=array(
	"name"=>"Tea",
	"price"=>3,
	"img"=>$imgDirectory . "Tea Thumbnail.png",
	"num"=>0
);

$DRINKS=array(
	(object)$BananaSuperShake,
	(object)$FrozenCoke,
	(object)$Coke,
	(object)$Coffee,
	(object)$HotChoc,
	(object)$Tea
);



$ChickenSalad=array(
	"name"=>"Tendercrisp® & Chicken Fillet Salad",
	"price"=>5,
	"img"=>$imgDirectory . "Chicken Salad Thumbnail.png",
	"num"=>0
);
$SaladBurger=array(
	"name"=>"Salad Burger",
	"price"=>4,
	"img"=>$imgDirectory . "Salad Burger Thumbnail.png",
	"num"=>0
);
$Salad=array(
	"name"=>"Side Salad",
	"price"=>3,
	"img"=>$imgDirectory . "Salad Thumbnail.png",
	"num"=>0
);

$SALADS=array(
	(object)$ChickenSalad,
	(object)$SaladBurger,
	(object)$Salad
);


$EggsBene=array(
	"name"=>"Eggs Bene Deluxe",
	"price"=>3,
	"img"=>$imgDirectory . "Eggs Bene Thumbnail.png",
	"num"=>0
);
$BreakfastStack=array(
	"name"=>"Breakfast Stack",
	"price"=>4,
	"img"=>$imgDirectory . "Breakfaststack Thumbnail.png",
	"num"=>0
);
$BigBrekkie=array(
	"name"=>"Big BK Brekkie",
	"price"=>5,
	"img"=>$imgDirectory . "Big Brekkie Thumbnail.png",
	"num"=>0
);
$BaconCheeseEgg=array(
	"name"=>"Bacon & Egg Muffin",
	"price"=>4,
	"img"=>$imgDirectory . "Bacon Cheese&Egg Muffin Thumbnail.png",
	"num"=>0
);
$SausageCheeseEgg=array(
	"name"=>"Sausage & Egg Muffin",
	"price"=>5,
	"img"=>$imgDirectory . "Sausage Cheese Egg Muffin Thumbnail.png",
	"num"=>0
);
$SausageMuffin=array(
	"name"=>"King Sausage Muffin",
	"price"=>6,
	"img"=>$imgDirectory . "Sausage Muffin Thumbnail.png",
	"num"=>0
);

$BREAKFAST=array(
	(object)$EggsBene,
	(object)$BreakfastStack,
	(object)$BigBrekkie,
	(object)$BaconCheeseEgg,
	(object)$SausageCheeseEgg,
	(object)$SausageMuffin

);

$HotCakes=array(
	"name"=>"Hotcakes all day",
	"price"=>3,
	"img"=>$imgDirectory . "Hot Cakes Thumbnail.png",
	"num"=>0
);
$Sundae=array(
	"name"=>"Sundae",
	"price"=>3,
	"img"=>$imgDirectory . "Sundae Thumbnail.png",
	"num"=>0
);
$SoftServe=array(
	"name"=>"Soft Serve Cone",
	"price"=>1,
	"img"=>$imgDirectory . "Soft Serve Cone Thumbnail.png",
	"num"=>0
);

$DESSERTS=array(
	(object)$HotCakes,
	(object)$Sundae,
	(object)$SoftServe
);


$Fries=array(
	"name"=>"Fries",
	"price"=>2,
	"img"=>$imgDirectory . "Fries Thumbnail.png",
	"num"=>0
);
$Hashbites=array(
	"name"=>"Hashbites",
	"price"=>2,
	"img"=>$imgDirectory . "Hashbites Thumbnail.png",
	"num"=>0
);
$OnionRing=array(
	"name"=>"Onion Ring",
	"price"=>1,
	"img"=>$imgDirectory . "Onion Ring Thumbnail.png",
	"num"=>0
);
$ChickenNuggets=array(
	"name"=>"Chicken Nuggets x 6",
	"price"=>3,
	"img"=>$imgDirectory . "Chicken Nuggets Thumbnail.png",
	"num"=>0
);

$SIDES=array(
	(object)$Fries,
	(object)$Hashbites,
	(object)$OnionRing,
	(object)$ChickenNuggets
);


$RodeoStunner =array(
	"name"=>"Rodeo Stunner Meal",
	"price"=>6,
	"img"=>$imgDirectory . "Rodeo Stunner Thumbnail.png",
	"num"=>0
);
$DoubleCheeseStunner=array(
	"name"=>"Double Cheeseburger Stunner",
	"price"=>6.5,
	"img"=>$imgDirectory . "Double Cheese Burger Stunner Thumbnail.png",
	"num"=>0
);
$NuggetBurgerStunner=array(
	"name"=>"Chicken Nugget Burger Stunner Meal",
	"price"=>6,
	"img"=>$imgDirectory . "Nugget Burger Stunner Thumbnail.png",
	"num"=>0
);

$STUNNER=array(
	(object)$RodeoStunner,
	(object)$DoubleCheeseStunner,
	(object)$NuggetBurgerStunner
);


$menu=array(
	"INFO"=>$INFO,
	"BURGERS"=>$BURGERS,
	"DRINKS"=>$DRINKS,
	"SALADS"=>$SALADS,
	"BREAKFAST"=>$BREAKFAST,
	"SIDES"=>$SIDES,
	"DESSERTS"=>$DESSERTS,
	"STUNNER"=>$STUNNER
);

echo json_encode($menu);
?>