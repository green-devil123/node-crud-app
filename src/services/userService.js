const User = require("../models/userModel");

const createUser = async(data)=>{
    return await User.create(data);
}

const getAllUser = async()=>{
    return await User.find({});
}

const getUserById = async(id)=>{
    return await User.findById(id);
}

const updateUser = async(id, data) =>{
    return await User.findByIdAndUpdate(id, data, {new: true});
}

const deleteUser = async(id)=>{
    return await User.findByIdAndDelete(id);
}

module.exports = {createUser, getAllUser, getUserById, updateUser, deleteUser};