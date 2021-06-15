var logo = document.getElementById('logo');
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if(hrs < 12)
  greet = 'Good Morning !';
else if(hrs >= 12 && hrs <= 16)
  greet = 'Good Afternoon !';
else if (hrs >= 16 && hrs <= 24)
  greet = 'Good Evening !';

var typewriter = new Typewriter(logo,{

strings:[greet],

autoStart: true,
  loop: true,
    delay: 80,
    
  });
  var form = document.getElementById('formtitle');
  var typewriter = new Typewriter(form, {
  
      strings:['Contact Us'],
      
      autoStart: true,
        loop: true,
          delay: 100,
          
        });     


document.querySelector("#contactForm").addEventListener("submit", function (e) {
  var name = document
  .querySelector("#contactForm")
  .getElementsByTagName("input")[0].value;
  var email = document
  .querySelector("#contactForm")
  .getElementsByTagName("input")[1].value;
  var mob = document
  .querySelector("#contactForm")
  .getElementsByTagName("input")[1].value;
  var message = document
  .querySelector("#contactForm")
  .getElementsByTagName("textarea")[0].value;
  
  e.preventDefault();
  sweetAlert("Thank you !\nYour message is sent.")
  var teamGreenies={
    fname:document.getElementById("fname").value,
    mail:document.getElementById("mail").value,
    mob:document.getElementById("mob").value,
    msg:document.getElementById("msg").value,
    };

  emailjs.send('service_3xhvthi','template_u2xjoqk', teamGreenies).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      
    }
  );
  document.getElementById('fname').value="";
			document.getElementById('mail').value="";
			document.getElementById('mob').value="";
			document.getElementById('msg').value="";
});
