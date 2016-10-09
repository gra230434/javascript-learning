function whatisprevious()
{

}

$(document).ready(function(){

  var outputanswer = 0;
  var tmpanswer = 0;
  var previous = 0;

  $("#input1").click(function(){
      tmpanswer = tmpanswer *10 + 1;
      $( "#output" ).text( tmpanswer );
  });
  $("#input2").click(function(){
      tmpanswer = tmpanswer *10 + 2;
      $( "#output" ).text( tmpanswer );
  });
  $("#input3").click(function(){
      tmpanswer = tmpanswer *10 + 3;
      $( "#output" ).text( tmpanswer );
  });
  $("#input4").click(function(){
      tmpanswer = tmpanswer *10 + 4;
      $( "#output" ).text( tmpanswer );
  });
  $("#input5").click(function(){
      tmpanswer = tmpanswer *10 + 5;
      $( "#output" ).text( tmpanswer );
  });
  $("#input6").click(function(){
      tmpanswer = tmpanswer *10 + 6;
      $( "#output" ).text( tmpanswer );
  });
  $("#input7").click(function(){
      tmpanswer = tmpanswer *10 + 7;
      $( "#output" ).text( tmpanswer );
  });
  $("#input8").click(function(){
      tmpanswer = tmpanswer *10 + 8;
      $( "#output" ).text( tmpanswer );
  });
  $("#input9").click(function(){
      tmpanswer = tmpanswer *10 + 9;
      $( "#output" ).text( tmpanswer );
  });

  $("#reset").click(function(){
    outputanswer = 0;
    tmpanswer = 0;
    previous = 0;
    $( "#tmpanswer" ).text( "" );
    $( "#output" ).text( 0 );
  });

  $("#add").click(function(){
    whatisprevious();
    previous = 1;
    $( "#tmpanswer" ).text( "+" );
    tmpanswer = 0;
  });

  $("#less").click(function(){
    whatisprevious();
    previous = 2;
    $( "#tmpanswer" ).text( "-" );
    tmpanswer = 0;
  });

  $("#multiply").click(function(){
    whatisprevious();
    previous = 3;
    $( "#tmpanswer" ).text( "X" );
    tmpanswer = 0;
  });

  $("#division").click(function(){
    whatisprevious();
    previous = 4;
    $( "#tmpanswer" ).text( "/" );
    tmpanswer = 0;
  });

  $("#equal").click(function(){
    whatisprevious();
    $( "#output" ).text( outputanswer );
    $( "#tmpanswer" ).text( "" );
    outputanswer = 0;
    tmpanswer = 0;
    previous = 0;
  });

  function whatisprevious()
  {
    switch (previous) {
      case 1:
        add();
        break;
      case 2:
        less();
        break;
      case 3:
        multiply();
        break;
      case 4:
        division();
        break;
      default:
        outputanswer = tmpanswer;
        break;
    }
  }

  function add()
  {
      outputanswer = outputanswer + tmpanswer;
  }

  function less()
  {
      outputanswer = outputanswer - tmpanswer;
  }

  function multiply()
  {
      outputanswer = outputanswer * tmpanswer;
  }

  function division()
  {
      outputanswer = outputanswer / tmpanswer;
  }
});
