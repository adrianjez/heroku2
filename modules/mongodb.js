/**
 * Created by adrian on 17.01.17.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Dane do połączenia w adresie URL
var url = 'mongodb://localhost:27017/projekt2';
var mongodb;

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Nawiązano połączenie z serwerem");
    mongodb = db;
    module.exports = mongodb;
});

