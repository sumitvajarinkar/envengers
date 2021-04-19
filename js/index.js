var logo = document.getElementById('logo');
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if(hrs <= 11.59)
  greet = 'Good Morning !';
else if(hrs >= 12 && hrs <= 15.59)
  greet = 'Good Afternoon !';
else if (hrs >= 16 && hrs <= 23.59)
  greet = 'Good Evening !';

var typewriter = new Typewriter(logo,{

strings:[greet],

autoStart: true,
  loop: true,
    delay: 80,
    
  });

