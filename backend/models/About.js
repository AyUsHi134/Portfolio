import {Schema, model} from "mongoose";

const aboutSchema = new Schema({
    
    heading:{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    buttons:[
        {
            label:{type:String},
            url:{type:String},
        },
        {
            label:{type:String},
            url:{type:String},
        }
    ]
});

const About = model("About", aboutSchema);

export default About;