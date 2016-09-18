acme.controller('RegionsListCtrl', function($scope, RegionService) {
	RegionService.fetchAll()
	.then(function(regions) {
		$scope.regions = regions;
	})
	.catch(function(err) {
		console.log(err);
	});

	$scope.deleteRegion = RegionService.deleteRegion;

	$scope.createRegion = function() {
		RegionService.createRegion({zip: $scope.zip})
		.then(function(region) {
			$scope.regions.push(region);
		})
		.catch(function(err) {
			console.log(err);
		});
		$scope.zip = "";
	}
});