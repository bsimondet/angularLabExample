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

        $scope.classes =[];

        var totalCredits = 0;
        var totalGradePoint = 0;

        $scope.addClass = function(){
            if(!$scope.classField.length >=1){
                incorrectClassAlert();
            } else if(!$scope.gradeField.length == 1){
                incorrectGradeAlert();
            } else if(!$scope.creditField.length == 1){
                incorrectCreditAlert();
            } else if(isNaN($scope.creditField)){
                incorrectCreditAlert();
            } else {
                $scope.classes.push({class:$scope.classField, grade:$scope.gradeField, credits:$scope.creditField});
                totalCredits = totalCredits + parseInt($scope.creditField);
                totalGradePoint = totalGradePoint + (parseInt($scope.creditField) * parseInt($scope.returnGradeValue($scope.gradeField.toUpperCase())));
                $scope.classField = "";
                $scope.gradeField = "";
                $scope.creditField = "";
            }
        };

        $scope.currentGpa = function(){
            return (totalGradePoint/totalCredits).toFixed(3);
        };

        $scope.classesInList = function(){
            return $scope.classes.length;
        };

        $scope.totalCredits = function(){
            return totalCredits;
        };

        $scope.returnGradeValue = function(str){
            if (str === "A") {
                return 4.0;
            } else if (str === "B") {
                return 3.0;
            } else if (str === "C") {
                return 2.0;
            } else if (str === "D") {
                return 1.0;
            } else {
                return 0;
            }
        };

        //Removes class from table as well as updating global variables that affect the displayed GPA
        $scope.removeClasses = function(index){
            var gradeToRemove = $scope.returnGradeValue($scope.classes[index].grade);
            var creditsToRemove = $scope.classes[index].credits;
            totalGradePoint -= (gradeToRemove * creditsToRemove);
            totalCredits -= creditsToRemove;
            $scope.classes.splice(index,1);
        };


        //Returns the name of a class that is dependant upon the quality of GPA
        $scope.returnGpaColor = function(current){
            if(current >= 3){
                return "goodGrade";
            } else if (current > 2 && current < 3){
                return "okGrade";
            } else if (current <= 2) {
                return "badGrade";
            }
        }
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
           {text: "sea cucumber"},
           {text: "axolotl"}
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
