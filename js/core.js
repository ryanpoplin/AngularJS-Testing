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
	}]
};

// 'todoApp' module...
var todoApp = angular.module("todoApp", []);

todoApp.controller("ToDoCtrl", function($scope) {

	// will work as: {{todo.user}}...
	$scope.todo = todoModel;

});