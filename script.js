window.addEventListener('load', function() {
    let statusElement = document.getElementById("status");
    let request = new XMLHttpRequest();
    request.open('GET', "https://jcwyt-api.callumcm.repl.co/barbara/guilds");
    request.onerror = function(error) {

        // This is a bit confusing. A CORS error happens when the server is down
        // And the browser tries to hide the CORS error, so I can't check for it using normal error handling
        // So what I'm doing here is checking if error.response is undefined, which generally means the browser
        // has hidden the CORS error
        if (typeof error.response === 'undefined') {

            // And after we figure out that the server is down, we say that
            statusElement.innerHTML = "Barbara is down.";

            // And then stop the function
            return;
        }
    }

    request.onload = function() {
        if (request.responseText) {
            statusElement.innerHTML = `Barbara online and on ${request.responseText} servers.`;
        } else {
            statusElement.innerHTML = "Barbara is down.";
        }
    };

    request.send();
});