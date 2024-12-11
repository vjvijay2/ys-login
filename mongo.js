const mongoose = require('mongoose');

// MongoDB Atlas connection URI
const uri = "mongodb+srv://vijayanbu:12345@cluster0.swbpx.mongodb.net/user?retryWrites=true&w=majority";

// Connect to the MongoDB Atlas database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Atlas connected to 'user' database successfully"))
  .catch((err) => console.error("MongoDB Atlas connection error: ", err));

// Define a new schema for user registration (email and password)
const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // Ensure that email is provided
    unique: true     // Ensure that email is unique
  },
  password: {
    type: String,
    required: true // Ensure that password is provided
  }
});

// Create a model based on the schema
const User = mongoose.model("User", newSchema);

// Export the model to be used in other parts of the application
module.exports = User;
