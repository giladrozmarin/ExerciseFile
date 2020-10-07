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
 //{unit: "Artillery battery A", gun: 1, M548: 2, Track: 3, M113: 4,BMP-1: 5, Rocket: 6,Artilley: 7 ,light vehicle: 8 terrain :Urban warfare}
 const MOE = {
   
    UNIT: "unit",
    GUN: "gun",
    M548: "M548",
    TRACK: "Track",
    M113: "M113",
    BMP_1: "BMP-1",
    ROCKET: "Rocket",
    ARTILLERY: "Artilley",
    LIGHT_VEHICLE: "light vehicle",
    TERRAIN: "terrain"
 
};




module.exports = { PARAMS ,USER,MOE }
