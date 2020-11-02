/* a program that calculates the daily wage of SideHustle employees
*/
 function solve(){
var workedHour = document.getElementById("normalHour").value;

var extraHour = document.getElementById("extraHour").value;
var extraPay = extraHour * 200
if (workedHour <= 4) {
	 salary = (workedHour * 1000);

}else{
	salary = (workedHour * 1000);
	extraPay = (extraHour * 200);
	newSalary = (salary + extraPay);
	
}
console.log(salary);
console.log(newSalary = salary + extraPay);
document.getElementById('final').innerHTML = 'your salary is #{newSalary} only';
}
var checkTotal = document.getElementsypeByType('button');
checkTotal.onclick = function(){
	solve();
}




 
 

