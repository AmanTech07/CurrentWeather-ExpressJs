const loc = document.getElementById("location");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const data_hide = document.getElementById("tempbox");

const changeStatus = (val) => {
    console.log(val);
    if(val==="Clouds") temp_status.innerHTML = `<i class="fas fa-cloud"></i>`;
    else if(val==="Sunny") temp_status.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    else if(val==="Rainy") temp_status.innerHTML = `<i class="fas fa-cloud-rain"></i>`;
    else if(val==="Fog") temp_status.innerHTML = `<i class="fa-solid fa-smog"></i>`;
    else temp_status.innerHTML = `<i class="fas fa-cloud-sun"></i>`;
}

const changes = (data, city) => {
    let country = data.sys.country;
    let temperature = data.main.temp;
    let temperatureStatus = data.weather[0].main;
    city_name.innerHTML = `${city}, ${country}`;
    temp.innerHTML = `<span>${temperature}</span><sup>o</sup>C`;
    changeStatus(temperatureStatus);
    data_hide.classList.remove('data_hide');
}

const getInfo = async (event) => {
    event.preventDefault();     // it prevents a submit button from submitting a form
    let city = loc.value;
    if(city===""){
        city_name.innerHTML = "Enter your city before search!";
        data_hide.classList.add('data_hide');
    }
    else{
        try{
            loc.value = "";
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d3593db5e8552cc87239b754b39d2d0e`
            const result = await fetch(url);
            const data = await result.json();

            return changes(data, city);
        }catch(err){
            city_name.innerHTML = `City Not Found!`;
            data_hide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);
