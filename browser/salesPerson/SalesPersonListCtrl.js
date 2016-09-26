acme.controller('SalesPersonListCtrl', function($scope, SalesPersonService) {
	SalesPersonService.fetchAll()
	.then(function(salesPeople) {
		$scope.salesPeople = salesPeople;
	})
	.catch(function(err) {
		console.log(err);
	});

	$scope.destroy = SalesPersonService.destroy;

	$scope.create = function() {
		SalesPersonService.create($scope.salesPerson)
    .then(function(){
      $scope.salesPerson = null;
    })
		.catch(function(err) {
			console.log(err);
		});
	}
});
