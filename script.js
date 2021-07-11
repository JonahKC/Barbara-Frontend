var barbaraStatusText = document.getElementById('barbara-up');
var p = new Ping({timeout: '1000'});
var bp = new Ping({
	favicon: '/static/favicon.ico',
	timeout: '1000'
});
var responses = 0;
var response_status = [0, 0, 0]
const barbara_down = [1, -1, 1]
const barbara_up = [1, 1, 1]
const wifi_down = [-1, -1, -1]
p.ping("https://www.google.com", (err, data) => {
	if (err) {
    console.log("Error loading Google");
		data = -1
  }
  response_status[0] = data;
	updateStatus()
	responses++
})
bp.ping("https://Barbara-backend.turnip123.repl.co", (err, data) => {
	if (err) {
    console.log("Error loading Barbara-backend");
		data = -1
  }
  response_status[1] = data;
	updateStatus()
	responses++
})
p.ping("https://github.com", (err, data) => {
	if (err) {
    console.log("Error loading GitHub");
		data = -1
  }
  response_status[2] = data;
	updateStatus()
	responses++
})
function updateStatus() {
	if(responses == 2) {
		if (response_status[0] >= 0) {
			response_status[0] = 1;
		}
		if (response_status[1] >= 0) {
			response_status[1] = 1;
		}
		if (response_status[2] >= 0) {
			response_status[2] = 1;
		}
		console.log(response_status);
		if(response_status == wifi_down){
			barbaraStatusText.innerText = "Not Connected to Wifi!";
		} else if(response_status == barbara_down) {
			barbaraStatusText.innerText = "Barbara is DOWN";
		} else if(response_status == barbara_up) {
			barbaraStatusText.innerText = "Barbara is UP";
		} else {
			barbaraStatusText.innerText = `An Error Has Occured, Send This to JCWYT For Troubleshooting: {${response_status[0]}, ${response_status[1]}, ${response_status[2]}}`;
		}
	}
}