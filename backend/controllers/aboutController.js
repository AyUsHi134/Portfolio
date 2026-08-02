import About from "../models/About.js";

const toOut = (doc) => ({
    heading: doc.heading,
    paragraph: doc.description
    ? doc.description.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean)
    : []
});

const getAbout = async (req, res, next) => {
    try{
        let doc = await About.findOne();
        if(!doc) {
            doc = await About.create({
                heading: "Where artistry meets strategy for success.",
                description: "A software developer who sees every line of code as a chance to solve problems and create value, building with precision and designing with purpose to make technology feel effortless.\n\nFor me, great software isn’t just functional—it’s intuitive, reliable, and built to last."
            });
        }
        return res.json(toOut(doc));
    } catch(error){
        next(error);
    }

};

const updateAbout = async (req,res,next) => {
    try {
        const { heading, paragraph, description} = req.body;

        if (
            typeof heading !== "string" &&
            !Array.isArray(paragraph) &&
            typeof description !== "string"
        ) {
            const error = new Error("Provide at least one of: heading, paragraph, description");
            error.statusCode = 400;
            return next(error);
        }

        let doc = await About.findOne();
        if(!doc) doc = new About();

        if(typeof heading === "string") doc.heading = heading;

        if(Array.isArray(paragraph)) {
            doc.description = paragraph.join("\n\n");
        } else if (typeof description === "string"){
            doc.description = description;
        }

        await doc.save();
        return res.json(toOut(doc));
    } catch(error){
        next(error);
    }
};

export {getAbout, updateAbout};