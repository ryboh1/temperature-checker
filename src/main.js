const {app,BrowserWindow,ipcMain } = require("electron")
const fetch = require("node-fetch")
const theWindow = require("./controller/window.js")
const {converter} = require("./controller/weatherConverter")


app.on("ready", () => theWindow.window.createWindow(BrowserWindow));


ipcMain.on("weather-request", (event, theData) => {

    const apiID = "d594124b927b9f2667c55c2b3ec5e230"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${theData}&appid=${apiID}`) 

    .then(response => response.json())

    .then(returnedData => {
        try{
            let weatherTemperature = converter.convertToCelcius(returnedData)
            event.reply("the-weather-temperature",weatherTemperature)
        }
        catch(error){
            event.reply("the-weather-temperature", "Not a Location")
        }
    })
})