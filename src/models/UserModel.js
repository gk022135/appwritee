import mongoose from 'mongoose';
import { type } from 'os';


const userSchema = new mongoose.Schema({
    username : {type:stringify, required: true},
    
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User