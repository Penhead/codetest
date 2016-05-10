app.controller('ContactsController', function($scope, getContacts) {
	var localStorageObj = window.localStorage.getItem("contacts");
	
	$scope.collapse = false;
	$scope.contactList = [];
	$scope.newContact = {};
	$scope.itemsToDelete = [];
	$scope.storeItemsValue = {};
	$scope.showAddForm = false;
	$scope.toggleCollapse = function(){
		$scope.collapse = !$scope.collapse;
	}
	if(localStorageObj != null){
		$scope.contactList = JSON.parse(localStorageObj);
	}else{
		getContacts.getList().then(function(data){
			$scope.contactList = data;
		});
	}
	$scope.showAdd = function(){
		$scope.showAddForm = true;
	}
	$scope.closeAdd = function(){
		$scope.showAddForm = false;
	}
	$scope.pushItemToDelete = function (event, index) {
		var elemVal = event.target.checked;
		$scope.contactList[index].Selected = event.target.checked;
		if(elemVal){
			if($scope.itemsToDelete.indexOf(index) == -1){
				$scope.itemsToDelete.push(index);
			}
		}else{
			var item = $scope.itemsToDelete.indexOf(index);
			$scope.itemsToDelete.splice(item, 1);
		}
	}
	$scope.deleteContact = function () {
		var newArr = $scope.contactList.filter(function(item,index){
			if( $scope.itemsToDelete.indexOf(index) == -1){
				return $scope.contactList[index];
			}
		});
      	 $scope.contactList = newArr;
		 $scope.itemsToDelete = [];
		 window.localStorage.setItem("contacts", JSON.stringify($scope.contactList));
	}
	$scope.addContact = function (obj) {
		$scope.newContact = {};
		var copyObj = angular.copy(obj);
		$scope.contactList.push(copyObj);
		window.localStorage.setItem("contacts", JSON.stringify($scope.contactList));
		$scope.showAddForm = false;
	}
});