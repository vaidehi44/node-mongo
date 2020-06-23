const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

url = "mongodb://localhost:27017";
MongoClient.connect(url).then((client) => {

    console.log('connected successfully');

    const db = client.db('Confusion');
    
    return dboper.insertDocument(db,'dishes',{"name":"Vadonut","description":"test"})
    .then((result) => {
        console.log('Inserted document:\n',result.ops);

        return dboper.findDocuments(db,'dishes')
    })
    .then((result) => {
        console.log("Found documents:\n",result);
        return dboper.updateDocument(db,'dishes',{"name":"Vadonut"},{"description":"updated test"})
    })
    .then((result) => {
        console.log('Updated document:',result.result);

        return dboper.findDocuments(db,'dishes')
    })
    .then((result) => {
        console.log("Found updated documents:\n",result);

        return db.dropCollection('dishes')
    })
    .then((result) => {
        console.log('Droped collection:',result);
        client.close();
                    })
    .catch((err) => console.log(err));
 })
 .catch((err) => console.log(err))

            
    
    

