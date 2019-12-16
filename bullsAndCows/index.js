$(function() {
    var num1, num2, num3, num4;
    var combined;
    var guessCount = 0;

    //getting the random numbers using 4 random digits
    do {
        num1 = Math.floor(Math.random() * 9) + 1;
        num2 = Math.floor(Math.random() * 9) + 1;
        num3 = Math.floor(Math.random() * 9) + 1;
        num4 = Math.floor(Math.random() * 9) + 1;
    } while (num1 ==  num2 || num1 == num3 || num1 == num4 || num2 == num3 || num2 == num4 ||  num3 == num4);

    //turning them all into one number
    combined = num1 + "" + num2 + "" + num3 + "" + num4;

    $('#showNum').on('click', function () {
       $('#ranNum').html(combined);
    });


    //when you submit your guess
    $('#submit').on('click', function () {

        var isValid = $('#form').validate().form();
        if(isValid) {
            //taking the player guess and seperating it into 4 variables to be tested individually
            var playerGuess = $('#guess').val();
            var guess1 = playerGuess.charAt(0);
            var guess2 = playerGuess.charAt(1);
            var guess3 = playerGuess.charAt(2);
            var guess4 = playerGuess.charAt(3);
            if (guess1 == guess2 || guess1 == guess3 || guess1 == guess4 || guess2 == guess3 || guess2 == guess4 || guess3 == guess4)
            {
                //error when there are duplicates
                $('#duplicateError').html("* You can not put in duplicate numbers.");

            } else {
                //if there are no duplicates then run as normal
                $('#duplicateError').html("");
                var bullCount = 0;
                var cowCount = 0;
                guessCount++;
                $('#guessCount').html("Total Guesses: " + guessCount);

                //lots of IF statements to determine cows and bulls

                if (guess1 == num1 || guess1 == num2 || guess1 == num3 || guess1 == num4) {
                    if (guess1 == num1) {
                        bullCount++;
                    } else {
                        cowCount++;
                    }
                }
                if (guess2 == num1 || guess2 == num2 || guess2 == num3 || guess2 == num4) {
                    if (guess2 == num2) {
                        bullCount++;
                    } else {
                        cowCount++;
                    }
                }
                if (guess3 == num1 || guess3 == num2 || guess3 == num3 || guess3 == num4) {
                    if (guess3 == num3) {
                        bullCount++;
                    } else {
                        cowCount++;
                    }
                }
                if (guess4 == num1 || guess4 == num2 || guess4 == num3 || guess4 == num4) {
                    if (guess4 == num4) {
                        bullCount++;
                    } else {
                        cowCount++;
                    }
                }

                //display results
                $('#bullTest').html(bullCount);
                $('#cowTest').html(cowCount);
                $('#bullPic').html("");
                $('#cowPic').html("");

                //making little cows and bulls to display
                for (var i = 0; i < bullCount; i++) {
                    $('#bullPic').append("&#X1F402;");
                }

                for (var j = 0; j < cowCount; j++) {
                    $('#cowPic').append("&#X1F404;");
                }

                //win condition
                if (bullCount == 4) {
                    $('#winner').html("Congratulations! You guessed the number.")
                }
            }
        }
    });

    //validation function and message
    $.extend($.validator.messages, {
        required: "* Please input a valid number."
    });

    $('#form').validate({
        errorClass: "formError",
        rules: {
            guess: {
                required: true,
                digits: true,
                range: [1111,9999]
            }
        }
    })



});