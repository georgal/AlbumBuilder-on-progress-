function myRipper(){

    var e = document.getElementById("Ripper");
    var template = e.options[e.selectedIndex].value;
    console.log(template);
    var out = document.querySelectorAll('page[id^="Paint"]');
    console.log(out);
    out.forEach(x=> x.setAttribute("size", template))
}

function Batman(e){
	var spaner = e;
	console.log(spaner);
	var cloner = spaner.cloneNode(true);
	document.getElementById("Paint0").appendChild(cloner);
	cloner.removeAttribute("onclick");
	cloner.setAttribute("class", "dragger");
	dragElement(cloner);
	
}

function myNinjaAdd(){
	
	var list = document.getElementById("Board");
    var itm = list.lastElementChild;
    var template = itm.getAttribute("size");
	var itmId = itm.id;
    console.log(template);
	var lastChar = parseInt(itmId.substring(5));
	lastChar++;
	
    var pureName = itmId.slice(0, 5);

    var cln= document.createElement("page");

	var newId = pureName.concat(lastChar);
    cln.setAttribute("id", newId);
    cln.setAttribute("size", template);
    document.getElementById("Board").appendChild(cln);
    
}

function myNinjaDel(){

  var list = document.getElementById("Board");
  if (list.children.length>1){
  list.removeChild(list.lastElementChild);    
  }
}