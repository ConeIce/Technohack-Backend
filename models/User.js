import mongoose from "mongoose";

const User = mongoose.Schema({
    username: {type: String, required : true},
    roomNumber: {type: String, required : true}
})

export default mongoose.model("User", User);