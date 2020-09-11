var userName = 'yogev'
var password = '1234'

const USER = {
    SERVER_URL: "mongodb+srv://" + userName + ":" + password + "@exercisefile-nav1h.gcp.mongodb.net/test?retryWrites=true&w=majority",
    DB: "exercideFileDB",
    USERS: "Users",
    FIRSTNAME: "firstName",
    LASTNAME: "lastName",
    RANK: "rank",
    ID: "id",
    DUTY: "duty",
    FORCE: "force",
    EMAIL: "email",
    PASSWORD: "password",
};

const PARAMS = {
    SERVER_URL: "mongodb+srv://" + userName + ":" + password + "@exercisefile-nav1h.gcp.mongodb.net/test?retryWrites=true&w=majority",
    DB: "exercideFileDB",
    ID: "id",
    USERS: "Users",
    EXERCISES: "Exercises",
    EXERCISEBY: "exerciseBy",
    EXERCISENAME: "exerciseName",
    EXERCISEOOB: "exerciseOOB",
    EXERCISEPOD: "exercisePOD",
    EXERCISETYPE: "exerciseType",
    EXERCISELIVE: "exerciseLive",
    FIELDAPPROVE: "fieldApprove",
    FILEAPPROVE: "fileApprove",
    ARTILLERYAPPROVE: "artilleryApprove",
    EXERCISEMANAGER: "exerciseManager",
    TRAINEROFFICERAPPROVE: "trainerOfficerApprove"
};





module.exports = { PARAMS ,USER }
