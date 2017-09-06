angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = {};
    // undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
        if($scope.name.length<=0 & $scope.code.length<=0){ return;}
        $scope.listings.push({code:$scope.code,
          name:$scope.name,
          coordinates:$scope.coordinates,
          // longitude:$scope.coordinates.longitude,
          address:$scope.address});

        $scope.code='';
        $scope.name='';
        $scope.coordinates='';
        // $scope.coordinates.longitude='';
        $scope.address='';

    };
    $scope.deleteListing = function(index) {
      // console.log("Is this being called");
        // $scope.listings.splice(index,1);
        if($scope.listings.indexOf(index)!=-1){
        $scope.listings.splice(($scope.listings.indexOf(index)), 1);
        // console.log("TEST");
      }
    };


    $scope.showDetails = function(index) {
      $scope.detailedInfo= index;

    };
  }
]);
