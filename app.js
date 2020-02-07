//Calculate Tip
function calculateTip() {
  var bill_Amt = document.getElementById("bill_Amt").value;
  var qual = document.getElementById("qual").value;
  var people = document.getElementById("people").value;
  var myMusic= document.getElementById("https://www.marxists.org/history/ussr/sounds/mp3/soviet-anthem.mp3");

  //easter eggs
  if (bill_Amt === "" ||people == 0) {
    alert("PUT SOMETHING IN YA DIMWIT!!");
    return;
  }
  if (qual == 0){
    alert("If the service was that terrible WHY ARE YOU GIVING THEM A TIP")
    return
  }
  if (bill_Amt === "uwu" ) {
    alert("Okay, I know this is a really bad idea but /n Im already here so /n Here we fuckin’ go /n Rawr /n /n x3 nuzzles, pounces on you, uwu you so warm /n Couldnt help but notice your bulge from across the floor /n Nuzzles your necky wecky-tilde murr-tilde, hehe /n Unzips your baggy ass pants, oof baby you so musky /n Take me home, pet me, and make me yours and dont forget to stuff me /n See me wag my widdle baby tail all for your buldgy-wuldgy /n Kissies and lickies your neck /n I hope daddy likies /n Nuzzles and wuzzles your chest /n I be  gettin’ thirsty /n /n Hey, I got a little itch, you think you can help me? /n Only seven inches long, uwu, please adopt me /n Paws on your buldge as I lick my lips /n Bout to hit em with this furry shit ")
    document.body.style.backgroundImage = "url('https://steamuserimages-a.akamaihd.net/ugc/939446042746783339/397B115E5FF3FE0D1034C20E36063D631A5C4002/')";
    return
  }
  if (bill_Amt === "420"){
    document.body.style.backgroundImage = "url('https://media0.giphy.com/media/WIQBk5fKfHvyM/source.gif')";
    return
  }

  if (bill_Amt === "563923" ) {
    alert("COMRADE THE TIME HAS COME PREPARE FOR WAR")
    document.body.style.backgroundImage = "url('https://i.gifer.com/1p4L.gif')";
    myMusic.play();
    return
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
  myMusic.play();
};