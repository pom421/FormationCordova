console.log('index.js!!');

document.addEventListener('deviceready', function() {
  var bouton = document.getElementById('boutonPhoto');

  function onSuccess(imageData) {
      var image = document.getElementById('photo');
      image.src = "data:image/jpeg;base64," + imageData;
  }

  function onFail(message) {
      alert('Failed because: ' + message);
  }


  bouton.addEventListener('click', function(e){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
    console.log('AZEAZE');
  });

}, false);
