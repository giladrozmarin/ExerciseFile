var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID;
const PARAMS = {
    SERVER_URL: "mongodb://127.0.0.1:27017/",
    DB: "exercideFileDB",
    ID: "_id",
    /*
    WORKPLACES: "workplaces",
    CONSTRAINTS: "constraints",
    COMMONS: "commons",
    POSITIONS: "positions",
    WORKERS: "workers",
    USER_ID: "userId",
    WORKPLACE_ID: "workplaceId",
    */
    EXERCISES: "exercises",
    EXERCISENAME: "exerciseName",
    EXERCIDETYPE: "exerciseType",
    FIELDAPPROVE: "fieldApprove",
    FILEAPPROVE: "fileApprove",
    ARTILLERYAPPROVE: "artilleryApprove",
    EXERCISEMANAGER: "exerciseManager",
    TRAINEROFFICERAPPROVE: "trainerOfficerApprove"
};

module.exports = PARAMS