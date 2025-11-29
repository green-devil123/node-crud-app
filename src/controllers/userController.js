const userService = require("../services/userService");

const createUser = async(req, res) =>{
    try{
        const user = await userService.createUser(req.body);
        res.status(201).json({success: true, data: user});
    }catch(err){
    console.error(err);
    res.status(500).json({success: false, message: err.message});
    }
}

const getAllUser = async(req, res) =>{
    try{
        const user = await userService.getAllUser();
        res.status(200).json({success: true, data: user});
    }catch(err){
    console.error(err);
    res.status(500).json({success: false, message: err.message});
    }
}

const getUserById = async(req , res)=>{
    try{
        const user = await userService.getUserById(req.params.id);
    if(!user) return res.status(404).json({success: false, data: "User Not Found"});
    res.status(200).json({success: true, data: user});
    }catch(err){
    console.error(err);
    res.status(500).json({success: false, message: err.message});
    }
}

const updateUser = async(req , res)=>{
    try{
        const updateUser = await userService.updateUser(req.params.id, req.body);
    if(!updateUser) return res.status(404).json({success: false, message: "User Not Found"});
    res.status(200).json({success: true, data: updateUser});
    }catch(err){
    console.error(err);
    res.status(500).json({success: false, message: err.message});
    }
}

const deleteUser = async(req, res)=>{
    try{
        const deleteUser = await userService.deleteUser(req.params.id);
    if(!deleteUser) return res.status(404).json({success: false, message: "User Not Found"});
    res.status(200).json({success: true, message: "User deleted successfully"});
    }catch(err){
    console.error(err);
    res.status(500).json({success: false, message: err.message});
    }
}

module.exports = {createUser, getAllUser, getUserById, updateUser, deleteUser};