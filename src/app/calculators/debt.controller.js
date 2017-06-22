'use strict'

angular.module('inspinia')
.controller('usersController', function($scope, Users) {
  console.log("a1 ",$scope.users);
$scope.users=Users;
  console.log("a2 ",$scope.users);
});
