angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
  $scope.travels = mainSrv.travelInfo;
});
