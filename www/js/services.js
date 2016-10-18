/**/

angular.module('starter.services', [])

// .service('phonegap100Service01',function($http){
//     this.getData=function(){
//         var testUrl = "https://localhost/series/3/restaurants.php";
//         return $http.get(testUrl);

//     }
// })

// Get data using $http and API from server
.factory('myFactory',function($http){
	
	var service = {};
	var baseUrl = 'https://localhost/series/3/';
	var _phpFile = '';
	var finalUrl='';
	
	// Make full url using base server address and php file name
	var makeUrl = function () {
		finalUrl = baseUrl + _phpFile;
		return finalUrl;
	}

	// Set php file name after user choose one resuaurant
	service.setPhpFile = function (phpFile) {
		_phpFile = phpFile;
	}
	
	//
	service.getPhpFile = function () {
		return _phpFile;
	}

	// Using get method to retrieve data from server
	service.getData=function(){
		makeUrl();	
		return $http.get(finalUrl);
	}
	
	return service;
})

// Pass array between controllers
// Used in menu state. Between menuCtrl and itemListCtrl to show the items after user select menu
.factory('passArrayFactory',function(){
	var service = {};
	var _array = [];

	// Get array form menuCtrl
	service.setArray = function(array){
		// Copy array into _array
		angular.copy(array,_array);
		// Because array is accociative array, to get the array value, need to use key
		// var info = "key"; _array[info]; 
	} 

	// Return array
	service.getArray = function () {
		return _array;
	}
	return service;
})

// Calculate Summary
// Will be called by minusButton and plusButton
// Will be watched and called by Summary footer
.factory('Summary', function(){
	var service = {};
	var summary = 0;
	var _orderArray = [];

	// array = [{key:value},{key:value}]
	// Find the index of object in array using key value pair
	var objectFindByObject = function (array, object) {
		var _objectName = object.name;
		for (var i = 0; i < array.length; i++) {
				if (array[i].name === _objectName) {
				return i;
			}
		}	
		return -1;
	};

	service.getSummary = function () {
		return summary;
	};
	service.setPlusPrice = function (item) {
		summary = summary + item.price;
		var index = objectFindByObject(_orderArray,item);
		if(index === -1){
			_orderArray.push(item);
		}
		console.log(_orderArray);
	};
	service.setMinusPrice = function (item) {
		summary = summary - item.price;
		var index = objectFindByObject(_orderArray,item);
		if(_orderArray[index].num === 0){
			_orderArray.splice(index, 1);
		}
		console.log(_orderArray);
	};

	service.getOrderList = function(){
		return _orderArray;
	};

	service.getNumber = function(){
		var _num = 0;
		for (var i = 0; i < _orderArray.length; i++) {
			_num += _orderArray[i].num;
		}
		return _num;
	};

	return service;
	// return {
	// 	getData: function () {
	// 		return summary;
	// 	},
	// setPlusPrice: function (plusPrice) {
	// 		summary = summary + plusPrice;
	// 	},
	// setMinusPrice: function (minusPrice) {
	// 		summary = summary - minusPrice;
	// 	}
	// };
});