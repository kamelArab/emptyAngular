/**
 * Created by karab on 18/02/15.
 */
angular.module('empty.app.controller')
    .controller('HomeCtrl',['$scope',function($scope){
        $scope.title = "Title";
        $scope.content = "The Body Content";
    }]);