// VARIABLES
    
var questionOne = {
    question: "What is the most visited park in the National Park System?",
    optionA: "Yosemite National Park",
    optionB: "Yellowstone National Park",
    optionC: "Zion National Park",
    optionD: "Great Smoky Mountains National Park"
};

var questionTwo = {
    question: "What shape is the emblem of the National Park Service?",
    optionA: "Arrowhead",
    optionB: "Diamond",
    optionC: "Log Cabin",
    optionD: "Redwood tree"
};

var questionThree = {
    question: "Which of the following exists within the boundaries of a national park?",
    optionA: "The highest point in North America",
    optionB: "The longest cave system in the world",
    optionC: "The deepest lake in the US",
    optionD: "All of the above"
};

var questionFour = {
    question: "Yellowstone National Park's geothermal Morning Glory Pool has changed color over the years. What is responsible for the change?",
    optionA: "Bird droppings",
    optionB: "Sulfur evaporation",
    optionC: "Trash",
    optionD: "Climate change"
};

var questionFive = {
    question: "Which of the following presidents more than doubled the acreage of the National Park System?",
    optionA: "Calvin Coolidge",
    optionB: "Richard Nixon",
    optionC: "Jimmy Carter",
    optionD: "George H.W. Bush"
};

var questionSet = [questionOne, questionTwo, questionThree, questionFour, questionFive];

// declare variables for correct and incorrect answers
var right = 0;
var wrong = 0;

// delcare variables for user responses
var response = 0;
var rightAnswer = 0;

// declare variables for timer
var number = 15;
var intervalId;



// FUNCTIONS


// display question and answers
function display(i) {
    $("#question").text(questionSet[i].question);   
    $("#one").text(questionSet[i].optionA);   
    $("#two").text(questionSet[i].optionB);   
    $("#three").text(questionSet[i].optionC);   
    $("#four").text(questionSet[i].optionD); 

    };

// determine if answer selected is correct
function checkAnswer(response, rightAnswer) {
    if (response == rightAnswer) {
    right++;
    alert("correct!");
    console.log(right);
    } else {
        wrong++
        alert("oops, incorrect!");
        console.log(wrong);
    }
};

// set time
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

//  count down clock
function decrement() {
    number--;
    $("#time").html("<div>" + number + "</div>");
    if (number === 0) {
        alert("Time's up. Move on to next question.");
        wrong++;
        display(i=0);
    }
}
 

// // end quiz and summarize score
// function endQuiz() {


// }


// CALL FUNCTIONS
// load html before running script
$(document).ready(function() {

    // start the clock and quiz

    $("#start").click(function(){
        display(i=0);
        questionSet.shift();
        run();
    });

    
    // store value for user response
    $("input").on("change", function() {
        response = ( $("input:checked").val() ); 
        console.log(response);
        checkAnswer(response, 4);
    
    });          
        

        
});
