angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $state){
  $scope.travelInfo = mainSrv.travelInfo;

  var travelInfo = $scope.travelInfo;


  var getInfo = function(){
    for(var i = 0; i < $scope.travelInfo.length; i++){
      if($state.params.id == $scope.travelInfo[i].id){
        $scope.travel = $scope.travelInfo[i];
      }
    }
  };
  getInfo();

});
