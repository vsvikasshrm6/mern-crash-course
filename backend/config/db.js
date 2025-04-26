import mongoose from "mongoose";

<<<<<<< HEAD
export default function connectDb(){
=======
export default function connectDb() {
>>>>>>> faacb99c453b79c6931c5d2d15f939f9b9af6ca8
    mongoose.connect('mongodb+srv://user:user@cluster0.ujtu81t.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
<<<<<<< HEAD
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
=======
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
>>>>>>> faacb99c453b79c6931c5d2d15f939f9b9af6ca8
}