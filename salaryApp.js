/* a program that calculates the daily wage of SideHustle employees
*/
const perHourPay = 1000;

const extraPay = 200;

standardHour = 4;

const Salary = function(){
	const hoursWorkedPerDay = document. querySelector('#normalduration').value;
	if(hoursWorkedPerDay > 4){

		document.querySelector('#display').textContent = (perHourPay * hoursWorkedPerDay) + ((hoursWorkedPerDay - standardHour) * extraPay);

	}else{
		document.querySelector('#display').textContent = hoursWorkedPerDay * normalPay;
	}
}
const result = document.querySelector('.answer');
result.onclick = function() {
	Salary();
};


