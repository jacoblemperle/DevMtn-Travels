angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv){
  $scope.travels = mainSrv.travelInfo;
});
