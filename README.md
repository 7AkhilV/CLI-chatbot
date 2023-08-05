# CLI-chatbot
openai API - chatbot in command line

This is a simple Node.js chatbot project that utilizes the OpenAI API to create a chatbot capable of engaging in a conversation with users.
The chatbot is powered by GPT-3.5-turbo, which enables natural language understanding and generation.

## Getting Started

### Prerequisites

To run this project, you need to have the following installed:

- Node.js (version 12 or later)
- npm (Node Package Manager)
  
### Installation

1. Clone this repository to your local machine:
   git clone https://github.com/7AkhilV/CLI-chatbot

2. Install the project dependencies:
   npm install

### Setting up OpenAI API Key

To use the chatbot, you need to obtain an API key from OpenAI and set it as an environment variable. 
Here's how you can do it:

1. Sign up for an account on OpenAI (https://openai.com/signup).

2. Once you have an account, obtain your API key from the OpenAI dashboard.

3. Create a new file named `.env` in the root of the project and add the following line, replacing `<YOUR_API_KEY>` with your actual API key:
   OPENAI_API_KEY=<YOUR_API_KEY>

 ### Key Features:
 
-Natural Language Processing: The chatbot can understand the context and respond in a conversational manner.
-User Interaction: Users can chat with the bot, ask questions, and receive real-time responses.
-Exit Functionality: Type "exit" to end the chat gracefully.

### How It Works:

Utilizes Node.js, and OpenAI API.
Supports multi-turn conversations and history tracking.
   
### Usage

To start the chatbot, run the following command:

npm start

The chatbot will greet you and be ready to chat. 
Simply type your messages after the "You:" prompt, and the chatbot will respond accordingly. 
To exit the chat, type "exit".

Please remember to replace `<YOUR_API_KEY>` with your actual OpenAI API key in the `.env` file.
