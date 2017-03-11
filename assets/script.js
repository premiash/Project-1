

 var config = {
    apiKey: "AIzaSyD2O0mFIFPWg0ujWbqwyk20dbpnHA77-Pc",
    authDomain: "my-virtual-fridge.firebaseapp.com",
    databaseURL: "https://my-virtual-fridge.firebaseio.com",
    storageBucket: "my-virtual-fridge.appspot.com",
    messagingSenderId: "639848607205"
  };

  firebase.initializeApp(config);

var database = firebase.database();

var firstArray =[];



database.ref().on("child_added", function(snapshot) {

  
  firstArray.push(snapshot.val().Input);

  console.log(firstArray);

});




$(".btn").on("click" , function() {

event.preventDefault();

var input = $("#mainInput").val().trim();

$("#mainInput").val("");

database.ref().push({


Input: input,



});





});



