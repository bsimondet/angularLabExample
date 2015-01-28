var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'},
            {text: "GPA Calculator", link: '/gpaCalculator'}
        ];
    });


//==================== GPA CONTROLLER ====================================
    mainApp.controller('gpaCtrl', function($scope){
        $scope.classField = "";

        $scope.gradeField = "";

        $scope.creditField = "";

        $scope.data = [
            {class: Example, grade: "A", credits: "0"}
        ];

        $scope.addClass = function(){
            if($scope.classField.length >= 1 && $scope.gradeField == 1) {
                $scope.data.push({class: $scope.classField, grade: $scope.gradeField, credits: $scope.creditField});
                $scope.classField = "";
                $scope.gradeField = "";
                $scope.creditField = "";
            }
        };
        $scope.removeData = function(index){
            $scope.data.splice(index, 1);
        };

        $scope.classesInList = function(){
            return $scope.data.length;
        };
    });


//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
       $scope.data = [
           {text: "fish"},
           {text: "kittens"},
           {text: "snake"},
           {text: "badger"},
           {text: "puppies"},
           {text: "sea cucumber"}
       ];

       $scope.addData = function(){
           if($scope.textField.length >= 1) {
               $scope.data.push({text: $scope.textField});
               $scope.textField = "";
           }
       };

       $scope.removeData = function(index){
           $scope.data.splice(index, 1);
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       };

       $scope.itemsInList = function(){
           return $scope.data.length;
       };
    });
