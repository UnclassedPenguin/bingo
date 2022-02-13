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

function showTextField() {
  clearDiv()

  let form = `
    <form>
      <label for="bingoList">Enter your bingo items:</label><br/>
      <textarea id="bingoList" name="bingoList" rows="10" cols="50">
      </textarea>
    </form>
    <button type='button' class='btn btn-light btn-small' id='getTextButton'>Set Text</button>
  `
  document.getElementById("main-content").innerHTML = form;
  document.getElementById("getTextButton").addEventListener("click", getText, false);
}


function getText() {
  let text = document.getElementById("bingoList").value;
  textSplit = text.split(/\r?\n/);

  clearDiv()
  showBoard()
}


function freeSpace() {
  document.getElementById("nn").innerHTML = "<br>Free Space";
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

  function fill(value, index, array) {
    index += 1;
    console.log("----------------")
    console.log("Value: " + value)
    console.log("Index: " + index)
    console.log("----------------")
  }

  function fillSquares(value, index, array) {
    console.log("----------------")
    console.log("Value: " + value)
    console.log("Index: " + index)
    console.log("----------------")
    document.getElementById(value).innerHTML = selected[index];
  }

  textSplit.forEach(checkEmpty);
  textSplit.forEach(fill);
  const shuffled = textSplit.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 25);
  console.log(selected)
  squares.forEach(fillSquares);
  freeSpace()
}


function showBoard() {
  let board = `
    <div class='bingoboard'>
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
  fillBoard()
}

function changeBackgroundColor(divObj) {
  currentclass = divObj.getAttribute("class")
  console.log("Current Class: " + currentclass)
  if (currentclass == 'grey'){
    divObj.setAttribute("class", "white");
  } else if (currentclass == 'white'){
    divObj.setAttribute("class", "grey");
  }
}

//function changeBackgroundColor(divObj) {
  //background = divObj.style.background;
  //console.log("Name Of Object: " + divObj.className);
  //console.log("Background: " + background);
  //if (divObj.style.background != "#ffffff"){
    //divObj.style.background="#ffffff";
  //} else if (background == "rgb(255, 255, 255) none repeat scroll 0% 0%" && divObj.classList.contains(grey)){
    //console.log("We are trying...");
    //divObj.style.background="grey";
  //} else { 
    //divObj.style.background="blue";
  //} 
    
//}


showTextField()
