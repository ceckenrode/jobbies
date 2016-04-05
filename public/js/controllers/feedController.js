angular.module("jobbiesApp").controller('FeedController', ['$scope', function($scope){
  $scope.jobbies = [{title:"Mow my lawn", pay: 75, category: "Yardwork", city: "New Brunswick", "desc": "Need someone to mow my lawn, property is medium size, shouldn't take more than hour.  Bring your own mower."}, 

  {title:"Clean up my place", pay: 50, category: "Housework", city: "New Brunswick", "desc": "Had a huge party last night and now I'm hungover and my place is a mess, I just need soemone to come over and tidy up a bit. Thnaks!"}, 

  {title:"Cook Me Dinner", pay: 30, category: "Housework", city: "New Brunswick", "desc": "Too busy and worn out from work to cook for myself, come over and make me dinner."}, 

  {title:"Fix My Pumbling", pay: 120, category: "Handywork", city: "New Brunswick", "desc": "My pumbling is broken, sink does not work and water pressure is very low in shower, need someone to fix it ASAP"}, 

  {title:"Misc Test", pay: 75, category: "Miscellaneous", city: "New Brunswick", "desc": "TESTING"}]

  $scope.filter = {};
  // $scope.filter.byCategory=false;
  // $scope.filter.Yardwork = false;
  // $scope.filter.Housework = false;
  // $scope.filter.Handywork = false;
  // $scope.filter.Misc = false;
  $scope.price = 0;
  $scope.category = {};
  $scope.category.yardwork = true;
  $scope.category.housework = true;
  $scope.category.handywork = true;
  $scope.category.misc = true;

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

  // $scope.applyFilter = function(){
  //   $scope.filter.set=true;
  //   console.log($scope);
  // }

  // $scope.resetFilter = function(){
  //   $scope.filter.set=false;
  //   console.log($scope);
  // }


  $scope.filterPrice = function(num){
    switch(num) {
      case 1:
        $scope.filter.minTwenty = true;
        $scope.filter.minFifty = false;
        $scope.filter.minHundred = false;
        break;
      case 2:
        $scope.filter.minTwenty = false;
        $scope.filter.minFifty = true;
        $scope.filter.minHundred = false;
        break;
      case 3:
        $scope.filter.minTwenty = false;
        $scope.filter.minFifty = false;
        $scope.filter.minHundred = true;
        break;
      default:
        break;
      }
    }

    // $scope.categoryToggle = function(category){
    //   $scope.filter.byCategory = true;
    //   if (category === 1){
    //     $scope.filter.Yardwork = !$scope.filter.Yardwork;
    //   }else if (category === 2){
    //     $scope.filter.Housework = !$scope.filter.Housework;
    //   }else if (category === 3){
    //     $scope.filter.Handywork = !$scope.filter.Handywork;
    //   }else{
    //     $scope.filter.Miscellaneous = !$scope.filter.Miscellaneous;
    //   }
    // }

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

  // $scope.category = function(category){
  //    console.log(category === "Yardwork");
  //   // console.log($scope.filter.Yardwork);
  //   // console.log($scope.filter.Housework);
  //   if($scope.filter.byCategory === true){
  //     if (category === "Yardwork" && $scope.filter.Yardwork){
  //       return false;
  //     }else if (category === "Housework" && $scope.filter.Housework){
  //       return false;
  //     }else if (category === "Handywork" && $scope.filter.Handywork){
  //       return false;
  //     }else if (category === "Miscellaneous" && $scope.filter.Miscellaneous){
  //       return false;
  //     }else{
  //       return true;
  //     }
  //   }else{
  //     return false;
  //   }
  // }

}]);