$(document).on('deviceready', function(e) {
  var nbClic = 0;
  console.log('on est dans le deviceready', e);
  var btnHello = $('#btn-hello');
  var divRes = $("#res");

  btnHello.on('click', function(e){
    $("#info").removeClass("hidden");
      //alert('Hello');
      console.dir(device);
      // console.log("on trouve architecture", device.model);
      // console.log("on trouve version cordova", device.cordova);
      // console.log('Hello toto');
      $("#info>pre").html(JSON.stringify(device));

  });
  btnHello.on('click', function(e) {
      res.textContent = 'Nb clic ' + nbClic++;
  });
});

// $(document).ready(function() {
//   var nbClic = 0;
