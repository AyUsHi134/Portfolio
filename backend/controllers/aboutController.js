import About from "../models/About.js";

const getAbout = async (req, res) => {
    try{
        const aboutData = await About.find();
        res.json(aboutData[0]);
    } catch(error){
        res.status(500).json({message:error.message});
    }

}

const updateAbout = async (req,res) => {
    try {
        const existingAbout = await About.findOne();
        if (existingAbout){
            existingAbout.set(req.body);
            await existingAbout.save();
            res.json(existingAbout);
        } else {
            const newAbout = new About(req.body);
            await newAbout.save();
            res.json(newAbout);
        }
    } catch(error){
        res.status(500).json({message:error.message});
    }
}

export {getAbout, updateAbout};