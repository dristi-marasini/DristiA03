
/**
 * Simple tic-tac-toe game example. 
 */
const game = (function () {
 
  $( "#playAgain" ).click(function() {
    $( "#upper-left" ).empty();
    $( "#upper-mid" ).empty();
    $( "#upper-right" ).empty();
    $( "#center-left" ).empty();
    $( "#center-mid" ).empty();
    $( "#center-right" ).empty();
    $( "#lower-left" ).empty();
    $( "#lower-mid" ).empty();
    $( "#lower-right" ).empty();
    $("#winner-Status").empty();
    window.location.reload();
  });
  const cellElements = [
   $('#upper-left')[0],
   $('#upper-mid')[0],
    $('#upper-right')[0],
    $('#center-left')[0],
    $('#center-mid')[0],
    $('#center-right')[0],
    $('#lower-left')[0],
    $('#lower-mid')[0],
    $('#lower-right')[0]
  ];

  for (let i = 0; i < cellElements.length; i++) {
    cellElements[i].addEventListener('click', async function () {

      // add player's X
      const isValidMove = await addX(cellElements[i]);

      if (isValidMove) {

        // choose computer's O
        const j = await findBestMove(cellElements);

        // pause, then add computer's O
        //await new Promise((resolve) => setTimeout(() => resolve(), 2000));
        await addO(cellElements[j]);
      }

    });
  }

  async function findBestMove(arr) {
  
    for (let n = 0; n < arr.length; n++) {
      if (arr[n].innerHTML == " "  ){
    
         return n;
     }
   
    }
  }

  async function addX(cellElement) {
    if (cellElement.innerHTML != " " && cellElement.innerHTML ) {
      return false;
    }
   /*const headingElement = document.createElement("h1");
   headingElement.appendChild(textNode);*/
   const textNode = document.createTextNode("X");
   cellElement.appendChild(textNode);
   WhoWon("X");
   return true;
  }

  async function addO(cellElement) {
    if (cellElement.innerHTML != " " && cellElement.innerHTML ) { 
      return; 
    }
    /*const headingElement = document.createElement("h1");
    headingElement.appendChild(textNode);*/
    const textNode = document.createTextNode("O");
    cellElement.appendChild(textNode);
    WhoWon("O");
  }
  function WhoWon(play){
    let flag = 0;
    if(cellElements[0].innerText == play && cellElements[1].innerText == play && cellElements[2].innerText== play ){
      flag = 1;
    }
    else if(cellElements[3].innerText == play && cellElements[4].innerText == play && cellElements[5].innerText == play){
      flag = 1;
    }
    else if(cellElements[6].innerText == play && cellElements[7].innerText == play && cellElements[8].innerText == play){
      flag = 1;
    }
    else if(cellElements[0].innerText == play && cellElements[3].innerText == play && cellElements[6].innerText == play){
      flag = 1;
    }
    else if(cellElements[1].innerText == play && cellElements[4].innerText == play && cellElements[7].innerText == play){
      flag = 1;
    }
    else if(cellElements[2].innerText == play && cellElements[5].innerText == play && cellElements[8].innerText == play){
      flag = 1;
    }
    else if(cellElements[0].innerText == play && cellElements[4].innerText == play && cellElements[8].innerText == play){
      flag = 1;
    }
    
    else if(cellElements[6].innerText == play && cellElements[4].innerText == play && cellElements[2].innerText == play){
      flag = 1;
    }
    let count = 0;
    for( let i=0;i<cellElements.length;i++){
        if(cellElements[i].innerText != " " && cellElements[i].innerText) {
          count += +1;
        }
    }
    if(count == 9 && !flag){
      flag = 1;
      play = "Draw";
    }
    if(flag){
      if(play == "Draw"){
        $("#who-won").html("Draw");
        alert("Draw Game, play again");
      }
      else{
        $("#who-won").html("Congratulations! "+"'"+play+"' Won!");
        alert("Congratulations! "+"'"+play+"' Won!");
      }
      $("#who-won").show(); 
    }
  }
})();