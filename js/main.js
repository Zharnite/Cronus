/* Time and Date related */
var dateSpan = document.getElementById('date-span');
var timeSpan = document.getElementById('time-span');

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;

/* Updates date on web page. */
dateSpan.innerHTML = date;

/* Updates time on web page. */
timeSpan.innerHTML = time;

/* Function to update time */
function updateTime() {
	today = new Date();
	time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	timeSpan.innerHTML = time;
}

/* Updates time every second */
var clock = setInterval( function() {
	updateTime();
}, 1000);