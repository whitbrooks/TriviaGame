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

    // store variable for user selection
    var userResponse = $("input").on("change", function() {
        console.log($( "input:checked" ).val());
    });

    // store correct and incorrect answers
    var right = 0;
    var wrong = 0;

// FUNCTIONS


// display question and answers
function display() {
    $("#question").append(questionSet[i].question);   
    $("#one").append(questionSet[i].optionA);   
    $("#two").append(questionSet[i].optionB);   
    $("#three").append(questionSet[i].optionC);   
    $("#four").append(questionSet[i].optionD); 
    console.log(questionSet[i].question);

    }

// determine if answer selected is correct
function rightAnswer() {
    if (userResponse == questionOne.optionD || questionTwo.optionA || questionThree.optionD || questionFour.optionC || questionFive.optionC) {
    right++;
    alert("correct!");
    console.log(wins);
    } else if (userResponse != questionOne.optionD || questionTwo.optionA || questionThree.optionD || questionFour.optionC || questionFive.optionC){
        wrong++
        alert("oops, incorrect!");
    }
}

// alert user when time's up
function timesUp() {
    alert("time's up!")
    
}


// end quiz and summarize score
function endQuiz() {

// start over button

}




// CALL FUNCTIONS
// load html before running script
$(document).ready(function() {

    // start the clock and quiz

    $("#start").click(function(){
        display(i=0);
    });


});