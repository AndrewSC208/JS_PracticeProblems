angular.module('dashApp.services', [])
.factory('dashAPIservice', function($http,$q) {

var dashAPI = {};

dashAPI.getCounts = function(data) {
  var canceller = $q.defer();
  var promise = $http({
	method: 'POST',
	data: data,
	url: '/dashboard/services/zq_dash_execute.php',
	timeout: canceller.promise
  });
  
  return {
		promise: promise,
		cancel: function(reason){
			canceller.resolve(reason);
		}
	};
}	
dashAPI.cancel = function(){
	canceller.resolve("user cancelled");  
};	

dashAPI.saveResults = function(data) {
  return $http({
	method: 'POST',
	data: data,
	url: '/dashboard/services/zq_dash_save.php'
  });
}	
dashAPI.getDistributions = function(data) {
  return $http({
	method: 'POST',
	data: data,
	url: '/dashboard/services/zq_dash_distribution.php'
  });
}		
return dashAPI;
}).service("modals",
function( $rootScope, $q ) {

	var modal = {
		deferred: null,
		params: null
	};

	return({
		open: open,
		params: params,
		proceedTo: proceedTo,
		reject: reject,
		resolve: resolve
	});

	function open( type, params, pipeResponse ) {
		var previousDeferred = modal.deferred;

		modal.deferred = $q.defer();
		modal.params = params;

		if ( previousDeferred && pipeResponse ) {
			modal.deferred.promise
				.then( previousDeferred.resolve, previousDeferred.reject );
		} else if ( previousDeferred ) {
			previousDeferred.reject();
		}

		$rootScope.$emit( "modals.open", type );
		return( modal.deferred.promise );
	}

	function params() {
		return( modal.params || {} );
	}

	function proceedTo( type, params ) {
		return( open( type, params, true ) );
	}

	function reject( reason ) {
		if (!modal.deferred) return;
		modal.deferred.reject( reason );
		modal.deferred = modal.params = null;
		$rootScope.$emit( "modals.close" );
	}

	function resolve( response ) {
		if (!modal.deferred) return;
		modal.deferred.resolve(response);
		modal.deferred = modal.params = null;
		$rootScope.$emit("modals.close");
	}
});