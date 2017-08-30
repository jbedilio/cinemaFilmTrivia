//var clock = setTimeout (timeUp, 1000 * 240);
// var clock = setTimeout (timeUp, 1000 * 5);
//var questions;
$(document).ready(function () {

        var $right = 0;
        var $wrong = 0;

        /*var $triviaQA = {
                
                        Q: [          "Who starred in both The Matrix and The Lord of the Rings trilogies?",
                                      "Who starred in the Quentin Tarantino film Reservoir Dogs as Mr. Yellow?",
                                      
                                
                        ],


                        A: [        "Tom Cruise", "Liv Tyler", "Sean Bean", "Hugo Weaving", "Keanu Reeves", "Arnold                             Schwarzenegger","Sylvester Stalone", "Nicole Kidman", "Michael Madsen", "Steve                             Buscemi", "Jennifer Connelly", "Matt Damon", "Leonardo Dicaprio", "Tom Hanks",                             "Harrison Ford", "Morgan Freeman", "Adam Sandler","Woody Harrelson", "Bruce                                Willis", "Robin Williams", "Jesse Ventura", "Emma Watson", "Julia Roberts",                                "Cameron Diaz", "Amanda Peete", "Scarlett Johansson", "Stan Lee", "Chris Pratt"
                        ]
                        };*/


        /*var $answersF = [       "Armageddon", "Enemy of the State", "Terminator", "Predator", "Deep Impact", "Good Will Hunting",                           "Titanic ", "Boogie Nights ", "Donnie Brasco", "The Rainmaker"]*/

        var triviaQA = [{
                        question: "Who starred in both The Matrix and The Lord of the Rings trilogies?",
                        answer: ["Tom Cruise", "Liv Tyler", "Sean Bean", "Hugo Weaving", "Keanu Reeves"],
                        correct: "Hugo Weaving",
                },
                {
                        question: "What film's cast boasts 2 former state governors?",
                        answer: ["Armageddon ", "Enemy of the State ", "Terminator ", "Predator ",
                                 "Deep Impact"],
                        correct: "Predator",
                },
                {
                        question: "What film sat at #1 for a record breaking 15 weeks in 1997-1998?",
                        answer: ["Good Will Hunting ", "Titanic ", "Boogie Nights ", "Donnie Brasco",
                                 "The Rainmaker"],
                        correct: "Titanic",
                }
        ];

        $('#questions').html(triviaQA[0].question);
        
        var $form = $("<form>");
        $("#questions").append($form);

        for(let i = 0; i < triviaQA[0].answer.length; i++){

        var $radioBtn = $("<input type='radio' name='q1' value='" + triviaQA[0].answer[i] + "'>" + triviaQA[0].answer[i]+ "</input>");


        $($radioBtn).appendTo($form);
                /*if ($radioBtn.attr('value="Hugo Weaving"')) {
                        $right++;
                        $('#right').append($right);
                }else {
                        $wrong++;
                        $('#wrong').append($right);
                };*/
        };

        var $submit = ('#submit-btn');
        
        var $button = $('<input type="button" value="grade">');
        $button.html('Submit');
        $($submit).append($button);

        $($submit).on('click', function(grade) {
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
});


        // var $QADiv = $('#questions')
        // for (var i = 0; i < $triviaQA.length; i++) {
        //         for (var j = 0; j < $triviaQA[i].answer.length; j++) {
        //                 console.log('Question', $triviaQA[i].length, $triviaQA[i].answer);
        //                 var $input = $('<div><br><input type="radio" name="a" value="Hugo Weaving"> ' + $triviaQA[i].answer + '</div>');
        //                 console.log($input);
        //                 console.log($triviaQA[i].q);
        //                 //if ($triviaQA[j].q) {}
        //                 //$QADiv.html($triviaQA[j].q).append($input);
        //                 //console.log($QAdiv);

        //                 //if ($triviaQA[i][j].q))
        //                 /*+ '<br>' + quest2.a + '<br><input type="radio" name="b" value="Predator"> ' + quest2.a[j] + '<br>' +
        //                         quest3.qa() + '<br><input type="radio" name="c" value="Titanic"> ' + quest3.a[j] + '</div>');*/


        //                 //$questionsDiv.append($newQuestionsDiv);

        //         };
        // };
        /*.append(quest1.qa1() + '<br><br>' + quest2.qa2() + '<br><br>' + quest3.qa3());

        function qa(object) {
                
                for (i = 0; i < 5; i++) {
                  var newQdiv = '<input type="radio" name="a" value="answer"> ' + this.a[i] + ' ';
                }
                return this.q + '<br>' + this.a
        };

        qa(quest1);*/


        /*ar $questionsDiv = $('#questions');
        for (j = 0; j < quest1.a.length; j++) {
          var $newQuestionsDiv = 
            $('<div>' + quest1.qa() + '<br><input type="radio" name="a" value="Hugo Weaving"> ' + quest1.a[j] + '<br>' + quest2.qa() + '<br><input type="radio" name="b" value="Predator"> ' + quest2.a[j] + '<br>' + 
            quest3.qa() + '<br><input type="radio" name="c" value="Titanic"> ' + quest3.a[j] + '</div>');
            $questionsDiv.append($newQuestionsDiv);
        };*/

        /*for (j = 0; j < quest1.a.length; j++) {
                console.log(j);
                var $newQuestDiv = '<input type="radio" name="a" value="Hugo Weaving"> ' + quest1.a[j] + ' ';
                console.log($newQuestDiv);
                $newQuestionsDiv.append($newQuestDiv);
                console.log($newQuestionsDiv);
        };*/

});