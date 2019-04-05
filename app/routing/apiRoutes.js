var FriendData = require("./../data/friends");

module.exports = function (app, path) {
   // app.get("/friends", function(req, res){
   //     res.json(FriendData);
   // })
   app.post("/friends", function (req, res) {
      console.log("req.body", req.body);
      // FriendData.push(req.body);
      console.log("FriendData", FriendData)
      //===========LOGIC==============
      var difference = [];
      var i = 0;
      var matchnum;
      var index;
      for (i = 0; i < FriendData.length; i++) {
         difference[i] = Math.abs(FriendData[i].q1 - req.body.q1) + Math.abs(FriendData[i].q2 - req.body.q2) + Math.abs(FriendData[i].q3 - req.body.q3);
      }
      console.log(difference);
      console.log("matchnum")
      index = difference.findIndex(Math.min(...difference));
      console.log("index", index);

      let match = FriendData[matchnum];
      res.json(JSON.stringify(({ name: match })));
      // Write the logic HERE  and return the match 
   })


}