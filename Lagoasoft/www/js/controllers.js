angular.module('app.controllers', [])
  
.controller('akuelleRechnungenCtrl', function($scope, $state) {
$scope.goToPage = function (state) {        
    
    $state.go(state);
};
})
   
.controller('aktuelleRechnungenCtrl', function($scope,$state) {
$scope.goToPage = function (state) {        
    
    $state.go(state);
};
})
   
.controller('abrechnungslisteCtrl', function($scope, $state) {
$scope.goToPage = function (state) {        
    
    $state.go(state);
};
})
   
.controller('abrechnungsliste2Ctrl', function($scope, $state) {
$scope.goToPage = function (state) {        
    
    $state.go(state);
};
})

.controller("DataOneController", function($scope) {
 
    $scope.polarData = {
    labels: ["Eingereicht", "Erfasst"],
    data: [24, 0],
};
 
})

.controller("DataTwoController", function($scope) {
 
    $scope.polarData = {
    labels: ["innerhalb", "Mahnung", "Mahnung", "Zuruckgestellt", "Zugesetzt"],
    data: [48, 10, 3, 54, 35],
};
 
})


.controller("DataThreeController", function($scope) {
 
    $scope.polarData = {
    labels: ["In Vorbereitung", "Beim Anwalt"],
    data: [50,50],
};
 
})





