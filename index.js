const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

url = "mongodb://localhost:27017";
MongoClient.connect(url, (err,client) => {
    assert.equal(err,null);
    console.log('connected successfully');

    db = client.db('Confusion');

    dboper.insertDocument(db,'dishes',{"name":"Vadonut","description":"test"},(result) => {
        console.log('Insert document:\n',result.ops);

        dboper.findDocuments(db,'dishes',(result) => {
            console.log("Found documents:\n",result);

            dboper.updateDocument(db,'dishes',{"name":"Vadonut"},{"description":"updated test"},(result) => {
                console.log('Updated document:',result.result);

                dboper.findDocuments(db,'dishes',(result) => {
                    console.log("Found updated documents:\n",result);

                    db.dropCollection('dishes',(result) => {
                        console.log('Droped collection:',result);

                        client.close();
                    })
            })
        })
    })
})
})