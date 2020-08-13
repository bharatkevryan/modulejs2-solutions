(function (){
	'use strict';

	angular.module("myApp", []).controller("shoppingListController", shoppingListController)
	.controller("boughtController", boughtController).service("shoppingService", shoppingService);

	function shoppingListController(shoppingService){
		var list1 =this;
		list1.items = shoppingService.getBuyItems();
		list1.addToBought = function (index){
			shoppingService.addItems(index);
			list1.items = shoppingService.getBuyItems();
		}

	}
	function boughtController(shoppingService){
		var bought =this;
		bought.items = shoppingService.getBoughtItems();

	}
	function shoppingService(){
		var buyitems = [{
			name: "cookies",
			quantity: 2
		},
		{
			name : "chips",
			quantity: 3
		},
		{
            name: "cookies",
            quantity: "10"
        }, {
            name: "cookies",
            quantity: "25"
        }, {
            name: "chocolates",
            quantity: "Pack of 5"
        }, {
            name: "chocolates",
            quantity: "Pack of 10"
        }, {
            name: "chocolates",
            quantity: "Pack of 25"
        }, {
            name: "Fruit Juice",
            quantity: "3 Bottles"
        }, {
            name: "Fruit Juice",
            quantity: "5 Bottles"
        }];
		var boughtitems = [];
		var service = this;
		service.addItems = function(index){
			var temp = buyitems[index];
			buyitems.splice(index, 1);
			boughtitems.push(temp);

		};
		service.getBuyItems = function(){
			return buyitems;
		};
		service.getBoughtItems = function(){
			return boughtitems;
		};

	}	
})();