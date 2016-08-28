var connect = require('./db');
var ObjectId = require('mongodb').ObjectID;

module.exports = function(callback){
    connect(function(db){
        var foo = db.collection("image");
        foo.find({}).toArray(function(err, docs){
            if(err){throw err;}
            callback(docs);
            db.close();
        });
    });
}