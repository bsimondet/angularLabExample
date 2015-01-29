// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

var incorrectClassAlert = function(){
    alert("Please submit a class name.")
};

var incorrectGradeAlert = function(){
    alert("Please submit a letter grade without a plus or minus.")
};

var incorrectCreditAlert = function(){
    alert("Please submit a valid number of credits.")
};

var addColorClass = function(ele,cls){
    ele.changingColor += " " + cls;
};


var coloringGPA = function(currentGPA){
    var calledColor;
    if(currentGPA < 2){
        calledColor = "red";
    } else if (currentGPA >= 2 && currentGPA <= 3){
        calledColor = "greenyellow";
    } else if(currentGPA > 3){
        calledColor = "green";
    }
    addColorClass(calledColor,gpaColor);
};
/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

