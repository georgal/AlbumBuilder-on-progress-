var id = 0;
var imgid = 0;

function myMassacre(){
  var x = document.getElementById("myFile");
  var txt = "";
  var flag = false;
  id++;

  if ('files' in x) {
    if (x.files.length == 0) {
      txt = "Select one or more files.";
    } else {

      var flag= true;

      for (var i = 0; i < x.files.length; i++) {
		  
		var file = x.files[i];  
		var reader = new FileReader();

		
		// Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
		  
		  imgid++;
          document.getElementById("side").innerHTML += ['<span class="" onclick="Batman(this);" id="mydiv',imgid,'"> <img class="thumb" width="120" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/></span>'].join('');
        };
      })(file);

      // Read in the image file as a data URL.
      reader.readAsDataURL(file);

      }
    }
  } 
  else {
    if (x.value == "") {
      txt += "Select one or more files.";
    } else {
      txt += "The files property is not supported by your browser!";
      txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
    }
  }


}