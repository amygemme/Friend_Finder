var FriendData = require("./../data/friends");

module.exports = function(app,path){
    app.get("/friends", function(req, res){
        res.json(FriendData);
    })
}