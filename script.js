// select the input date form the input box
var inputDate = document.querySelector(".inputDate");
inputDate.max = new Date().toISOString().split("T")[0];
var result = document.getElementById("result");
//calculate the no of years
function calculateAge() {
  let birthDate = new Date(inputDate.value);
  var d1 = birthDate.getDate();
  var m1 = birthDate.getMonth();
  var y1 = birthDate.getFullYear();

  let today = new Date();
  var d2 = today.getDate();
  var m2 = today.getMonth();
  var y2 = today.getFullYear();

  var y3 = y2 - y1;
  var m3;
  if (m2 > m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m1 - m2;
  }
  if (d2 > d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y--;
  }

  result.innerHTML = `you are <span> ${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days old`;
}

// take the place to display the result in the container

// select the button
var calculatebtn = document.getElementById("calculate");
calculatebtn.addEventListener("click", function () {
  calculateAge();
});

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
