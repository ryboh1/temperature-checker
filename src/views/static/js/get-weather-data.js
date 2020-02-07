let {ipcRenderer} = require("electron")

/*ipc renderer process*/
sendData = {

    send: (inputID) => {
        let theInputValue = document.getElementById(`${inputID}`).value   
        ipcRenderer.send("weather-request",theInputValue)

        ipcRenderer.on("the-weather-temperature", (event, data) => weatherRequest.insertWeatherData(data, "temperature"))
    }
}

weatherRequest = {

    insertWeatherData: (data,elementID) => {
        if(data === "Not a Location"){
            document.getElementById(`${elementID}`).innerHTML = data
        }
        else{
            document.getElementById(`${elementID}`).innerHTML = `${data} &#8451`
        }
    }
}