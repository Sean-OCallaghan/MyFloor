const http = require('http')
const fs = require('fs')
const port = 3000 

const server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type' : 'text/html' })

fs.readFile('home.html', function(error, data) {
    if (error){
        res.writeHead(404)
        res.write('Error: File not Found')
    } else{
        res.write(data)
    }
    res.end()
})
fs.readFile('appointment.html', function(error, data) {
    if (error){
        res.writeHead(404)
        res.write('Error: File not Found')
    } else{
        res.write(data)
    }
    res.end()
})
})

server.listen(port, function(error) {
if (error) {
    console.log('Something went wrong', error)
} else{
    console.log('Server is listening on port ' + port)
}
})

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $("#pic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      alert("you have been succesfully signed out");
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");
    });
  }