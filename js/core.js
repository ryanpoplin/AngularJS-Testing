// BATARANG!

// data model...
var todoModel = {
	user: "ExcepApps",
};

// 'todoApp' module...
var todoApp = angular.module("todoApp", []);

// GET...
todoApp.run(function($http) {
	$http.get("todo.json").success(function(data) {
		todoModel.items = data;
	});
});

// Filter...
todoApp.filter("checkedItems", function() {
	return function(items, showComplete) {
		var resultArr = [];
		angular.forEach(items, function(item) {
			if (item.done === false || showComplete === true) {
				resultArr.push(item);
			}
		});
		return resultArr;
	}
});

todoApp.controller("ToDoCtrl", function($scope) {

	// will work as: {{todo.user}}...
	$scope.todo = todoModel;

	$scope.incompleteCount = function() {
		// Awesome entry to logic lesson...
		var count = 0;
		angular.forEach($scope.todo.items, function(item) {
			if (!item.done) {
				count += 1;
			}
		});
		return count;
	};

	$scope.warningLevel = function() {
		return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
	};

	// POST...
	$scope.addNewItem = function(actionText) {
		$scope.todo.items.push({
			action: actionText,
			done: false
		});
	};

	// PUT...
	// when you click the button, run this method...
	/*$scope.editItem = function() {
		$http.get("todo.json").success(	function(data) {
		todoModel.items = data;
	});
	};

	// DELETE...
	// when you click the button, run this method...
	$scope.deleteItem = function() {
		$http.get("todo.json").success(function(data) {
		todoModel.items = data;
	});
	};*/

});