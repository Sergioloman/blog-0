const { User, Post } = require("../models");

const postController = {
    getPosts(req, res) {
        Post.find({})
            .then((response) => {
                res.json(response);
            })
            .catch((err) => res.status(500).json(err));
    },

    getSinglePost(req, res) {
        Post.findOne({ _id: req.params.postId })
            .then((response) => {
                res.json(response);
            })
            .catch((err) => res.status(500).json(err));
    },
    createNewPost(req, res) {
        Post.create(req.body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { username: req.body.username },
                    { $push: { posts: _id } },
                    { new: true }
                )                
            })
            .then((response) => {
                res.json(response + " hope you get there buddy");
            })
            .catch((err) => res.status(500).json(err));
    },

    updatePost(req, res) {
        Post.findOneAndUpdate(
            { _id: req.params.postId },
            { $set: req.body },
            { new: true, runValidators: true }
        )
            .then((response) => {
                res.json(response);
            })
            .catch((err) => res.status(500).json(err));

    },
    deletePost(req, res) {
        Post.findOneAndDelete(
            { _id: req.params.postId }
        )
            .then((response) => {
                res.json(response);
            })
            .catch((err) => res.status(500).json(err));
    }
};

module.exports = postController;