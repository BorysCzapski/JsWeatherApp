const api = "029810b28b6f9183a8ae13d8291b4a01";
var lat = 20;
var lon = 20;

var temperature = 0;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;

const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${api}`;

function retrieveLocation() {
  const town = document.getElementById('town').value;

  fetch(`${apiUrl}&q=${town}`)
    .then(response => response.json())
    .then(data => {
      temperature = Math.round(data.main.temp - 273.15);
      const a = document.getElementById('celcius');
      a.innerText = temperature + " °C";
    })
    .catch(error => {
      alert("Couldn't access the data!!!");
    });
}
var key = "c";
function convert(){
  const a = document.getElementById('celcius');
  if(key == "c"){
    if(!isNaN(temperature)){
      a.innerText = Math.round((temperature*9)/5+32) + " °F";
      temperature = Math.round((temperature*9)/5+32)
      key = "f";
      console.log(key)
    }
  }
  else{
    if(!isNaN(temperature)){
      a.innerText = Math.round((temperature - 32) * 5/9) + " °C";
      temperature = Math.round((temperature - 32) * 5/9)
      key = "c";
      console.log(key)
    }
  }
}