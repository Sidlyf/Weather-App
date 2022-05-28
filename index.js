
//API KEY-->
const api_key = "52d03c833ca01aeed0e97721a10a8732"
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



//async and await works together

async function getData(lat,lon){
    //getting the element from html part
    let city = document.getElementById("city").value;

    //making url using template literal
    //daily forecast
    //let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`
    //console.log(url)

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    //console.log(url)
    //let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;

    //A medium to destination
    //fetch url return promise
    let res = await fetch(url);

    //collecting
    let data = await res.json();
    append(data);

    console.log(data)
}

function append(data){
        
    

        let container = document.getElementById("container")
        container.innerHTML = null;

        let h3 = document.createElement("h3");
        h3.innerText = data.name;

        let p = document.createElement("p");
        p.innerText = `Current temp: ${data.main.temp}`;

        let p2 = document.createElement("p");
        p2.innerText = `Min temp: ${data.main.temp_min}`

        let p3 = document.createElement("p");
        p3.innerText = `Max temp: ${data.main.temp_max}`

        let iframe = document.getElementById("gmap_canvas");
        iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

        let clouds = document.createElement("p");
        clouds.innerText = `Clouds: ${data.clouds.all}`

        let sunrise = document.createElement("p");
        sunrise.innerText = `Sunrise: ${data.sys.sunrise}`
       

        let sunset = document.createElement("p");
        sunset.innerText = `Sunset: ${data.sys.sunset}`

        container.append(h3,p,p2,p3,clouds,sunrise,sunset)

        //let sun_div = document.createElement("div");
        //let sun_rise = document.createElement("img");
        //sun_rise.src = "https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-27-2682824_90788.png"
        
        //sun_div.append(sun_rise)
        container.append(sun_rise)

   
}


// function getLocationWeather(){
//     navigator.geolocation.getCurrentPosition(success);

//     function success(position){
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         getData(latitude,longitude);

//         console.log(latitude);
//         console.log(longitude);
        

//     }
// }

// getLocationWeather();