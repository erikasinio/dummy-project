// CHANGING VARIABLES
// var johnHeight = 5.5;
// var johnWeight = 50; //1.7
// var victorHeight = 6.0;
// var victorWeight = 70; //1.9

// var johnBmi = johnWeight / (Math.pow(johnHeight,2)); 
// var victorBmi =  victorWeight / (Math.pow(victorHeight,2)); 

// if (victorBmi > johnBmi) {
//     var compareBmi = true;
//     console.log("Is Victor's BMI higher than John's? " + compareBmi);
// } else {
//     var compareBmi = false;
//     console.log("Is Victor's BMI higher than John's? " + compareBmi); 
// }


// ASKING FOR INPUT
// var johnHeight = prompt("Enter John's height (m): ");
// var johnWeight = prompt("Enter John's weight (kg): ");
// var victorHeight = prompt("Enter Victor's height (m): ");
// var victorWeight = prompt("Enter Victor's weight (kg): "); 

// var johnBmi = johnWeight / (Math.pow(johnHeight,2)); 
// var victorBmi =  victorWeight / (Math.pow(victorHeight,2)); 

// if (victorBmi > johnBmi) {
//     var compareBmi = true;
//     alert("Is Victor's BMI higher than John's? " + compareBmi);
// } else {
//     var compareBmi = false;
//     alert("Is Victor's BMI higher than John's? " + compareBmi); 
// }

// USING OBJECTS
// const john = {
//     height: 6.0,
//     weight: 70,
//     calculateMass: function(){
//         return this.weight / (Math.pow(this.height,2));
//     }
// };
// const victor = {
//     height: 5.5,
//     weight: 50,
//     calculateMass: function(){
//         return this.weight / (Math.pow(this.height,2));
//     }};

// if (victor.calculateMass() > john.calculateMass()) {
//     var bmi = true;
//     console.log("Is Victor's BMI higher than John's? " + bmi);
// } else {
//     bmi = false;
//     console.log("Is Victor's BMI higher than John's? " + bmi);
// }

// USING OBJECTS & ASKING FOR INPUT
const john = {
    height: prompt("Enter John's height (m): "),
    weight: prompt("Enter John's weight (kg): "),
    calculateMass: function(){
        return this.weight / (Math.pow(this.height,2));
    }
};
const victor = {
    height: prompt("Enter Victor's height (m): "),
    weight: prompt("Enter Victor's weight (kg): "),
    calculateMass: function(){
        return this.weight / (Math.pow(this.height,2));
    }};

if (victor.calculateMass() > john.calculateMass()) {
    var bmi = true;
    alert("Is Victor's BMI higher than John's? " + bmi);
} else {
    bmi = false;
    alert("Is Victor's BMI higher than John's? " + bmi);
}