const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Define the connection URI
const uri = "mongodb+srv://1234567890:1234567890@cluster0.3i3gxco.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewURLParser: true,
            useUnifiedTopology: true
        });
        console.log('connected to mongoDB');
    } catch(error) {
        console.error('error');
    }
}

connect();

// Create Schema about User
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const user = new User({
    username: 'kim',
    password: '12345'
});

/** user.save((error) => {
    if (error) throw error;
    console.log('New user has been saved to the database successfully');
}); **/

user.save().then(() => {
    console.log('New user has been saved to the database successfully');
}).catch((error) => {
    console.error(error);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

