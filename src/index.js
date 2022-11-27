function getADay() {
  //This function gets the current day
  let currentDate = new Date();
  let day = currentDate.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let displayDate = days[day];

  //console.log(displayDate)
  return displayDate;
}

function getTheTime() {
  //This function gets the current time
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  if (hour < "10") {
    hour = `0${hour}`;
  }

  if (minutes < "10") {
    minutes = `0${minutes}`;
  }

  let completeTime = `${hour}:${minutes}`;

  //  console.log(completeTime);
  return completeTime;
}

function dateAndTime() {
  //places date on the weather app
  let placeDate = document.querySelector("#date");
  placeDate.innerHTML = getADay();

  //places time on the weather app
  let placeTime = document.querySelector("#time");
  placeTime.innerHTML = getTheTime();
}

dateAndTime();

//selects serach bar, and listens for submit
let searchBar = document.querySelector("#search");
searchBar.addEventListener("submit", displayCity);

//selects the city element and injects data from search bar to city element
function displayCity(event) {
  event.preventDefault();
  let inputSearch = document.querySelector("#searchbox-input");
  let city = document.querySelector("#city");
  city.innerHTML = inputSearch.value;
}

//selects the fahrenheit link, and listens for click to execute function
let changeFahrenheit = document.querySelector("#fahrenheit-link");
changeFahrenheit.addEventListener("click", convertFahrenheit);

//takes current degree in fahrenheit and injects it as the large degree
function convertFahrenheit(event) {
  let currentDegree = "55";
  event.preventDefault();
  let degrees = document.querySelector("#degrees");
  degrees.innerHTML = currentDegree + "°";
  return currentDegree;
}

//selects celsius link and listens for click to execute function
let changeCelsius = document.querySelector("#celsius-link");
changeCelsius.addEventListener("click", convertCelsius);

//selects large degree and injects it with a conversion from the fahrenheit function to celsius
function convertCelsius(event) {
  event.preventDefault();
  let degrees = document.querySelector("#degrees");
  let fahrenheitDegree = convertFahrenheit(event);
  degrees.innerHTML = Math.round(((fahrenheitDegree - 32) * 5) / 9) + "°";
}
