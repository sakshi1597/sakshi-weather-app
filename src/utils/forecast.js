const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=2147afe5f2946616974561305635ebc8&query=' +latitude+ ',' +longitude
 

    request({ url: url,json:true},(error,response)=>{
        if(error) 
        {
            callback('Unable to connect',undefined)
        }
        else if(response.error)
        {
            callback('Invalid location',undefined)
        }
        else
        {
            callback(undefined, response.body)
        }
    })

}

module.exports = forecast