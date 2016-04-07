angular.module("jobbiesApp").controller('FeedController', ['$scope', '$http', function($scope, $http){
  $scope.jobbies = [{title:"Mow my lawn", pay: 75, category: "Yardwork", city: "New Brunswick", "desc": "Need someone to mow my lawn, property is medium size, shouldn't take more than hour.  Bring your own mower."}, 

  {title:"Clean up my place", pay: 50, category: "Housework", city: "New Brunswick", "desc": "Had a huge party last night and now I'm hungover and my place is a mess, I just need soemone to come over and tidy up a bit. Thnaks!"}, 

  {title:"Cook Me Dinner", pay: 30, category: "Housework", city: "New Brunswick", "desc": "Too busy and worn out from work to cook for myself, come over and make me dinner."}, 

  {title:"Fix My Pumbling", pay: 120, category: "Handywork", city: "New Brunswick", "desc": "My pumbling is broken, sink does not work and water pressure is very low in shower, need someone to fix it ASAP"}, 

  {title:"Misc Test", pay: 75, category: "Miscellaneous", city: "New Brunswick", "desc": "TESTING"}]
  
  $scope.filter = {};
  $scope.price = 0;
  $scope.priceModel = {};
  $scope.category = {};
  $scope.priceModel.twenty = false;
  $scope.priceModel.fifty = false;
  $scope.priceModel.hundred = false;
  $scope.category.yardwork = true;
  $scope.category.housework = true;
  $scope.category.handywork = true;
  $scope.category.misc = true;

  $scope.pullJobbies = function(){
    $http({
      method: "GET",
      url: "/api/jobbies"
    }).then(function(res){
      $scope.jobbies = res.data;
      console.log(res);
      console.log($scope.jobbies)
    })
  }

  $scope.togglePrice = function(price){
    $scope.price = price;
  }

  $scope.categorySelected = function(category){
    if (category === "Yardwork" && $scope.category.yardwork){
      return true;
    }else if (category === "Housework" && $scope.category.housework){
      return true;
    }else if (category === "Handywork" && $scope.category.handywork){
      return true;
    }else if (category === "Miscellaneous" && $scope.category.misc){
      return true;
    }else{
      return false;
    }
  }

  $scope.minPay = function(pay){
    // console.log(pay);
    if ($scope.filter.minTwenty && pay < 20){
      return true;
    }else if ($scope.filter.minFifty && pay < 50){
      return true;
    }else if ($scope.filter.minHundred && pay < 100){
      return true;
    }else{
      return false;
    }
  }

  $scope.resetFilter= function(){
    $scope.filter = {};
    $scope.price = 0;
    $scope.category = {};
    $scope.priceModel.twenty = false;
    $scope.priceModel.fifty = false;
    $scope.priceModel.hundred = false;
    $scope.category.yardwork = true;
    $scope.category.housework = true;
    $scope.category.handywork = true;
    $scope.category.misc = true;
  }
}]);