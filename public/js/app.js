console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = search.value
   
    fetch('/weather?address ='+address).then((response)=>{
        
        response.json().then((data)=>{
            console.log(data)
            if(data.error)
            {
                $('#error').show();
                $('#error').html(data.error);
                $('#forecast').hide();
            }
            else{
                $('#error').hide();
                $('#forecast').show();
                $('#temp').html(data.forecastdata.current.temperature + '°C')
               // $('#humidity').html(data.forecasdata.current.humidity + '%')
                $('#wind_speed').html(data.forecastdata.current.wind_speed + ' km/hr')
                $('#wind_descriptions').html(data.forecastdata.current.weather_descriptions[0])
                $('#location').html(data.location)
    
                 }
        })
    })
})