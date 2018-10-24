 var tracker= true;
 var count=1;


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
 	for(var i=0;i<cr.length;i++){
 		if(cr[i]==this.valueOf()){
 			tracker=false;
 			for(var x=0;x<cr.length-1;x++){
 				cr[x].setAttribute("style", "background-color: #ff8888;");
 			}
 		
 	}
  }
}

 

 function allBoun(){
 	var cr= document.querySelectorAll('.boundary');
 	for(var x= 0; x<cr.length; x++){
 		cr[x].addEventListener("mouseover",wall2);
 		
 }
}
function al(){
 		var win=document.getElementById("end");
 		if(tracker== true){
 			document.getElementById("status").innerHTML = " successful completion of maze ";
 		}
 		else if (tracker== false){
 			document.getElementById("status").innerHTML = 'You lose';

 		}

 	} 

 	function alwin(){
 		var win=document.getElementById("end");
 		win.addEventListener('mouseover',al);
 	}
 		
 	function start(){
 		var s=document.getElementById('start');
 		if(tracker== false|| tracker== true){
 			count=0;
 			tracker= true
 			var cr= document.querySelectorAll('.boundary');
 			for(var x= 0; x<cr.length-1; x++){
 				cr[x].setAttribute("style", "background-color: #eeeeee;");
 				

 			}
 			//location.reload();
 			document.getElementById("status").innerHTML = " Move your mouse over the S to begin";
 			main();

 		}
 	}
 	function startEvent(){
 		var st=document.getElementById('start');
 		var sy=st.addEventListener('click',start);
 		
 	}

 	function leave(){
 		document.getElementById("status").innerHTML = 'You lose Cheater';
 		var cr= document.querySelectorAll('.boundary');
 		for(var x= 0; x<cr.length-1; x++){
 				cr[x].setAttribute("style", "background-color: #ff8888;");
 			}
 		wall2();


 	}

 	function cheatEevent(){
 		var lev=document.getElementById("maze");
 		lev.addEventListener('mouseleave',leave);


 	}

function main(){
	if(count==1){
		startEvent();
	}
	else if (count==0) {
	boun();
	allBoun();
	startEvent();
	alwin();
	cheatEevent();

	}
}



window.onload= function(){
	main();
	

	
};
