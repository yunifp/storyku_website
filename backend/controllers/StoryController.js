import Story from "../models/StoryModel.js";

export const getStories = async(req, res)=>{
    try{
        const response = await Story.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getStoriesById = async(req, res)=>{
    try{
        const response = await Story.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const createStory = async(req, res)=>{
    try{
       await Story.create(req.body);
        res.status(201).json({msg: "Story Created"});
    }catch(error){
        console.log(error.message);
    }
}

export const updateStory = async(req, res)=>{
    try{
       await Story.update(req.body,{
        where:{
            id: req.params.id
        }
       });
       res.status(200).json({msg: "Story Updated"})
    }catch(error){
        console.log(error.message);
    }
}

export const deleteStory = async(req, res)=>{
    try{
       await Story.destroy({
        where:{
            id: req.params.id
        }
       });
       res.status(200).json({msg: "Story Deleted"})
    }catch(error){
        console.log(error.message);
    }
}