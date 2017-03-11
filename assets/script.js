

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

  $("#flex-box").empty();

   for (i=0 ;  i < firstArray ; i++) {

  	var container = $('<div>');

  	var items = $('<div>');

  	var checkbox = $('<input type="checkbox">');

  	items.attr( 'data-buttons' , firstArray[i]);

  	items.text(snapshot.val().firstArray[i]);

    container.addClass('item-button');

  	container.preprend(checkbox);

  	container.append(items);
 	
    $("#flex-box").append(container);
 
  }

  

});




$("#add-button").on("click" , function() {

event.preventDefault();

var input = $(".form-control").val();

$(".form-control").val("");

database.ref().push({


Input: input,



});	





});



