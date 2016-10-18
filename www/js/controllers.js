/**/

angular.module('starter.controllers', ['ionic'])

.controller('homeCtrl',['$scope',function($scope){
}])

.controller('orderCtrl',['$scope',function($scope){
    
}])

.controller('accountCtrl',['$scope','$ionicModal',function($scope,$ionicModal){
    $ionicModal.fromTemplateUrl('login-modal.html', {
        // We need to use and ID to identify the modal that is firing the event
        id: '1',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.loginModal = modal;
    });
    
    $ionicModal.fromTemplateUrl('signup-modal.html', {
        // We need to use and ID to identify the modal that is firing the event
        id: '2',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.signupModal = modal;
    });
    
    $scope.openModal=function(index){
        if (index == 1)
            $scope.loginModal.show();
        else
            $scope.signupModal.show();
    };
    
    $scope.closeModal=function(index){
        if (index == 1)
            $scope.loginModal.hide();
        else
            $scope.signupModal.hide();
    };
}])
  


// Controller of type button on sub-header 
.controller('typeCtrl',['$scope','$ionicPopover',function($scope, $ionicPopover){
    $ionicPopover.fromTemplateUrl('type-popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    /*
    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
    // Execute action on hide popover
        $scope.$on('popover.hidden', function() {
    // Execute action
    });
    // Execute action on remove popover
        $scope.$on('popover.removed', function() {
    // Execute action
    });
    
    // Use ios-style popover
    //document.body.classList.add('platform-ios');
    */
}])

// Controller of sort button on sub-header 
.controller('sortCtrl',['$scope','$ionicPopover',function($scope, $ionicPopover){
    $ionicPopover.fromTemplateUrl('sort-popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
}])

// Controller of discount button on sub-header 
.controller('discountCtrl',['$scope','$ionicPopover',function($scope, $ionicPopover){
    $ionicPopover.fromTemplateUrl('discount-popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
}])

.controller('typelistCtrl',['$scope','$rootScope',function($scope,$rootScope) {
    var types = [{text:"ALL",value:"restaurants.php"},{text:"Fast Food",value:"fastfood.php"},{text:"Barbecue",value:"barbecue.php"},{text:"Café",value:"cafe.php"},{text:"Pub",value:"pub.php"}]
    $scope.types = types;
    // Pre-selected ion-radio
    $scope.data = {choice : 'restaurants.php'};
    
    //ng-change
    $scope.changeRest = function(type){
        console.log(type.value);
        //Using broadcast to pass the params between controllers
        //Using $scope.$on to receive
        $rootScope.$broadcast('newList',type);
//        $scope.type-popover.hide();
        //console.log($scope.typeChoice);
    };
}])

.controller('sortlistCtrl',['$scope','$rootScope',function($scope,$rootScope) {
    // var sorts = ["None","Rating","Sale","Destination","Lowest Price ","Highest Price"];
    var sorts = [
        {text:"None",value:"none"},
        {text:"Rating",value:"rating"},
        {text:"Sale",value:"sale"},
        {text:"Lowest Price",value:"lowestprice"},
        {text:"Highest Price",value:"highestprice"}
    ];

    $scope.sorts = sorts;
    // Pre-selected ion-radio
    $scope.data = {choice : 'none'};

    $scope.changeRest = function(sort){
        console.log(type.value);
        $rootScope.$broadcast('newSort',sort);
    }
}])

.controller('dicountlistCtrl',['$scope',function($scope) {
    var discounts = ["All","Free Delivery ","Bonus","Free Drink","For new user","Coupon"];
    $scope.disocunts = discounts
    // Pre-selected ion-radio
    $scope.discountChoice = 'All';
}])

.controller('restaurantList',['$scope','myFactory',function($scope, myFactory) {
    $scope.sortBy = "rating";
    // Set initial file to show
    var phpFile = 'restaurants.php';

    // Set function to get data and display restaurants
    var FactoryGetData = function(phpFile){
        myFactory.setPhpFile(phpFile);
        myFactory.getData().success(
            function(response) {
                $scope.numberOfItemsToDisplay = 3;
                $scope.restaurants = response;
            }).error(function(){
        });
    }
    // Using the function to show
    FactoryGetData(phpFile);

    // When get bottom, reload more data, "numberOfItemsToDisplay" means 3 more items
    $scope.loadMore = function() {
        $scope.numberOfItemsToDisplay += 3;
        $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    
    // Setting rating stars readonly
    $scope.readOnly = true;
    
    // Listen the user select, and change restaurants
    $scope.$on('newList',function(events,args){
        console.log(args);
        // Reset the restaurants list
        FactoryGetData(args.value);
    });

    $scope.$on('newSort',function(events,args){
        $scope.sortBy = args.value;
    });
}])

//Using $stateParams can get the params (array) in menu states
.controller('menuCtrl',['$scope','$stateParams','myFactory','$rootScope','passArrayFactory',function($scope,$stateParams,myFactory,$rootScope,passArrayFactory){
    console.log($stateParams.list);
    // Retrieve menu list from the restaurant file
    myFactory.setPhpFile($stateParams.list);
    myFactory.getData().success(
        function(response) {
            // console.log(response.INFO.name);
            $scope.restName = response.INFO.name;
            // Pass the item data to itemListCtrl to display them, menuListCtrl don't need them
            passArrayFactory.setArray(response);
            // Broadcast the list of menu to menuListCtrl
            // Object.keys(response) onlu get the keys of response
            $rootScope.$broadcast('newMenuList',Object.keys(response));
        }).error(function(){
    });
}])

// Do not need item information, don't all data of menu, just need list of menu
.controller('menuListCtrl', ['$scope','$rootScope',function($scope,$rootScope){
    // Get list of menu from menuCtrl
    $scope.$on('newMenuList',function(events,args){
        var menulist=[];
        menulist = args;
        $scope.menu = menulist.slice(1,menulist.length);
        // Broadcast the initial list of items to itemListCtrl
        $rootScope.$broadcast('initMenuType',menulist[1]);
    });
    // After user select menu, broadcast the selection of itemListCtrl to change item list
    $scope.setSelected = function(typeSelected){
        //console.log(typeSelected);
        $rootScope.$broadcast('newItemList',typeSelected);
    };
}])

// Display the items of menu
// Get data of menu from menuListCtrl using $rootScope
// Get data of items from menuCtrl using passArrayFactory
.controller('itemListCtrl', ['$scope','$rootScope','passArrayFactory','Summary',function($scope,$rootScope,passArrayFactory,Summary){
    // Get data from passArrayFactory
    var response = [];
    response = passArrayFactory.getArray();
    // Initial the item list from menuListCtrl
    $scope.$on('initMenuType',function(events,args){
        $scope.type = response[args];
    });
    // Update the item list from menuListCtrl as well after user select other menu
    $scope.$on('newItemList',function(events,args){
        console.log(response[args]);
        $scope.type = response[args];
    });
    $scope.orderPlus= function(item){
          item.num++;
          // Show the minusButton and countNum
          item.countNum = true;
          item.minusButton = true;
          // Call the function in Summary Factory to plue the price in summary
          Summary.setPlusPrice(item);
    };

    $scope.orderMinus = function(item){
          item.num--;
          // If num < 1, hide the minusButton and countNum
          if(item.num < 1){
              item.countNum = false;
              item.minusButton = false;
          }
          // Call the function in Summary Factory to minus the price in summary
          Summary.setMinusPrice(item);
    };
}])

.controller('SummaryCtrl',['$scope','Summary','$state','$http',function($scope, Summary,$state,$http) {
    $scope.summary = 0;

    // Watch or Listen the change of the return of Summary
    // If change happened, refresh the summary value
    $scope.$watch(function () { return Summary.getSummary(); }, function (newValue, oldValue) {
        if (newValue !== oldValue) {
            $scope.summary = newValue;
        }
    });

    $scope.confirmOrder = function(){
        if($scope.summary > 0){
            var data = $scope.summary;
            $http.post("https://localhost/series/3/restaurants.php",data).success(
                function(response,status){
                console.log("statue");
            });
            $state.go('confirmOrder');
        }
    }
}])

.controller('orderListCtrl',['$scope','Summary',function($scope, Summary) {
    $scope.orders = Summary.getOrderList();
}])

.controller('amountCtrl',['$scope','Summary','$http',function($scope,Summary,$http) {
    $scope.totalPrice = Summary.getSummary();
    $scope.amountItems = Summary.getNumber();
    $scope.sendData = function(){
        var data = Summary.getOrderList();
        $http({
            url: 'https://localhost/series/3/postdata.php',
            method: "POST",
            data: data,
            headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset  = UTF-8'}
        }).success(function (data, status, headers, config) {
            console.log(status); // assign  $scope.persons here as promise is resolved here 
        }).error(function (data, status, headers, config) {
            console.log(status);
        });
    };
}])