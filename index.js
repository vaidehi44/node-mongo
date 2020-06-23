const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

url = "mongodb://localhost:27017";
MongoClient.connect(url, (err,client) => {
    assert.equal(err,null);
    console.log('connected successfully');

    db = client.db('Confusion');
    collection = db.collection('dishes');

    collection.insertOne({"name":"Puranpoli","description":"tasty"},(err, result) => {
        assert.equal(err,null);
        console.log('After insert\n')
        console.log(result.ops);

        collection.find({}).toArray((err,docs) => {
            assert.equal(err,null);
            console.log('found\n');
            console.log(docs);

            db.dropCollection('dishes',(err,result) => {
                assert.equal(err,null);
                client.close;
        })
        })
    })
})