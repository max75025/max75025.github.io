
/*hidden();
function hidden(){
	var moon = document.getElementsByClassName("moon");
	moon.style.display="none";
	document.getElementsById("mask").style.display="none";
}*/

none();

function animation(){
	document.getElementsByClassName("moon")[0].style.display="block";
	document.getElementsByClassName("mask")[0].style.display="block";
	setTimeout(function(){document.getElementsByClassName("moon")[0].style.display="none";document.getElementsByClassName("mask")[0].style.display="none";},25000);
	
}

function paintBack(){
	if(document.getElementsByClassName("sky")[0].classList.contains("none")){
	document.getElementsByClassName("sky")[0].classList.remove("none");
	document.getElementsByClassName("grass")[0].classList.remove("none");
	document.getElementsByClassName("sun")[0].classList.remove("none");
}else{
	document.getElementsByClassName("sky")[0].classList.add("none");
	document.getElementsByClassName("grass")[0].classList.add("none");
	document.getElementsByClassName("sun")[0].classList.add("none");
}
}

function paintFront(){
	if(document.getElementsByClassName("trunk")[0].classList.contains("none")){
	document.getElementsByClassName("trunk")[0].classList.remove("none");
	document.getElementsByClassName("leaves")[0].classList.remove("none");
	document.getElementsByClassName("wall")[0].classList.remove("none");
	document.getElementsByClassName("roof")[0].classList.remove("none");
	document.getElementsByClassName("door")[0].classList.remove("none");
	document.getElementsByClassName("window")[0].classList.remove("none");
}else{
	document.getElementsByClassName("trunk")[0].classList.add("none");
	document.getElementsByClassName("leaves")[0].classList.add("none");	
	document.getElementsByClassName("wall")[0].classList.add("none");
	document.getElementsByClassName("roof")[0].classList.add("none");
	document.getElementsByClassName("door")[0].classList.add("none");
	document.getElementsByClassName("window")[0].classList.add("none");
}
}



function none(){
	document.getElementsByClassName("sky")[0].classList.add("none");
	document.getElementsByClassName("grass")[0].classList.add("none");
	document.getElementsByClassName("sun")[0].classList.add("none");
	document.getElementsByClassName("trunk")[0].classList.add("none");
	document.getElementsByClassName("leaves")[0].classList.add("none");	
	document.getElementsByClassName("wall")[0].classList.add("none");
	document.getElementsByClassName("roof")[0].classList.add("none");
	document.getElementsByClassName("door")[0].classList.add("none");
	document.getElementsByClassName("window")[0].classList.add("none");
	
}
