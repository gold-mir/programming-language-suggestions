$(document).ready(function(){

  $(".next-button").click(function(){
    var currentQuestion = $(this).parent();
    currentQuestion.fadeOut('fast', function(){
      console.log(currentQuestion.next().index());
      currentQuestion.next().fadeIn();
    });

  });
});
