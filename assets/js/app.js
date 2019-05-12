//defining onclick functions that run in the window
window.onload = function() {
    $("#start-button").on("click", stopwatch.start);
    $(".choice").on("click", stopwatch.correctCount);
    $("#done-button").on("click", stopwatch.stop);
    $("#restart-button").on("click", stopwatch.reset);
};
var intervalId;
var clockRunning = false;
var correctAnswers = 0;
//clock functions
var stopwatch = {
    // setting start time to 60 seconds
    time: 60,
    // function for answers & update score
    correctCount: function() {
        //check if user choice is "correct"
        if (clockRunning) {
            var selection = $(this).val().trim();
            if (selection === "correct" && correctAnswers < 7) {
                correctAnswers++
            }
            //if user answers 7 correctly game is over
            else if (correctAnswers > 7) {
                stopwatch.stop();
            }
        }
        //must click on start before the game will let user select answer
        else if (!clockRunning) {
            event.preventDefault();
        }
    },
    //reset function
    reset: function() {
        //timer stops and everthing will reset
        stopwatch.stop();
        stopwatch.time = 60;
        correctAnswers = 0;
        $("#time-remaining").text("1:00");
        $("input[type='radio']").prop('checked', false);
    },
    //start clock
    start: function() {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },
    //stop clock and end game
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
        //starts at 1:00 min
        $("#time-remaining").html("Score:" + correctAnswers + "/7");
    },
    //function initialized in the start function, counts down in intervals of 1000 ms
    count: function() {
        //as long as there is still time left on the clock, keep counting down
        if (stopwatch.time > 0) {
            stopwatch.time--;
            var converted = stopwatch.timeConverter(stopwatch.time);
            //time remaining displays in the header
            $("#time-remaining").text(converted);
        }
        //count down will stop when timer reaches 0
        else {
            stopwatch.stop();
        }
    },
    //display in minutes/secs
    timeConverter: function(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
        }
};                