(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i=0; i<names.length; i++  ) {
	
	var arr_name = names[i];
	var firstLetter =arr_name.charAt(0).toLowerCase();

  if (firstLetter == "j") {
   byeSpeaker.speak(names[i]);
  } 
  else {
    helloSpeaker.speak(names[i]);
  }
}

})();