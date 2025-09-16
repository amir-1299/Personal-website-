document.getElementById("testBtn").addEventListener("click", function() {
    fetch("api.php")
        .then(response => response.json())
        .then(data => {
            document.getElementById("apiResult").textContent = data.message || "No message";
        })
        .catch(error => {
            document.getElementById("apiResult").textContent = "Error: " + error;
        });
});