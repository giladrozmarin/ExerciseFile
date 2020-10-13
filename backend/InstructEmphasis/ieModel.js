const DB = require('../db');
const dal = require('./ieDAL');
const API_KEY = "caba7178c08ce271766df16583a1b4e8"
const fetch = require('node-fetch')

async function getWeather(city,API_KEY){
    try {
    const api_call =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IL&appid=caba7178c08ce271766df16583a1b4e8&units=metric`)
    const data = await api_call.json();
    console.table(data.main)
    const result =  data.main.temp
    console.table(result)
    let res = await result 
    console.log(res); 
    return res
    }
    catch (err) {
        console.log('fetch failed', err);
      }
  }
function MeansOfExercise(req, res) {
    //{unit: "Artillery battery A", gun: 1, M548: 2, Track: 3, M113: 4,BMP-1: 5, Rocket: 6,Artilley: 7 ,light vehicle: 8}
    let facts = req.body
   console.table(facts)

    dal.CheckRules(facts, function (engineRes) {
        console.log(engineRes);
        res.send(engineRes);
    });
}

function FireArea(req, res) {
    //{unit: "Artillery battery A", gun: 1, M548: 2, Track: 3, M113: 4,BMP-1: 5, Rocket: 6,Artilley: 7 ,light vehicle: 8}
    let facts = req.body
    //area1: 23  Exercise-type: open terrain 
    newFacts={[facts[0].unit]:facts[0].Weather,'Exercise-type':facts[1]['Exercise-type']}
   console.table(newFacts)

    dal.CheckRules(newFacts, function (engineRes) {
        console.log(engineRes);
        res.send(engineRes);
    });
}

function MeansOfExerciseData(req, res) {

    let table1Query = '{$or:[{"o":"APC"},{"o":"Truck"},{"o":"Rocket"},{"o":"Artillery"},{"o":"SPG"}]},{s:1}'

    // db.Types.find({$or:[{"o":"APC"},{"o":"Truck"},{"o":"Rocket"},{"o":"Artillery"},{"o":"SPG"}]},{s:1})

    dal.find(table1Query, function (dbRes) {




        dbRes.map((trio, i) => dbRes[i] = { field: trio.s, title: trio.s, type: 'numeric' })

        console.table(dbRes);
        res.send({ MeansOfExerciseData: dbRes });

    })
}

async function  fireAreasDataOpen(req,res){
    let table1Query = '{{"o":"Open-terrain"},{s:1}}'

    // db.Types.find({$or:[{"o":"APC"},{"o":"Truck"},{"o":"Rocket"},{"o":"Artillery"},{"o":"SPG"}]},{s:1})

     dal.find1(table1Query, async function (dbRes) {

 
      //
     
       const weather = ['shlomi','eilat','Tel Aviv','ariel']
       
       await Promise.all(weather.map(i=> weather[i]= getWeather(i,API_KEY)))
       .then(
        (weather) =>{
        dbRes.map((trio, i) => dbRes[i] = { unit: trio.s,Weather: weather[i]})
        console.table(dbRes);
        res.send({ MeansOfExerciseData: dbRes });
    }  )
  

    })
}

async function fireAreasDataUrban(req,res){
    let table1Query = '{{"o":"Urban-warfare"},{s:1}}'

    // db.Types.find({$or:[{"o":"APC"},{"o":"Truck"},{"o":"Rocket"},{"o":"Artillery"},{"o":"SPG"}]},{s:1})

    // db.Types.find({$or:[{"o":"APC"},{"o":"Truck"},{"o":"Rocket"},{"o":"Artillery"},{"o":"SPG"}]},{s:1})

    dal.find2 (table1Query, async function (dbRes) {

 
        //
       
         const weather = ['shlomi','eilat','Tel Aviv','ariel']
         
         await Promise.all(weather.map(i=> weather[i]= getWeather(i,API_KEY)))
         .then(
          (weather) =>{
          dbRes.map((trio, i) => dbRes[i] = { unit: trio.s,Weather: weather[i]})
          console.table(dbRes);
          res.send({ MeansOfExerciseData: dbRes });
      }  )
    
  
      }) 
  }

module.exports = { MeansOfExercise, MeansOfExerciseData,fireAreasDataOpen,fireAreasDataUrban,FireArea }
