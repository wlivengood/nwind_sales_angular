acme.controller('CompanyStatusCtrl', function($scope, SalesPersonService, RegionService, $q) {
  $q.all([
	  SalesPersonService.fetchAll(),
	  RegionService.fetchAll()
  ])
  .then(function(result){
		$scope.salesPeople = result[0];
		$scope.regions = result[1];
  })
	.catch(function(err) {
		console.log(err);
	});
});
