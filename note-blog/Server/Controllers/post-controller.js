const { User, Post} = require("../models");

const postController = {
    getThoughts(req, res){
        Post.find({})
        .then((response) => {
            res.json(response);
          })
          .catch((err) => res.status(500).json(err));
    },
    
    getSinglePost(req,res){
        Post.findOne({_id: req.params.postId})
        .then((response) => {
            res.json(response);
          })
          .catch((err) => res.status(500).json(err));
    },
    createNewPost(req,res){
        Post.create(req.body)
        .then(({_id})=>{
            return User.findOneAndUpdate(
                { username: req.body.username},
                { $push: { thoughts: _id } },
                { new: true }
            )
           
        })
        .then((response) => {
            res.json(response);
          })
          .catch((err) => res.status(500).json(err));
    },
 
    updatePost(req,res){
        Post.findOneAndUpdate(
            { _id: req.params.postId},
            { $set: req.body},
            { new: true, runValidators:true}
        )
        .then((response) => {
            res.json(response);
          })
          .catch((err) => res.status(500).json(err));

    },
       deletePost(req,res){
        Post.findOneAndDelete(
            { _id: req.params.thoughtId}
        )
        .then((response) => {
            res.json(response);
          })
          .catch((err) => res.status(500).json(err));
    }
};

module.exports = postController;