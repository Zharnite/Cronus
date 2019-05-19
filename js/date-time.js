/* Time and Date related */
var dateSpan = document.getElementById('date-span');
var timeSpan = document.getElementById('time-span');

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = ('0' + today.getHours()).slice(-2) +
	":" + ('0' + today.getMinutes()).slice(-2) +
	":" + ('0' + today.getSeconds()).slice(-2);
var dateTime = date + ' ' + time;

/* Updates date on web page. */
dateSpan.innerHTML = date;

/* Updates time on web page. */
timeSpan.innerHTML = time;

/* Function to update time */
function updateTime() {
	today = new Date();
	time = ('0' + today.getHours()).slice(-2) +
		":" + ('0' + today.getMinutes()).slice(-2) +
		":" + ('0' + today.getSeconds()).slice(-2);
	timeSpan.innerHTML = time;
}

/* Updates time every second */
var clock = setInterval( function() {
	updateTime();
}, 1000);