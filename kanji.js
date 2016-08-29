$(document).ready(function(){

  // Want to factor this part out
	$("#kanjiShow").addClass("font-sans");

	var kanjiQuiz_chars = ["開","東","明","物", "答",
	"頭", "同", "道", "読", "内",
	"米", "来", "半", "橋", "館",
	"階", "指", "湖", "期", "朝",
	"早", "草", "苦", "幸", "業"];
	var kanjiQuiz_english = ["open", "east", "bright", "thing", "solution",
"head", "same", "roadway", "read", "inside",
"rice", "come", "half", "bridge", "large building",
"storey", "finger", "lake", "period", "morning",
"early", "grass", "suffering", "happiness", "profession"];

// TODO
// (not 鯔)


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
