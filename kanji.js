$(document).ready(function(){

	var kanjiQuiz_chars = ["開","東","明","物", "答", "頭", "同", "道", "読", "内"];
	var kanjiQuiz_english = ["open", "east", "bright", "thing", "solution",
"head", "same", "roadway", "read", "inside"];
  var kanjiQuiz_vocab = [
    ["開放", "かいほう", "kaihou", "open; throw open; liberalization"],
["東", "ひがし", "higashi", "east"],
["明るい", "あか", "akarui", "bright"],
["物", "ぶつ", "butsu [ON reading]", "stock; products"],
["答え", "こたえ", "kotau", "answer; reply; response; solution"],
["同じ", "おなじ", "onaji", "same; identical; equal; uniform; similar; common (origin); changeless; alike"],
["", "", "", ""],
["", "", "", ""],
];

  var arraySize = kanjiQuiz_chars.length;
	// var kanjiQuiz = {characters: ["開","東","明","物"], english: ["open", "east", "bright", "thing"]};
  var quizQuestionOrder = 1;

  function changeKanji(order) {
    $("#kanjiShow").text(kanjiQuiz_chars[order]);
    quizQuestionOrder = order;
  	//console.log(order);
  }
  changeKanji(quizQuestionOrder);

	$("#english").keypress(function(e) {
    //console.log('keypress');
			if (e.which == 13) {

        //console.log("on keypress, qQO = " + quizQuestionOrder);
        var englishEntered = $('#english').val();

        var englishAnswer = kanjiQuiz_english[quizQuestionOrder];
        if (englishEntered === englishAnswer)
        {
            changeKanji(Math.floor((Math.random() * kanjiQuiz_chars.length) + 0));
  			     $("#kanjiContainer").css("background-color", "green");
             $("#answerShow").html('YES, this is <b>' + englishAnswer + '</b>');
        }
        else {
          $("#kanjiContainer").css("background-color", "red");
          $("#answerShow").html('NO, actually, this is <b>' + englishAnswer + '</b>');
        }

        $('#english').val('');

      // return false;
		}
	});



});
