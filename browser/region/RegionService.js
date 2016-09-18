acme.factory('RegionService', function($http) {
	var RegionService = {};

	var regions = [];


	RegionService.fetchAll = function() {
		return $http.get('/api/regions')
		.then(function(results) {
			angular.copy(results.data, regions);
			return regions;
		});
	};

	RegionService.deleteRegion = function(region) {
		return $http.delete('/api/regions/' + region.id)
		.then(function(){
			var idx = regions.indexOf(region);
			regions.splice(idx, 1);
		});
	};

	RegionService.createRegion = function(zip) {
		return $http.post('/api/regions', zip)
		.then(function(result) {
			return result.data;
		});
	};

	return RegionService;
});