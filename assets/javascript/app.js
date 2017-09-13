$(document).ready(function () {


        $('#title, #clock, #questions, #submit-btn, #right, #wrong').hide();

        var $start = $('<button type="button" class="start" value="start">Start</button>');
        
        $('#startUp').append($start);
        $($start).on('click', function() {
                $('#title, #clock, #questions, #submit-btn').show();
                $('#startUp').hide();
        });
        setTimeout(function(){
                $('#title, #clock, #questions, #submit-btn').hide();
                $('#right, #wrong').show();
        }, 1000 * 30);
        
        var $right = 0;
        var $wrong = 0;

        var triviaQA = [{
                        question: "Who starred in both The Matrix and The Lord of the Rings trilogies?",
                        answer:   ["Tom Cruise ", "Liv Tyler ", "Sean Bean ", "Hugo Weaving ", "Keanu Reeves "],
                },
                {
                        question: "What film's cast boasts 2 former state governors?",
                        answer:   ["Armageddon ", "Enemy of the State ", "Terminator ", "Predator ", "Deep Impact "],
                },
                {
                        question: "What film sat at #1 for a record breaking 15 weeks in 1997-1998?",
                        answer:   ["Good Will Hunting ", "Titanic ", "Boogie Nights ", "Donnie Brasco ", 
                                   "The Rainmaker"],
                },
                {       
                        question: "Who authored the original Shawshank Redemption Novella?",
                        answer:   ["J.R.R. Tolkien ", "J.K. Rowling ", "Stephen King ", "M. Knight Shyamalan ", "Danielle Steel "],
                },
                {       
                        quesiton: "How many times does the film South Park: Bigger Longer and Uncut use the f-bomb?",
                        answer:   ["19 ", "55 ", "99 ", "149 ", "199 "],
                }
        ];

        /*Minimum Viable Product
        $('#questions').html(triviaQA[0].question + '<br>');
        var $form = $("<form>");
        $("#questions").append($form);

        for (var j = 0; j < triviaQA[0].answer.length; j++) {
                var $radioBtn = $("<input type='radio' name='q1' value='" + triviaQA[0].answer[j] + "'>" + triviaQA[0].answer[j] + "</input><br>");
                $($radioBtn).appendTo($form);

        };
        
        my working loop that loops each questions with the possible answers with radio buttons -- it works but my grader at end of code doesn't work*/

        for(var i = 0; i < triviaQA.length; i++) {
                var $form = $("<form>");
                $('#questions').append('<br><br>' + triviaQA[i].question + '<br>');
                for (var j = 0; j < triviaQA[i].answer.length; j++) {
                        var $radioBtn = $('<input>' + triviaQA[i].answer[j] + '</input>')
                        .attr('type', 'radio')
                        .attr('name', 'q' + [i])
                        .attr('value', triviaQA[i].answer[j]);
                        $($radioBtn).appendTo($form);
                $("#questions").append($form);
                };
        };
                /*var $radioBtn = $('<input><br>')
                .attr('name', 'q' + [i])
                .attr('value', + triviaQA[i].answer[j]);
                $($radioBtn).appendTo($form);

                var $radioBtn = $("<input type='radio' name='q" + [i] +"' value='" + triviaQA[i].answer[j] + "'> " + triviaQA[i].answer[j] + "</input><br>");
                $($radioBtn).appendTo($form);*/


        var $submit = ('#submit-btn');
        
        var $button2 = $('<br><br><input>') // name="submit" type="button" value="submit">');
                .attr('name', 'submit')
                .attr('type', 'button')
                .attr('value', 'submit');
                $button2.html('Submit');
        $($submit).append($button2);

        /*$($submit).on('click', function grade() {
                $('#title, #clock, #questions, #submit-btn').hide()
                $('#right, #wrong').show();
                var a1 = document.getElementsByName('q1')
                for (var i = 0; i < a1.length; i++) {
                        if (a1[i].checked) {
                                if (a1[i].value == "Hugo Weaving") {
                                        $right++;
                                        $('#right').html('Correct: ' + $right);
                                } else {
                                        $wrong++
                                        $('#wrong').html('Incorrect: ' + $wrong);
                                };
                        };
                };
        });*/

        //My not quite working loop to grade all the questions with one submit
        $($submit).on('click', function grade() {
                $('#title, #clock, #questions, #submit-btn').hide()
                $('#right, #wrong').show();
                var a0 = document.getElementsByName('q0');
                for (var i = 0; i < a0.length; i++) {
                        if (a0[i].checked) {
                                if (a0[i].value == "Hugo Weaving ") {
                                        $right++;
                                        $('#right').html('Correct: ' + $right);
                                } else {
                                        $wrong++;
                                        $('#wrong').html('Incorrect: ' + $wrong);
                                        };
                                };
                };
                var a1 = document.getElementsByName('q1');
                for (var j = 0; j < a1.length; j++) {
                        if (a1[j].checked) {
                                if (a1[j].value == "Predator ") {
                                        $right++;
                                        $('#right').html('Correct: ' + $right);
                                } else {
                                        $wrong++;
                                        $('#wrong').html('Incorrect: ' + $wrong);
                                        };
                                };
                };
                var a2 = document.getElementsByName('q2');
                for (var l = 0; l < a2.length; l++) {
                        if (a2[l].checked) {
                                if (a2[l].value == "Titanic ") {
                                        $right++;
                                        $('#right').html('Correct: ' + $right);
                                } else {
                                        $wrong++;
                                        $('#wrong').html('Incorrect: ' + $wrong);
                                        };
                                };
                        };
                
                
                
                });



        });
