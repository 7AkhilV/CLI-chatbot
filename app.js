// Import required modules and libraries
const openai = require("./config/openai.js"); // Import the OpenAI module from the specified file
const readlineSync = require("readline-sync"); // Import the readline-sync module to get user input
const colors = require("colors"); // Import the colors module to add colors to console output

// Function to start the main chatbot logic
async function main() {
  // Print welcome messages to the user
  console.log(colors.bold.green("Hi! I am your personal chatbot"));
  console.log(colors.bold.green("Ask me something, so that I could help you"));

  // Array to store chat history (user input and bot responses)
  const chatHistory = [];

  // Loop to continue the chat until the user decides to exit
  while (true) {
    // Get user input from the console
    const userInput = readlineSync.question(colors.yellow("You: "));

    try {
      // Prepare the chat history in the required format for OpenAI API
      const messages = chatHistory.map(([role, content]) => ({
        role,
        content,
      }));

      // Add the latest user input to the chat history
      messages.push({ role: "user", content: userInput });

      // Call the OpenAI API to get the chatbot's response
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
      });

      // Extract the completion text (bot's response) from the API response
      const completionText = completion.data.choices[0].message.content;

      // Check if the user wants to exit the chat
      if (userInput.toLowerCase() === "exit") {
        // If the user input is "exit", print the bot's response and end the chat
        console.log(colors.green("Bot: ") + completionText);
        return;
      }

      // Print the bot's response to the console
      console.log(colors.green("Bot: ") + completionText);

      // Update the chat history with the user input and bot's response
      chatHistory.push(["user", userInput]);
      chatHistory.push(["assistant", completionText]);
    } catch (error) {
      // Handle any errors that might occur during the chatbot process
      console.log(colors.red(error));
    }
  }
}

// Start the main chatbot function
main();
