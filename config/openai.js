// Import necessary modules and libraries
const { Configuration, OpenAIApi } = require("openai"); // Import Configuration and OpenAIApi from the 'openai' module
const dotenv = require("dotenv"); // To read environment variables from .env file
dotenv.config(); // Load environment variables from .env file into process.env

// Create a new Configuration object with the provided OpenAI API key from the environment variables
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create a new OpenAIApi instance using the previously created Configuration
const openai = new OpenAIApi(configuration);

// Export
module.exports = openai;
