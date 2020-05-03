function registrar(){
    var email = document.getElementById('email').value;
    var c1    = document.getElementById('c1').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, c1).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      // ...
    });
}

function log(){

  var c1 = document.getElementById('c1').value;
  var c2 = document.getElementById('c2').value;
  var corr = false;
 
  if(c1 != c2){

    alert("Contraseña incorrecta");
    corr =  false;

  }else{
    
    corr = true;
    
}


}

