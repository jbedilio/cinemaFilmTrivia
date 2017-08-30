//var clock = setTimeout (timeUp, 1000 * 240);
// var clock = setTimeout (timeUp, 1000 * 5);
//var questions;
$(document).ready(function() {

var $right = 0;
var $wrong = 0;
var $none  = 0;

var questions = [
                quest1 =        {
                                        q1:     "Who starred in both The Matrix and The Lord of the Rings trilogies?",
                                        a1:     ["Tom Cruise ","Liv Tyler ","Sean Bean ","Hugo Weaving ","Keanu Reeves"],
                                        qa1:    function () {
                                                return this.q1 + "<br>" + this.a1;
                                                }
                                },
                quest2 =        {
                                        q2:     "What film's cast boasts 2 former state governors?", 
                                        a2:     ["Armageddon ","Enemy of the State ","Terminator ","Predator ","Deep                    Impact"],
                                        qa2:    function () {
                                                return this.q2 + "<br>" + this.a2;
                                                }
                                },
                quest3 =        {
                                        q3:     "What film set at 1 for a record breaking 15 weeks in 1997-1998?",
                                        a3:     ["Good Will Hunting ","Titanic ","Boogie Nights " ,"Donnie Brasco" ,"The                      Rainmaker"],
                                        qa3:    function () {
                                                return this.q3 + "<br>" + this.a3;
                                                }
                                }
                ];   

/*var $newQuestionsDiv = $('#questions')
.append(quest1.qa1() + '<br><br>' + quest2.qa2() + '<br><br>' + quest3.qa3());*/

var $questionsDiv = $('#questions');
for(j = 0; j < questions.length; j++) {
  //for (i = 0; i < ; i++) {
  console.log($questionsDiv);
  var $newQuestionsDiv = $('<div>' + quest1.qa1() + '<br><br>' + quest2.qa2() + '<br><br>' + quest3.qa3() + '<br><br></div>');
  console.log($newQuestionsDiv);
  $questionsDiv.append($newQuestionsDiv);
  console.log($newQuestionsDiv);
};
























    
});