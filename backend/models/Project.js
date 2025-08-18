import { Schema,model } from "mongoose";

const projectSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    githubLink:{
        type:String
    },
    liveLink:{
        type:String
    }
    
});

const Project = model("Project", projectSchema);

export default Project;