var app = angular.module("myApp",["chart.js"]);
app.controller("pieController",function($scope){
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales","shivanand"];
  $scope.data = [300, 500, 100,300];
});
