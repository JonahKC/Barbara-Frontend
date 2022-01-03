window.addEventListener('load', function() {
  let statusElement = document.getElementById("status");

  fetch("https://status.barbara.jcwyt.com", {
    method: "GET",
  }).then(response => {
    if (response) {
      response.text().then(text => {
        statusElement.innerHTML = `Barbara online and on ${text} servers.`;
      });
    } else {
      statusElement.innerHTML = "Barbara is down.";
    }
  });
});