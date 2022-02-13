var textSplit = [];
const squares = ["bb", "bi", "bn", "bg", "bo",
                 "ib", "ii", "in", "ig", "io",
                 "nb", "ni", "nn", "ng", "no",
                 "gb", "gi", "gn", "gg", "go",
                 "ob", "oi", "on", "og", "oo"];



// Function to clear out the main-content div
function clearDiv() {
  document.getElementById("main-content").innerHTML = "";
}

function clearWinnerDiv() {
  document.getElementById("winner").innerHTML = "";
}


function showTextField() {
  clearDiv()
  let html = `
    <p>Each new line will be a new item</p>
  `;
  let form = `
    <form>
      <label for="bingoList">Enter your bingo items:</label><br/>
      <textarea id="bingoList" name="bingoList" rows="10" cols="50"></textarea>
    </form>
    <button type='button' class='btn btn-light btn-small' id='getTextButton'>Create Board</button>
  `
  document.getElementById("main-content").innerHTML = html + form;
  document.getElementById("getTextButton").addEventListener("click", getText, false);
}


function getText() {
  let text = document.getElementById("bingoList").value;
  textSplit = text.split(/\r?\n/);

  clearDiv()
  showBoard()
}


function freeSpace() {
  document.getElementById("nn").innerHTML = "Free Space";
  document.getElementById("nn").setAttribute("class", "white")
}


function fillBoard() {
  function checkEmpty(value, index, array) {
      //console.log("Value = " + value);
      //console.log("Index = " + index);
      //console.log("Array = " + array);
      if (value == "") {
        textSplit.splice(index, 1);
      }
    }


  function fillSquares(value, index, array) {
    document.getElementById(value).setAttribute("class", "grey");
    document.getElementById(value).innerHTML = selected[index];
  }

  textSplit.forEach(checkEmpty);
  textSplit.forEach(checkEmpty);
  textSplit.forEach(checkEmpty);
  textSplit.forEach(checkEmpty);
  const shuffled = textSplit.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 25);
  
  squares.forEach(fillSquares);

  freeSpace()
}


function showBoard() {
  let board = `
    <div class='winner text-light' id='winner'></div>
    <div class='bingoboard text-dark'>
      <div id='bb' class='grey' onclick='changeBackgroundColor(this)'>bb</div>
      <div id='bi' class='grey' onclick='changeBackgroundColor(this)'>bi</div>
      <div id='bn' class='grey' onclick='changeBackgroundColor(this)'>bn</div>
      <div id='bg' class='grey' onclick='changeBackgroundColor(this)'>bg</div>
      <div id='bo' class='grey' onclick='changeBackgroundColor(this)'>bo</div>
      <div id='ib' class='grey' onclick='changeBackgroundColor(this)'>ib</div>
      <div id='ii' class='grey' onclick='changeBackgroundColor(this)'>ii</div>
      <div id='in' class='grey' onclick='changeBackgroundColor(this)'>in</div>
      <div id='ig' class='grey' onclick='changeBackgroundColor(this)'>ig</div>
      <div id='io' class='grey' onclick='changeBackgroundColor(this)'>io</div>
      <div id='nb' class='grey' onclick='changeBackgroundColor(this)'>nb</div>
      <div id='ni' class='grey' onclick='changeBackgroundColor(this)'>ni</div>
      <div id='nn' class='grey' onclick='changeBackgroundColor(this)'>nn</div>
      <div id='ng' class='grey' onclick='changeBackgroundColor(this)'>ng</div>
      <div id='no' class='grey' onclick='changeBackgroundColor(this)'>no</div>
      <div id='gb' class='grey' onclick='changeBackgroundColor(this)'>gb</div>
      <div id='gi' class='grey' onclick='changeBackgroundColor(this)'>gh</div>
      <div id='gn' class='grey' onclick='changeBackgroundColor(this)'>gn</div>
      <div id='gg' class='grey' onclick='changeBackgroundColor(this)'>gg</div>
      <div id='go' class='grey' onclick='changeBackgroundColor(this)'>go</div>
      <div id='ob' class='grey' onclick='changeBackgroundColor(this)'>ob</div>
      <div id='oi' class='grey' onclick='changeBackgroundColor(this)'>oi</div>
      <div id='on' class='grey' onclick='changeBackgroundColor(this)'>on</div>
      <div id='og' class='grey' onclick='changeBackgroundColor(this)'>og</div>
      <div id='oo' class='grey' onclick='changeBackgroundColor(this)'>oo</div>
    </div>
        `; 
  document.getElementById("main-content").innerHTML = board;
  fillBoard();
}


function changeBackgroundColor(divObj) {
  currentid = divObj.getAttribute("id");
  currentclass = divObj.getAttribute("class");
  if (currentclass == 'grey'){
    divObj.setAttribute("class", "white");
  } else if (currentclass == 'white'){
    divObj.setAttribute("class", "grey");
  }
  checkWin();
}


function checkWin() {
  if (
      document.getElementById("bb").className == "white" &&
      document.getElementById("bi").className == "white" &&
      document.getElementById("bn").className == "white" &&
      document.getElementById("bg").className == "white" &&
      document.getElementById("bo").className == "white" 
    ||
      document.getElementById("bb").className == "white" &&
      document.getElementById("ib").className == "white" &&
      document.getElementById("nb").className == "white" &&
      document.getElementById("gb").className == "white" &&
      document.getElementById("ob").className == "white" 
    ||
      document.getElementById("ib").className == "white" &&
      document.getElementById("ii").className == "white" &&
      document.getElementById("in").className == "white" &&
      document.getElementById("ig").className == "white" &&
      document.getElementById("io").className == "white" 
    ||
      document.getElementById("bi").className == "white" &&
      document.getElementById("ii").className == "white" &&
      document.getElementById("ni").className == "white" &&
      document.getElementById("gi").className == "white" &&
      document.getElementById("oi").className == "white" 
    ||
      document.getElementById("nb").className == "white" &&
      document.getElementById("ni").className == "white" &&
      document.getElementById("nn").className == "white" &&
      document.getElementById("ng").className == "white" &&
      document.getElementById("no").className == "white" 
    ||
      document.getElementById("bn").className == "white" &&
      document.getElementById("in").className == "white" &&
      document.getElementById("nn").className == "white" &&
      document.getElementById("gn").className == "white" &&
      document.getElementById("on").className == "white" 
    ||
      document.getElementById("gb").className == "white" &&
      document.getElementById("gi").className == "white" &&
      document.getElementById("gn").className == "white" &&
      document.getElementById("gg").className == "white" &&
      document.getElementById("go").className == "white" 
    ||
      document.getElementById("bg").className == "white" &&
      document.getElementById("ig").className == "white" &&
      document.getElementById("ng").className == "white" &&
      document.getElementById("gg").className == "white" &&
      document.getElementById("og").className == "white" 
    ||
      document.getElementById("ob").className == "white" &&
      document.getElementById("oi").className == "white" &&
      document.getElementById("on").className == "white" &&
      document.getElementById("og").className == "white" &&
      document.getElementById("oo").className == "white" 
    ||
      document.getElementById("bo").className == "white" &&
      document.getElementById("io").className == "white" &&
      document.getElementById("no").className == "white" &&
      document.getElementById("go").className == "white" &&
      document.getElementById("oo").className == "white" 
    ||
      document.getElementById("bb").className == "white" &&
      document.getElementById("ii").className == "white" &&
      document.getElementById("nn").className == "white" &&
      document.getElementById("gg").className == "white" &&
      document.getElementById("oo").className == "white" 
    ||
      document.getElementById("bo").className == "white" &&
      document.getElementById("ig").className == "white" &&
      document.getElementById("nn").className == "white" &&
      document.getElementById("gi").className == "white" &&
      document.getElementById("ob").className == "white" 

  ){
  console.log("BINGO!!");
  youWin();
  } else {
    document.getElementById("winner").innerHTML = "";
  }
}


function youWin() {
  console.log("You Are a winner!") 
  let html = `
    <br><h2>Bingo!! You win!!</h2>
  `;
  document.getElementById("winner").innerHTML = html;
  document.getElementById("winner").innerHTML += `
    <button type='button' class='btn btn-light btn-small' id='resetButton'>Reset Board</button>
    `;
  document.getElementById("winner").innerHTML += `
    <button type='button' class='btn btn-light btn-small' id='newButton'>New Board</button>
    `;
  
  document.getElementById("resetButton").addEventListener("click", resetBoard, false);
  document.getElementById("newButton").addEventListener("click", newBoard, false);
}

function resetBoard() {
  clearWinnerDiv();
  fillBoard();
}

function newBoard() {
  location.reload(true);
}
showTextField()
