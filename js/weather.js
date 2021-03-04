// ********************* LEVEL 2 - EXERCICE 1 *******************************
'use strict'

// *************************** BARCELONA *******************************

/* URL API */
const API = "https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019"; 

/* CREAT AN ELEMENT <t> */
let tLocation = document.createElement("t");
/* THE appendChild() METHOD APPENDS A NODE AS THE LAST CHILD OF A NODE */ 
document.getElementById("weather").appendChild(tLocation); 

/* ASYNC FUNCTION */
(async function getWeather() {
    let response = await fetch(API, {
        headers:{
            "Accept": "application/json",
        },
    });
    let data = await response.json();
    console.log(tLocation);
    //Print for screen
    city.textContent = `${data.municipio.NOMBRE}`;
    temp.textContent = `${data.temperatura_actual}º`;
    description.textContent = `${data.stateSky.description}`;
    rain.textContent = `Rain  ${data.lluvia}%`;
    humidity.textContent = `Humidity ${data.humedad}%`;
    wind.textContent = `Wind ${data.viento} km/h`;

})();

// ***************************** GIRONA *******************************

/* URL API */
const API2 = "https://www.el-tiempo.net/api/json/v2/provincias/17/municipios/17079";

/* CREAT AN ELEMENT <t> */
let tLocation2 = document.createElement("t");
/* THE appendChild() METHOD APPENDS A NODE AS THE LAST CHILD OF A NODE */
document.getElementById("weather2").appendChild(tLocation);

/* ASYNC FUNCTION */
(async function getWeather2() {
    let response = await fetch(API2, {
        headers: {
            "Accept": "application/json",
        },
    });
    let data = await response.json();
    console.log(tLocation2);
    //Print for screen
    city2.textContent = `${data.municipio.NOMBRE}`;
    temp2.textContent = `${data.temperatura_actual}º`;
    description2.textContent = `${data.stateSky.description}`;
    rain2.textContent = `Rain  ${data.lluvia}%`;
    humidity2.textContent = `Humidity ${data.humedad}%`;
    wind2.textContent = `Wind ${data.viento} km/h`;

})();

// ***************************** TARRAGONA *******************************

/* URL API */
const API3 = "https://www.el-tiempo.net/api/json/v2/provincias/43/municipios/43148";

/* CREAT AN ELEMENT <t> */
let tLocation3 = document.createElement("t");
/* THE appendChild() METHOD APPENDS A NODE AS THE LAST CHILD OF A NODE */
document.getElementById("weather3").appendChild(tLocation);

/* ASYNC FUNCTION */
(async function getWeather3() {
    let response = await fetch(API3, {
        headers: {
            "Accept": "application/json",
        },
    });
    let data = await response.json();
    console.log(tLocation3);
    //Print for screen
    city3.textContent = `${data.municipio.NOMBRE}`;
    temp3.textContent = `${data.temperatura_actual}º`;
    description3.textContent = `${data.stateSky.description}`;
    rain3.textContent = `Rain  ${data.lluvia}%`;
    humidity3.textContent = `Humidity ${data.humedad}%`;
    wind3.textContent = `Wind ${data.viento} km/h`;

})();


// ***************************** LLEIDA *******************************

/* URL API */
const API4 = "https://www.el-tiempo.net/api/json/v2/provincias/25/municipios/25120";

/* CREAT AN ELEMENT <t> */
let tLocation4 = document.createElement("t");
/* THE appendChild() METHOD APPENDS A NODE AS THE LAST CHILD OF A NODE */
document.getElementById("weather4").appendChild(tLocation);

/* ASYNC FUNCTION */
(async function getWeather4() {
    let response = await fetch(API4, {
        headers: {
            "Accept": "application/json",
        },
    });
    let data = await response.json();
    console.log(tLocation4);
    //Print for screen
    city4.textContent = `${data.municipio.NOMBRE}`;
    temp4.textContent = `${data.temperatura_actual}º`;
    description4.textContent = `${data.stateSky.description}`;
    rain4.textContent = `Rain  ${data.lluvia}%`;
    humidity4.textContent = `Humidity ${data.humedad}%`;
    wind4.textContent = `Wind ${data.viento} km/h`;

})();
