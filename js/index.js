var logo = document.getElementById('logo');
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if(hrs < 12)
  greet = 'Good Morning';
else if(hrs >= 12 && hrs <= 18)
  greet = 'Good Afternoon';
else if (hrs >= 18 && hrs <= 24)
  greet = 'Good Evening';

var typewriter = new Typewriter(logo, {

strings:['<h3>'+ '<font color="white">' + greet + '</font>' + '<font color="white">' + ' !' + '</font>' + '</h3>'],

autoStart: true,
  loop: true,
    delay: 100,
    
  });


