'use strict';

// // ********* LEVEL 3 - EXERCICE 5 *******

const url = ["https://api.chucknorris.io/jokes/random", "https://icanhazdadjoke.com"]; // Array diferents APIS

const generateJoke = async () => {
    let random = Math.floor(Math.random() * url.length); // Random URL
    let actualUrl = url[random]; // Select url with this variable

    let response = await fetch(actualUrl, {
        headers: {
            'Accept': 'application/json'
        }
    });
    let data = await response.json();
    const joke = [data.value, data.joke]; // Array amb les key dels objectes of each api joke
    p.innerText = joke[random];
}
let p = document.createElement("p"); // An element is created
document.getElementById("joke").appendChild(p); // Introduce <p> as child of jokeContent
    
// When click button "Next joke", we will call to function generateJoke
document.getElementById("buttonJoke").addEventListener("click", () => {
    generateJoke();
});



// ********* LEVEL 1 - EXERCICE 1 *******
/*
let currentJoke = document.querySelector('#content'); // Returns the first element that matches a specified CSS selector(s) in the document.

function generateJoke() {
    fetch('https://icanhazdadjoke.com/', { //URL PUBLIC

        headers: {
            'Accept': 'application/json'
        },
        method: 'GET', // we use GET operation because want to see the data from the API
    })
        .then((response) => response.json()) // .THEN() method returns an OBJECT

        .then(data => {
            // print on console
            console.log(data);
            // print on screen
            currentJoke.innerHTML = `${data.joke}`
        })
}

     .catch (function(err) { //This method is used for see any problem
            console.error(err);
        });
*/
