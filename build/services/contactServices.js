app.service('getContacts', function($http) { 
	//I set up a service to handle the retrieving of the data. Normally this would call would go to an api or get url request to a database.
        
    return {
		getList: function(){
			return $http.get('contacts.json').then(function(res) {
				// you can do some processing here
				return res.data;
			}).catch(function(err){
				console.log(err);
			});
		}
	};    
});