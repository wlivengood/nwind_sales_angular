acme.factory('SalesPersonService', function($http) {
	var SalesPersonService = {};

	var salesPeople = [];


	SalesPersonService.fetchAll = function() {
		return $http.get('/api/salesPeople')
		.then(function(results) {
			angular.copy(results.data, salesPeople);
			return salesPeople;
		});
	};

	SalesPersonService.deleteSalesPerson = function(salesPerson) {
		return $http.delete('/api/salesPeople/' + salesPerson.id)
		.then(function(){
			var idx = salesPeople.indexOf(salesPerson);
			salesPeople.splice(idx, 1);
		});
	};

	SalesPersonService.createSalesPerson = function(name) {
		return $http.post('/api/salesPeople', name)
		.then(function(result) {
			return result.data;
		});
	};

	return SalesPersonService;
});