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

var kanjiQuiz = [
	{char:"開",id:"",english:"open",onreadings:"",kunreadings:"", vocabkanji:"", vocabromaji:"", vocabtrans:""},
	{char:"東",id:"71",english:"east",onreadings:"TOU",kunreadings:"higashi", vocabkanji:"東方", vocabromaji:"touhou", vocabtrans:"eastward; the east"},
	{char:"明",id:"",english:"bright",onreadings:"",kunreadings:"", vocabkanji:"", vocabromaji:"", vocabtrans:""},
	{char:"物",id:"",english:"thing",onreadings:"",kunreadings:"", vocabkanji:"", vocabromaji:"", vocabtrans:""},
	{char:"答",id:"",english:"solution",onreadings:"",kunreadings:"", vocabkanji:"", vocabromaji:"", vocabtrans:""},
];


  var arraySize = kanjiQuiz_chars.length;
  var quizQuestionOrder = 1;
	fillInfobox(kanjiQuiz[quizQuestionOrder]);

	function fillInfobox(qqo) {
		$("#onReadings").html(qqo.onreadings);
		$("#kunReadings").html(qqo.kunreadings);
		$("#vocabulary").html(qqo.vocabkanji + " " + qqo.vocabromaji + " " + qqo.vocabtrans);
	}

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

		var englishAnswer = kanjiQuiz_english[quizQuestionOrder];
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

	$("#infobox-toggle").click(function(e) {
		console.log($("#infobox"))
		console.log($("#infobox").css("display"));
		if ( $("#infobox").css("display") === "none" )
		{
			$("#infobox").css("display", "block");

		}
		else {
			$("#infobox").css("display", "none");
		}
	});




});

// Function for tab display based on a tutorial by W3S - http://www.w3schools.com/howto/howto_js_tabs.asp
	function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "inline-block";
    evt.currentTarget.className += " active";
}
