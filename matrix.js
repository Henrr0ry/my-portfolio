let matrix = document.getElementById("matrix");
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?|}{[]';
const speed = 400;

let code = [];
let row = "";
let display = "";
let lineFall = [];
let spaceChars = 0;
let delayStart = [];

function start() {
  let newCode = code;
  let size = parseInt(window.getComputedStyle(matrix).fontSize);
  let columns = Math.floor(window.innerWidth / size);
  let rows = Math.floor(window.innerHeight / size) -2;

  for (let i = 0; i < columns; i++) {
    newCode[i] = "";
    delayStart[i] = Math.floor((Math.random() * (rows - 1)) + 2);
  }
}

function updateCode() {
  let newCode = code;
  let size = parseInt(window.getComputedStyle(matrix).fontSize);
  let columns = Math.floor(window.innerWidth / size);
  let rows = Math.floor(window.innerHeight / size) -2;

  for (let i = 0; i < columns; i++) {
    if (lineFall[i] == "" || lineFall[i] == undefined)
      lineFall[i] = Math.floor((Math.random() * (rows - 1)) + 2);
    if (delayStart[i] == 0) {
      if ((newCode[i] == "" || newCode[i] == undefined)) {
        newCode[i] = characters.charAt(Math.random() * characters.length);
      } else {
        if (lineFall[i] > newCode[i].length)
          newCode[i] += characters.charAt(Math.random() * characters.length);
        else {
          spaceChars = 0;
          for (var k = 0; k < newCode[i].length; k++){
            if (newCode[i][k] == "\xa0")
              spaceChars++;
            else
              break;
          }
          if (newCode[i].length != rows)
            newCode[i] += "\xa0";
          else {
            newCode[i] += "\xa0";
            newCode[i] = newCode[i].substring(1, newCode[i].length);
          }
          if (spaceChars >= rows)
            newCode[i] = characters.charAt(Math.random() * characters.length);
        }
      }
    } else {
      delayStart[i] -= 1;
    }
    
    console.log(delayStart);

    row = "";
    for (let a = 0; a < newCode[i].length; a++) { 
      if (row.length  / 24 >= rows)
        break;
      if (row == "")
        row += "<s class='m-ligth'>" + newCode[i][a] + "</s>";
      else
        row = "<s class='m-norml'>" + newCode[i][a] + "</s>" + row;
    }
    display += "<div class='m-div'>" + row + "</div>";
  }

  code = newCode;
  matrix.innerHTML = display;
  display = "";
}
start();
updateCode();
setInterval(updateCode, speed);