$(document).ready(function () {

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var timeRemaining = 16;
    var intervalID;
    var indexQandA = 0;
    var answered = false;
    var correct;
    var triviaGame;
    var questions = [{
            question: "What character does Chris Farley play in the movie Tommy Boy?",
            answer: ["Tommy Callahan", "Michael Rinton", "Richard Hayden"],
            correct: "1",
        },

        {
            question: "What is Tommy Boy's step mother's name?",
            answer: ["Tina Townsend", "Victoria Price", "Beverly Barish"],
            correct: "3",
        },
        {
            question: "What was likely Tommy's most said line in the movie?",
            answer: ["That's gonna leave a mark!", "Holy Snikes!", "Shut Up Richard!"],
            correct: "2",
        },
        {
            question: "What City and State did the movie take place in?",
            answer: ["Sandusky, Ohio", "Denver, Colorado", "Portland, Oregon"],
            correct: "1",
        }
    ]


    function startGame() {
        $(".start-button").remove();
        correctAnswers = 0;
        incorrectAnswers = 0;
        loadQandA();
    }

    function loadQandA() {
        answered = false;
        timeRemaining = 10;
        intervalID = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        correct = triviaGame[indexQandA].correct;
        var question = triviaGame[indexQandA].question;
        $(".question").html(question);
        for (var i = 0; i < 4; i++) {
            var answer = triviaGame[indexQandA].answer[i];
        }
        $("questions").click(function () {
            var id = $(this).attr("id");
            if (id === correct) {
                answered = true;
                $(".question").text(
                    "THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]
                );
                correctAnswer();
            } else {
                answered = true;
                $(".question").text(
                    "YOU CHOSE: " +
                    triviaGame[indexQandA].answer[id] +
                    ".....HOWEVER THE ANSWER IS: " +
                    triviaGame[indexQandA].answer[correct]
                );
                image: "assets/images/baconPancakes.jpg"
                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(intervalID);
            $(".question").text(
                "THE CORRECT ANSWER IS: " + triviaGame[indexQandA].answer[correct]
            );
            unAnswered();
        } else if (answered === true) {
            clearInterval(intervalID);
        } else {
            timeRemaining--;
            $(".timeRemaining").text(
                "YOU HAVE " + timeRemaining + " SECONDS TO CHOOSE"
            );
        }
    }

    function correctAnswer() {
        correctAnswers++;
        $(".timeRemaining")
            .text("YOU HAVE ANSWERED CORRECTLY!")
            .css({
                color: "#3D414F"
            });
        resetRound();
    }

    function incorrectAnswer() {
        incorrectAnswers++;
        $(".timeRemaining")
            .text("Are you a Tommy Boy fan?")
        resetRound();
    }

    $(".startButton").on("click", function () {
        $(".startButton");
        startGame();
    });
})