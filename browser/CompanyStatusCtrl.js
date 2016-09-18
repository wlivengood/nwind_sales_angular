acme.controller('CompanyStatusCtrl', function($scope, SalesPersonService, RegionService) {
	SalesPersonService.fetchAll()
	.then(function(salesPeople) {
		$scope.salesPeople = salesPeople;
	})
	.catch(function(err) {
		console.log(err);
	});

	RegionService.fetchAll()
	.then(function(regions) {
		$scope.regions = regions;
	})
	.catch(function(err) {
		console.log(err);
	});
});