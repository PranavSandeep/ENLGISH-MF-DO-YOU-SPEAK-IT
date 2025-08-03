(() => {
    const seen = new Set();

    function sendToFlask(message, element) {
        fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        })
            .then((res) => res.json())
            .then((data) => {
                element.innerText = data.message;
            })
            .catch((err) => {
                console.error("Error sending to Flask:", err);
            });
    }

    function scanMessages() {
        const messages = document.querySelectorAll(
            "div.message-in span.selectable-text span"
        );
        messages.forEach((msg) => {
            const text = msg.innerText.trim();
            if (text && !seen.has(text)) {
                seen.add(text);
                sendToFlask(text, msg);
            }
        });
    }

    setInterval(scanMessages, 2000);
})();