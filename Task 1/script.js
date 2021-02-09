var array = new Array(10);
var table = document.getElementById("arr");

// initialize 2d array
const initializeArray = () => {
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(10);
    var tr = document.createElement("tr");
    for (let j = 0; j < array.length; j++) {
      array[i][j] = j + i * 10 + 1;
      var td1 = document.createElement("td");
      var text1 = document.createTextNode(array[i][j]);
      td1.appendChild(text1);
      tr.appendChild(td1);
      table.appendChild(tr);
    }
  }
};

const resetTableStyle = () => {
  for (let i = 0; i < array.length; i++) {
    let row = arr.rows[i];
    for (let j = 0; j < array.length; j++) {
      let col = row.cells[j];
      let cellStyle = col.style;
      cellStyle.color = "black";
      cellStyle.fontWeight = "400";
    }
  }
};

// call initialize array after load
window.addEventListener("load", initializeArray);

var form = document.querySelector("form");
// 34 35 36
// 44 45 46
// 54 55 56

// add click event
// calculate func
form.addEventListener("submit", (e) => {
  e.preventDefault();

  var num = parseInt(document.getElementById("val").value);
  var sum = document.getElementById("suma");

  if (!Number.isInteger(num) || num > 100 || num < 0) return;
  if (num % 10 == 0 || num % 10 == 1 || Math.floor(num / 10) == 0) return;

  resetTableStyle();

  var iStart = Math.floor(num / 10) - 1;
  var jMax = (num % 10) + 1;
  var suma = 0;

  for (let i = iStart; i < iStart + 3; i++) {
    let row = table.rows[i];
    for (let j = jMax - 3; j < jMax; j++) {
      let col = row.cells[j];
      let cellStyle = col.style;
      suma += array[i][j];
      array[i][j] == num
        ? (cellStyle.color = "green")
        : (cellStyle.color = "red");
      cellStyle.fontWeight = "bold";
    }
  }

  sum.innerText = "Suma: " + suma;
});
