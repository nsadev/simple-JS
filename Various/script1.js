let countDownDate = new Date("Sep 1, 2022 12:00:00").getTime();

let update = setInterval(function() {
  let today = new Date().getTime();
  let remaining = countDownDate - today;

  let days = Math.floor(remaining / (1000*60*60*24));
  let hours = Math.floor((remaining % (1000*60*60*24)) / (1000*60*60));
  let min = Math.floor((remaining % (1000*60*60)) / (1000*60));
  let sec = Math.floor((remaining % (1000*60)) / 1000);

  document.getElementById("countdown").innerHTML = 
    days + " days " + hours + "h " + min + "min " + sec + "s ";

  if (remaining <= 0) {
    clearInterval(update);
    document.getElementById("countdown").innerHTML = "Countdown finished"
  }

}, 1000);