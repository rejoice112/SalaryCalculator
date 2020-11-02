
function solve(){
   var workedHour = document.getElementById("normalHour").value;

   var extraHour = document.getElementById("extraHour").value;

if(workedHour > 4){
	document.getElementById("final").textContent = (workedHour * 1000) + ((workedHour - 4) *200);
}else{
	document.getElementById("final").textContent = workedHour * 1000
}

}


var checkTotal = document.getElementById("button");
checkTotal.onclick = function() {
	solve(); 
};