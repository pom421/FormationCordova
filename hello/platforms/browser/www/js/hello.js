document.addEventListener('DOMContentLoaded', function(e) {
  var nbClic = 0;
  console.log('on est dans le DOMContentLoaded', e);
  var btnHello = document.getElementById('btn-hello');
  var divRes = document.getElementById("res");

  btnHello.addEventListener('click', function(e){
      //alert('Hello');
      console.log('Hello toto');
  });
  btnHello.addEventListener('click', function(e) {
      res.textContent = 'Nb clic ' + nbClic++;
  });
});

// $(document).ready(function() {
//   var nbClic = 0;
