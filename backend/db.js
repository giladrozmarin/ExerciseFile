var userName = 'yogev'
var password = '1234'
const PARAMS = {
    SERVER_URL: "mongodb+srv://" + userName + ":" + password + "@exercisefile-nav1h.gcp.mongodb.net/test?retryWrites=true&w=majority",
    DB: "exercideFileDB",
    ID: "id",
    /*
    CONSTRAINTS: "constraints",
    COMMONS: "commons",
    POSITIONS: "positions",
    WORKERS: "workers",
    USER_ID: "userId",
    WORKPLACE_ID: "workplaceId",
    */
    USERS: "Users",
    EXERCISES: "Exercises",
    EXERCISAUTHORID: "exerciseAuthorId",
    EXERCISENAME: "exerciseName",
    EXERCIDETYPE: "exerciseType",
    FIELDAPPROVE: "fieldApprove",
    FILEAPPROVE: "fileApprove",
    ARTILLERYAPPROVE: "artilleryApprove",
    EXERCISEMANAGER: "exerciseManager",
    TRAINEROFFICERAPPROVE: "trainerOfficerApprove"
};

module.exports = PARAMS