//Calculate Tip
function calculateTip() {
  var bill_Amt = document.getElementById("bill_Amt").value;
  var qual = document.getElementById("qual").value;
  var people = document.getElementById("people").value;

  //validate input
  if (bill_Amt === "" || qual == 0) {
    alert("PUT SOMETHING IN YA DIMWIT!!");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (bill_Amt * qual) / people;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};