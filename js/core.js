// BATARANG!

// data model...
var todoModel = {
	user: "Ryan",
	// 'items' collection...
	items: [{ 
		action: "Buy an awesome book on AngularJS...", 
		done: true 
	}, {
		action: "Find Her...",
		done: false
	}, {
		action: "The Iron Yard's Digital Health Accelerator Acceptance...",
		done: false
	}, {
		action: "Master AngularJS...",
		done: false
	}, {
		action: "Master NodeJS...",
		done: false
	}]
};

// 'todoApp' module...
var todoApp = angular.module("todoApp", []);

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

});