var form = document.getElementById('formtitle');
var typewriter = new Typewriter(form, {

    strings:['Contact Us'],
    
    autoStart: true,
      loop: true,
        delay: 100,
        
      });

function SendMail(paramas){
  var teamGreenies={
    fname:document.getElementById("fname").value,
    mail:document.getElementById("mail").value,
    mob:document.getElementById("mob").value,
    msg:document.getElementById("msg").value,
  };
  emailjs.send('service_3xhvthi','template_u2xjoqk',teamGreenies )
  .then(function(res){
    console.log('Success',res.status);
  });
    alert("Your message is successfully sent.");
}
