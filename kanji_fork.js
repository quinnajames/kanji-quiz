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


// Refactoring data structure

var kanjiQuiz = [{char:"開", english:"open", on:"BUN", kun:"ki", number:64},
{char:"東", english:"east", on:"TOU", kun:"higashi", number:71},
{char:"明", english:"bright", on:"MEI", kun:"aka", number:64},
{char:"物", english:"thing", on:"BUTSU", kun:"mono", number:79},
{char:"答", english:"solution", on:"TOU", kun:"kota", number:161}
]


  var arraySize = kanjiQuiz.length;
  var quizQuestionOrder = 1;

  function changeKanji(order) {
    $("#kanjiShow").text(kanjiQuiz_chars[order]);
    quizQuestionOrder = order;
  }
  changeKanji(quizQuestionOrder);

　// utility function
function swapClassesOnId(id, oldClass, newClass) {
	id.removeClass(oldClass);
	id.addClass(newClass);
}

	function changeKanjiFont() {
		if ($("#kanjiShow").hasClass("font-sans")) {
			swapClassesOnId($("#kanjiShow"),"font-sans", "font-serif");
		}
		else {
			swapClassesOnId($("#kanjiShow"),"font-serif", "font-sans");
		}
	}
  $("#font-toggle").click(function() {
	  changeKanjiFont();
	})

	function doSubmit() {
		var englishEntered = $('#english').val();

		//console.log(kanjiQuiz[quizQuestionOrder].english);
		//console.log(kanjiQuiz[quizQuestionOrder])
		var englishAnswer = kanjiQuiz[quizQuestionOrder].english;
		if (englishEntered === englishAnswer)
		{
			 var newQuestionOrder = Math.floor((Math.random() * arraySize) + 0);
			 while (newQuestionOrder === quizQuestionOrder)
			 {
				 newQuestionOrder = Math.floor((Math.random() * arraySize) + 0);
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

	$("#english").keypress(function(e) {
			if (e.which == 13) {
    		doSubmit();
		}
	});

	$("#englishInput").click(function(e) {
		doSubmit();
	});

});
