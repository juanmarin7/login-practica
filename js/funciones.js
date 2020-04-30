function registrar(){
    var email = document.getElementById('email').value;
    var contra = document.getElementById('contra').value;
    
    firebase.auth().signInWithEmailAndPassword(email, contra).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}