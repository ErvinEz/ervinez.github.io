
// Your JSONBin details
const BIN_ID = "679ee011e41b4d34e4829910"; // Updated with your JSONBin Bin ID
const API_KEY = "$2a$10$ZlJc9WsJaU.iL05AgDHzPOGjQHr963IYn6SdgRc5KwWJ/rAaG3732"; // Updated with your API Key

// Fetch visitCounter from JSONBin
fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
    headers: { "X-Master-Key": API_KEY }
})
.then(response => response.json())
.then(data => {
    // Increment the visit counter by 1
    let visitCount = data.record.visitCounter + 1;

    // Update the counter value in JSONBin
    fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY
        },
        body: JSON.stringify({ visitCounter: visitCount })
    });

    // Update the counter display in the HTML
    document.getElementById("counter").innerText = visitCount;
})
.catch(error => console.error("Error fetching or updating counter:", error));
