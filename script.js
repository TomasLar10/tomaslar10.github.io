var xoro = "X";
var used_space = 0;

const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

var xState = [];
var oState = [];
function changecolor(element, num){

  used_space += 1;
  
  element.style.pointerEvents = "none";
  if (xoro == "X"){
    
    xState.push(num);
    element.style.color = "red";
    element.innerHTML = xoro;
    xoro = "O";
  }else{
    oState.push(num);
    element.style.color = "blue";
    element.innerHTML = xoro;
    xoro = "X";
  }
  check = checkWin()
  if (check == "x"){
    document.getElementById("turn").innerHTML = "X Won";
    const buttons = document.getElementsByClassName("column");
    for(let i = 0; i < buttons.length; i++){
      buttons[i].style.pointerEvents = "none";
    }
  } else if (check == "o"){
    document.getElementById("turn").innerHTML = "O Won";
    const buttons = document.getElementsByClassName("column");
    for(let i = 0; i < buttons.length; i++){
      buttons[i].style.pointerEvents = "none";
    }
  } else if (used_space == 9){
    document.getElementById("turn").innerHTML = "It's a tie";
  } else{
    document.getElementById("turn").innerHTML = "It's " + xoro + "'s turn";
  }

}

function checkWin(){
  //document.getElementById("test").innerHTML = xState + "\n" + oState
  xState.sort(function(a, b){return a-b});
  oState.sort(function(a, b){return a-b});
    for (let i = 0; i < winConditions.length; i++){
    if (xState.includes(winConditions[i][0]) && xState.includes(winConditions[i][1]) && xState.includes(winConditions[i][2])){
        return "x";
    } else if (oState.includes(winConditions[i][0]) && oState.includes(winConditions[i][1]) && oState.includes(winConditions[i][2])){
        return "o";
    }
}
    return false;
}
