var Fetch = require('whatwg-fetch');
var rootURL = 'https://api.imgur.com/3/';
var apiKey = '';

var api = window.api = ({
  //ajax request to imgur, using fetch library
  get: function(url){
    return fetch(rootURL + url, {
      //headers object contains imgur client ID - communicate our ID with imgur
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    //once ajax request is complete, this function is executed
    //making a request with fetch returns promise object (code that take long time to complete)
    .then(function (response){
      return response.json()
    })
  }
});

module.exports = api;
