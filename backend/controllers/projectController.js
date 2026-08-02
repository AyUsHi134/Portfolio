import Project from "../models/Project.js";

const getProjects = async(req,res,next) => {
    try{
        const projects = await Project.find();
        res.json(projects);
    } catch(error) {
        next(error);
    }
}

const createProject = async(req,res,next) => {
    try{
    const { title, description, tech, imageUrl } = req.body;

    if (
        typeof title !== "string" || !title.trim() ||
        typeof description !== "string" || !description.trim() ||
        typeof tech !== "string" || !tech.trim() ||
        typeof imageUrl !== "string" || !imageUrl.trim()
    ) {
        const error = new Error("title, description, tech and imageUrl are required");
        error.statusCode = 400;
        return next(error);
    }

    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
} catch(error){
    next(error);
}
}

export {getProjects,createProject};