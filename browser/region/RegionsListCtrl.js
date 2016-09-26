acme.controller('RegionsListCtrl', function($scope, RegionService) {
	RegionService.fetchAll()
	.then(function(regions) {
		$scope.regions = regions;
	})
	.catch(function(err) {
		console.log(err);
	});

	$scope.destroy = function(region){
    RegionService.destroy(region);
  };

	$scope.create = function() {
		RegionService.create($scope.region)
      .then(function(){
        $scope.region = null;
      })
      .catch(function(err){
        console.log(err);
      });
	}
});
