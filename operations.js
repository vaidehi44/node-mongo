const assert = require('assert')

exports.insertDocument = (db,collection,document,callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err,result) => {
        assert.equal(err,null);
        console.log('inserted',result.result)
        callback(result);
    })
}

exports.findDocuments = (db,collection,callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err,result) => {
        assert.equal(err,null);
        console.log('found:\n');
        console.log(result);
        callback(result)
    })
}

exports.removeDocument = (db,collection,document, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err,result) => {
        assert.equal(err,null);
        console.log('deleted the doc',document);
        callback(result);
    })
}

exports.updateDocument = (db,collection,document,update,callback) => {
    const coll = db.collection(collection);
    coll.updateOne(document,{$set:update},null,(err,result) => {
        assert.equal(err,null);
        console.log('Updated the doc ',document,' with update ',update);
        callback(result);
    })
}