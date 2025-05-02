document.addEventListener("DOMContentLoaded", () => {
    const toggleModeBtn = document.getElementById("toggleMode");
    const userInput = document.getElementById("userInput");
    const chatArea = document.getElementById("chatArea");
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");

    let darkMode = false;

    // Toggle Dark Mode
    toggleModeBtn.addEventListener("click", () => {
        darkMode = !darkMode;
        document.body.style.backgroundColor = darkMode ? "#1d1f20" : "#ffffff";
        document.body.style.color = darkMode ? "white" : "black";
        toggleModeBtn.style.backgroundColor = darkMode ? "#333" : "#ddd";
    });

    // Show login and signup modals
    document.getElementById("loginButton").addEventListener("click", () => {
        // Add your login logic here
        console.log("Logging in...");
    });

    document.getElementById("signupButton").addEventListener("click", () => {
        // Add your sign up logic here
        console.log("Signing up...");
    });

    // Capture user input and show it in the chat
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && userInput.value.trim() !== "") {
            const userMessage = userInput.value;
            userInput.value = "";  // Clear input

            // Show user message in chat area
            const userMessageElement = document.createElement("div");
            userMessageElement.textContent = `You: ${userMessage}`;
            chatArea.appendChild(userMessageElement);

            // Show AI response in chat area
            const aiResponseElement = document.createElement("div");
            aiResponseElement.textContent = `Nexel AI: This is a demo reply from Nexel AI.`;
            chatArea.appendChild(aiResponseElement);

            chatArea.scrollTop = chatArea.scrollHeight;  // Scroll to bottom
        }
    });
});
