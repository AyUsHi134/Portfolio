import Project from "../models/Project.js";

const getProjects = async(req,res) => {
    try{
        const projects = await Project.find();
        res.json(projects);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

const createProject = async(req,res) => {
    try{
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
} catch(error){
    res.status(500).json({message:error.message});

}
}

export {getProjects,createProject};