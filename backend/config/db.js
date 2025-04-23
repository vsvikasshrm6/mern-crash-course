import mongoose from "mongoose";

export default function connectDb() {
    mongoose.connect('mongodb+srv://user:user@cluster0.ujtu81t.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
}