let statusElement = document.getElementById("status");

// Ping https://Barbara-Release.turnip123.repl.co, and set the element with the id of "status" to the value of the response, and if there's an error, set the element with the id of "status" to "Barbara is down."
fetch("https://Barbara-Release.turnip123.repl.co/", {
  method: "GET",
  mode: "no-cors",
}).then(response => {
  if (response) {
    response.text().then(text => {
      statusElement.innerHTML = text;
      console.log(text);
    });
  } else {
    statusElement.innerHTML = "Barbara is down.";
  }
});