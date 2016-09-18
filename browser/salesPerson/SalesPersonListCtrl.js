acme.controller('SalesPersonListCtrl', function($scope, SalesPersonService) {
	SalesPersonService.fetchAll()
	.then(function(salesPeople) {
		$scope.salesPeople = salesPeople;
	})
	.catch(function(err) {
		console.log(err);
	});

	$scope.deleteSalesPerson = SalesPersonService.deleteSalesPerson;

	$scope.createSalesPerson = function() {
		SalesPersonService.createSalesPerson({name: $scope.name})
		.then(function(salesPerson) {
			$scope.salesPeople.push(salesPerson);
		})
		.catch(function(err) {
			console.log(err);
		});
		$scope.name = "";
	}
});