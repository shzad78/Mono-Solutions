var app = angular.module ('myApp',['ngRoute']);


app.controller('mainController',function($scope, $http){

});


app.controller('homeController',function($scope, $http){
  $scope.settings = {
    submitted: false
  }
  $scope.ok = function() {
    console.log("here i m");
  var callback, progress;
  $scope.error = {};
  $scope.hasError = false;
  $scope.settings.submitted = true;
  if ($scope.user.password) {
    if ($scope.user.password.length === 0) {
      $scope.hasError = true;
      $scope.error = {
        password: "Please enter your password"
      };
    } else if ($scope.user.password_confirm.length === 0) {
      $scope.hasError = true;
      $scope.error = {
        password_confirm: "Please confirm your password"
      };
    } else if ($scope.user.password !== $scope.user.password_confirm) {
      $scope.hasError = true;
      $scope.errorMessage = "Passwords do not match";
    }
  } else {
    $scope.hasError = true;
    $scope.errorMessage = "Please enter your password";
  }
  if (!$scope.hasError && $scope.user_form.$valid) {
    console.log("user",$scope.user);
    $http({  method : "POST",url : "/user",data: {'user':$scope.user}})
  .then(function(response){
    alert("Success ,your data is saved");
    console.log("success");
    $scope.settings.submitted = false;
    $scope.user ={}

   },
    function(err){
        alert("Sorry your data not is saved");
        console.log("error");
    });
  }
};

});

app.controller('aboutController',function($scope){
  console.log("i am in about");
});

app.controller('contactController',function($scope){
  console.log("i am in contact");
});

app.config(function ($routeProvider,  $locationProvider ) {
    $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
      templateUrl: 'partial/home.html',
      controller: 'homeController'
   })
  .when('/about', {
     templateUrl: 'partial/about.html',
     controller: 'aboutController'
  })
  .when('/contact', {
     templateUrl: 'partial/contact.html',
     controller: 'contactController'
  })
    .otherwise({redirectTo: '/'});
});
app.run(['$rootScope', '$location', function($rootScope, $location) {
      console.log("location",$location.path());
      var path = function() {
          return $location.path();
      };
      $rootScope.$watch(path, function(newVal, oldVal) {
          console.log("newval",newVal, "oldVal", oldVal);
          $rootScope.activetab = newVal;
      });
  }]);
