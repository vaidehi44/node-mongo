
exports.insertDocument = (db,collection,document,callback) => {
    const coll = db.collection(collection);
    return coll.insert(document)
    };


exports.findDocuments = (db,collection,callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray()
       
    };


exports.removeDocument = (db,collection,document, callback) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document)
    };

exports.updateDocument = (db,collection,document,update,callback) => {
    const coll = db.collection(collection);
    return coll.updateOne(document,{$set:update},null)
       
    };