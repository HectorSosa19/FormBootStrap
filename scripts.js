var input =  document.getElementById("phone");
input.addEventListener('input',function(){
  if (this.value.length > 10)
     this.value = this.value.slice(0,10); 
})

document.getElementById('Cedula').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,7})(\d{0,1})/);
    e.target.value = !x[2] ? x[1] : x[1] + '-' + x[2] + (!!x[3] ? '-' + x[3] : '');
  });

  document.getElementById('submit-btn').addEventListener('click', function(event) {
    const email = document.getElementById('email').value
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(email)) {
      alert("Su correo esta correcto")
    } else {
      alert("Su correo esta incorrecto")
      document.getElementById('email').value = ''
    }
  });
