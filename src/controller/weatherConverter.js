exports.converter = {
    convertToCelcius: (theData) =>{
            let kelvin = theData["main"]["temp"]
            let celcius = kelvin - 273.15
            let weatherTemperature = celcius.toFixed(2)

            return weatherTemperature
    }
}