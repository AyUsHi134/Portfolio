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
    Tech:{
        type:String,
        required:true
    },
    image:{
        type:String
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