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

	RegionService.destroy = function(region) {
		return $http.delete('/api/regions/' + region.id)
		.then(function(){
			var idx = regions.indexOf(region);
			regions.splice(idx, 1);
		});
	};

	RegionService.create = function(region) {
		return $http.post('/api/regions', region)
		.then(function(result) {
      regions.push(result.data);
			return result.data;
		});
	};

	return RegionService;
});
