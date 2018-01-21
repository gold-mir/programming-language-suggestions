$(document).ready(function(){
  $(".form-question").hide();

  $(".next-button").click(function(){
    var currentQuestion = $(this).parent();
    currentQuestion.fadeOut('fast', function(){
      currentQuestion.next().fadeIn();
    });
  });

  $("#language-selector-quiz").submit(function(event){
    event.preventDefault();
    var answers = $("#language-selector-quiz input:checked");
    var totals = {
      java: 0,
      ruby: 0,
      csharp: 0,
    }
    answers.each(function(answerIndex, item){
      var combinedAnswerString = $(item).val();
      console.log(item);
      combinedAnswerString.split(",").forEach(function(answerString){
        var answer = answerString.split(":");
        totals[answer[0]] += parseInt(answer[1]);
      });
    });

    if(totals.ruby > totals.java && totals.ruby > totals.csharp){
      $("#ruby-info").fadeIn();
    } else if(totals.java > totals.csharp){
      $("#java-info").fadeIn();
    } else if(totals.csharp > totals.java){
      $("#csharp-info").fadeIn();
    } else {
      $("#any-info").fadeIn();
    }
  });
});
