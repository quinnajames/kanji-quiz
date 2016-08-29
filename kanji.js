$(document).ready(function(){

  // Want to factor this part out
	$("#kanjiShow").addClass("font-sans");

	var kanjiQuiz_chars = ["開","東","明","物", "答", "頭", "同", "道", "読", "内"];
	var kanjiQuiz_english = ["open", "east", "bright", "thing", "solution",
"head", "same", "roadway", "read", "inside"];

// TODO
// (not 鯔)
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
  var quizQuestionOrder = 1;

  function changeKanji(order) {
    $("#kanjiShow").text(kanjiQuiz_chars[order]);
    quizQuestionOrder = order;
  }
  changeKanji(quizQuestionOrder);


	function changeKanjiFont() {
		if ($("#kanjiShow").hasClass("font-sans")) {
			$("#kanjiShow").removeClass("font-sans");
			$("#kanjiShow").addClass("font-serif");
		}
		else {
			$("#kanjiShow").removeClass("font-serif");
			$("#kanjiShow").addClass("font-sans");
		}
	}
  $("#font-toggle").click(function() {
	  changeKanjiFont();
	})

	$("#english").keypress(function(e) {
			if (e.which == 13) {

        var englishEntered = $('#english').val();

        var englishAnswer = kanjiQuiz_english[quizQuestionOrder];
        if (englishEntered === englishAnswer)
        {
					 var newQuestionOrder = Math.floor((Math.random() * kanjiQuiz_chars.length) + 0);
					 while (newQuestionOrder === quizQuestionOrder)
					 {
						 newQuestionOrder = Math.floor((Math.random() * kanjiQuiz_chars.length) + 0);
					 }
            changeKanji(newQuestionOrder);
  			     $("#kanjiContainer").css("background-color", "green");
             $("#answerShow").html('YES, this is <b>' + englishAnswer + '</b>');
        }
        else {
          $("#kanjiContainer").css("background-color", "red");
          $("#answerShow").html('NO, actually, this is <b>' + englishAnswer + '</b>');
        }

        $('#english').val('');

		}
	});



});
