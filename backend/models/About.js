import {Schema, model} from "mongoose";

const aboutSchema = new Schema({
    
    heading:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type:String,
        required:true,
        trim: true
    }
    
}, );

const About = model("About", aboutSchema);

export default About;