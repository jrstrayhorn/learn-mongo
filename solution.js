/*
// 3 - Connect and Find Documents
var mongo = require('mongodb').MongoClient
var age = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
    if (err) throw err
    // db gives access to the database
    db.collection('parrots')
        .find({
            age: {
                $gt: +age
            }
        })
        .toArray(function(err, docs) {
            if (err) throw err
            console.log(docs)
            db.close()
            //documents.forEach((value) => console.log(value))
        })

    
})
    */

    /*
// 4 - Connect and Find Projections

var mongo = require('mongodb').MongoClient
var age = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
    if (err) throw err
    db.collection('parrots')
        .find({
            age: {
                $gt: parseInt(age)
            }
        }, {
            name: 1
            , age: 1
            , _id: 0
        }).toArray(function(err, docs) {
            if (err) throw err
            console.log(docs)
            db.close()
        })

})
    */

   /*
// 5 - Connect and Insert

var mongo = require('mongodb').MongoClient
var fName = process.argv[2]
var lName = process.argv[3]

var url = 'mongodb://localhost:27017/learnyoumongo'

var newDoc = {
    firstName: fName,
    lastName: lName
}

mongo.connect(url, function(err, db) {
    if (err) throw err
    db.collection('docs')
        .insert(newDoc, function(err, data) {
            if (err) throw err
            console.log(JSON.stringify(data))
            db.close()
        })
})
    */
    

// 6 - Connect and Update
/*
var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/' + process.argv[2]

mongo.connect(url, function(err, db) {
    if (err) throw err
    db.collection('users')
        .update({
            username: "tinatime"
        }, {
            $set: {
                age: 40
            }
        }, function (err) {
            if (err) throw err
            db.close()
        })
})
    */

    /*
// 7 - Connect and Remove
var mongo = require('mongodb').MongoClient

var dbName = process.argv[2]
var collName = process.argv[3]
var id = process.argv[4]

var url = 'mongodb://localhost:27017/' + dbName

mongo.connect(url, function(err, db) {
    if (err) throw err
    db.collection(collName)
        .remove({
            _id: id
        }, function (err) {
            if (err) throw err
            db.close()
        })
})
    */
//console.log(process.argv.forEach((value) => console.log(value)))

/*
// 8 - Connect and Count
var mongo = require('mongodb').MongoClient

var ageInput = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
    if (err) throw err
    db.collection('parrots')
        .count({
            age: {
                $gt: parseInt(ageInput)
            }
        }, function(err, count) {
            if (err) throw err
            console.log(count)
            db.close()
        })
})
    */

    /*
// 9 - Connect and Aggregate

var mongo = require('mongodb').MongoClient

var sizeInput = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

var match = { $match: { size: sizeInput }}
var group = { $group: {
    _id: 'avg'
    , avg: {
        $avg: '$price'
    }
}}

mongo.connect(url, function(err, db) {
    if (err) throw err
    db.collection('prices')
        .aggregate([
            match
            , group
        ]).toArray(function(err, results) {
            if (err) throw err
            console.log(Number(results[0].avg).toFixed(2))
            db.close()
        })
})
    */
