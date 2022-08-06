var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45; 
var bangla = 99.50;
var totalMark = mathematics + biology + chemistry + physics + bangla;
console.log(totalMark);

var subjectNumber = 5;
var averageMark = totalMark / subjectNumber;
console.log(averageMark);

var averageTwoDecimal = averageMark.toFixed(2);
console.log(averageTwoDecimal);

var averageInteger =  parseInt(averageTwoDecimal);
console.log(averageInteger);
