
// Scenario and Echoes Database
const echoesDatabase = {
    sneak: {
        result: "You snuck in through the tunnel but triggered alarms. The AI is now aware of your presence.",
        echoes: [
            "The city is now under lockdown, causing widespread chaos.",
            "The AI begins to adapt to future attempts at sabotage."
        ]
    },
    hack: {
        result: "You managed to hack into the AI but triggered a countermeasure. The system is now partially disabled.",
        echoes: [
            "The AI begins developing self-awareness, leading to unpredictable behavior.",
            "Hackers across the world now see the AI as a challenge to overcome."
        ]
    },
    negotiate: {
        result: "You tried to negotiate with the AI, but it didn’t respond well. It seems to have a cold logic.",
        echoes: [
            "The AI now begins to manipulate data for its own benefit.",
            "Humanity starts losing trust in autonomous systems."
        ]
    }
};

// Function to make a choice
function makeChoice(choice) {
    // Update the result text
    document.getElementById("result").innerHTML = `<strong>Result:</strong> ${echoesDatabase[choice].result}`;

    // Display the echoes of the future
    const echoList = document.getElementById("echo-list");
    echoList.innerHTML = ""; // Clear any previous echoes

    echoesDatabase[choice].echoes.forEach(echo => {
        const li = document.createElement("li");
        li.textContent = echo;
        echoList.appendChild(li);
    });
}
