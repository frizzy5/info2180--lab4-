 var tracker= true;
function boun(){
	var top= document.getElementById("boundary1");
	if (top.addEventListener){
	top.addEventListener("mouseover",wall);
	}else if (top.addEventListener) {
	top.addEventListener("mouseover",wall);}
}
 
 function wall(){
 	document.getElementById("boundary1").setAttribute("style", "background-color: #ff8888;");

 }
 function wall2(){
 	var cr= document.querySelectorAll('.boundary');
 	for(var i=1;i<cr.length;i++){
 		if(cr[i]==this.valueOf()){
 			tracker=false;
 			cr[i].setAttribute("style", "background-color: #ff8888;");
 		}
 	}

}

 

 function allBoun(){
 	var cr= document.querySelectorAll('.boundary');
 	for(var x= 1; x<cr.length; x++){
 		cr[x].addEventListener("mouseover",wall2);
 		
 }
}
function al(){
 		var win=document.getElementById("end");
 		if(tracker== true){
 			alert(" successful completion of maze ");
 		}
 		else if (tracker== false){
 			alert("You lose");

 		}

 	} 

 	function alwin(){
 		var win=document.getElementById("end");
 		win.addEventListener('mouseover',al);
 	}



window.onload= function(){
	
	boun();
	allBoun();
	alwin();
	
};
