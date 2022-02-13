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
  document.getElementById("nncard").innerHTML += "<br>Free Space";
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

  textSplit.forEach(checkEmpty)
  textSplit.forEach(fill)
}


function showBoard() {
  let board = `
          <table class="text-center">
          <tr>
            <td>B</td>
            <td>I</td>
            <td>N</td>
            <td>G</td>
            <td>O</td>
          </tr>
          <tr>
            <td id="bb" class="square">
              <div id="bbcard"class="card bg-dark w-100 h-100">
                <input type="checkbox">bb
              </div>
            </td>
            <td id="ib" class="square">
              <div id="ibcard"class="card bg-dark w-100 h-100">
                <input type="checkbox">ib
              </div>
            </td>
            <td id="ng" class="square">
              <div id="ngcard"class="card bg-dark w-100 h-100">
                <input type="checkbox">ng
              </div>
            </td>
            <td id="gb" class="square">
              <div id="gbcard"class="card bg-dark w-100 h-100">
                <input type="checkbox">gb
              </div>
            </td>
            <td id="ob" class="square">
              <div id="obcard"class="card bg-dark w-100 h-100">
                <input type="checkbox">ob
              </div>
            </td>
          </tr>
          <tr>
            <td id="bi" class="square">
              <div id="bicard"class="card bg-dark w-100 h-100">
                <input type="checkbox">bi
              </div>
            </td>
            <td id="ii" class="square">
              <div id="iicard"class="card bg-dark w-100 h-100">
                <input type="checkbox">ii
              </div>
            </td>
            <td id="ni" class="square">
              <div id="nicard"class="card bg-dark w-100 h-100">
                <input type="checkbox">ni
              </div>
            </td>
            <td id="gi" class="square">
              <div id="gicard"class="card bg-dark w-100 h-100">
                <input type="checkbox">gi
              </div>
            </td>
            <td id="oi" class="square">
              <div id="oicard"class="card bg-dark w-100 h-100">
                <input type="checkbox">oi
              </div>
            </td>
          </tr>
          <tr>
            <td id="bn" class="square">
              <div id="bncard"class="card bg-dark w-100 h-100">
                <input type="checkbox">bn
              </div>
            </td>
            <td id="in" class="square">
              <div id="incard"class="card bg-dark w-100 h-100">
                <input type="checkbox">in
              </div>
            </td>
            <td id="nn" class="square">
              <div id="nncard"class="card bg-dark w-100 h-100">
                <input type="checkbox" checked=true>nn
              </div>
            </td>
            <td id="gn" class="square">
              <div id="gncard"class="card bg-dark w-100 h-100">
                <input type="checkbox">gn
              </div>
            </td>
            <td id="on" class="square">
              <div id="oncard"class="card bg-dark w-100 h-100">
                <input type="checkbox">on
              </div>
            </td>
          </tr>
          <tr>
            <td id="bg" class="square">
              <div id="bgcard"class="card bg-dark w-100 h-100">
                <input type="checkbox">bg
              </div>
            </td>
            <td id="ig" class="square">
              <div id="igcard"class="card bg-dark w-100 h-100">
                <input type="checkbox">ig
              </div>
            </td>
            <td id="ng" class="square">
              <div id="ngcard"class="card bg-dark w-100 h-100">
                <input type="checkbox">ng
              </div>
            </td>
            <td id="gg" class="square">
              <div id="ggcard"class="card bg-dark w-100 h-100">
                <input type="checkbox">gg
              </div>
            </td>
            <td id="og" class="square">
              <div id="ogcard"class="card bg-dark w-100 h-100">
                <input type="checkbox">og
              </div>
            </td>
          </tr>
          <tr>
            <td id="bo" class="square">
              <div id="bocard"class="card bg-dark w-100 h-100">
                <input type="checkbox">bo
              </div>
            </td>
            <td id="io" class="square">
              <div id="iocard"class="card bg-dark w-100 h-100">
                <input type="checkbox">io
              </div>
            </td>
            <td id="no" class="square">
              <div id="nocard"class="card bg-dark w-100 h-100">
                <input type="checkbox">no
              </div>
            </td>
            <td id="go" class="square">
              <div id="gocard"class="card bg-dark w-100 h-100">
                <input type="checkbox">go
              </div>
            </td>
            <td id="oo" class="square">
              <div id="oocard"class="card bg-dark w-100 h-100">
                <input type="checkbox">oo
              </div>
            </td>
          </tr>
          </table>
  `;

  document.getElementById("main-content").innerHTML = board;
  fillBoard()
}

showTextField()
