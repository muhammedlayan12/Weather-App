// const api_key = '4a7dd92c27b24a388b7200917242008';
// const form = document.querySelector("form");
// const search = document.querySelector("#search");
// const weather = document.querySelector("#weather");

// const getWeather = async (city) =>{
//     weather.innerHTML = '<h2>Loading....</h2>';
//     const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;
//     const responce = await fetch(url);
//     const data = await responce.json();
//     return showWeather(data);
// } 

// const showWeather = (data) => {
//     if(!data || data.error){
//         weather.innerHTML = `<h2>City Not Found</h2>`;
//         return;
//     }

//        weather.innerHTML = `
//         <div>
//             <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
//         </div>
//         <div>
//             <h2>${data.current.temp_c} ℃</h2>
//             <h4>${data.current.condition.text}</h4>
//         </div>
//     `;
//     }

// form.addEventListener("submit",function(event){
//     getWeather(search.value);
//     event.preventDefault();
// })



// const api_Key = `4a7dd92c27b24a388b7200917242008`;
// const form = document.querySelector("form");
// const search = document.querySelector("#search");
// const weather = document.querySelector("#weather");

// const getWeather = async (city) => {
//     weather.innerHTML = `<h2>Loading....</h2>`;
//     const url = `http://api.weatherapi.com/v1/current.json?key=${api_Key}&q=${city}&aqi=no`;
//     const responce = await fetch(url);
//     const data = await responce.json();
//     return showWeather(data);
// }

// const showWeather = (data) => {
//     if(!data || data.error){
//         weather.innerHTML = `<h2>${search.value} City Not Found</h2>`;
//         return;
//     }
//     weather.innerHTML = `<div>
//                 <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
//             </div>
//             <div>
//                 <h2>${data.current.temp_c} ℃</h2>
//                 <h4>${data.current.condition.text}</h4>
//             </div>`;
// }

// form.addEventListener("submit",function(event){
//     getWeather(search.value);
//     event.preventDefault();
// });


const api_key = `4a7dd92c27b24a388b7200917242008`;
const form = document.querySelector('form');
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

async function getWeather(city){
    weather.innerHTML = `<h2>Loading...</h2>`;
    const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;
    const responce = await fetch(url);
    const data = await responce.json();
console.log(data);
return showWeather(data);
}

function showWeather(data){
    if(!data || data.error){
        weather.innerHTML =`<h2>city ${search.value} is not found</h2>`;
        return;
    }
    weather.innerHTML = `<div>
                <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
            </div>
            <div>
                <h2>${data.current.temp_c} ℃</h2>
                <h4>${data.current.condition.text}</h4>
            </div>`
}

form.addEventListener("submit",function(event){
    getWeather(search.value);
    event.preventDefault();
})







// $(document).ready(function(){
//     const apiKey = "4a7dd92c27b24a388b7200917242008";
//     const form = $("form");
//     const search = $("#search");
//     const weather = $("#weather");

//     const getWeather = async (city) => {
//         weather.innerHTML = `<h2>Loading...</h2>`;
//         const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
//         const responce = await fetch(url);
//         const data = await responce.json();
//         return showWeather(data);
//     }

//     const showWeather = (data) => {
//         if(!data || data.error){
//             weather.innerHTML = `${search.value} city not found`;
//             return;      
//           }
//         weather.innerHTML =`<div>
//                 <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
//             </div>
//             <div>
//                 <h2>${data.current.temp_c} ℃</h2>
//                 <h4>${data.current.condition.text}</h4>
//             </div>`;
//     }

//     form.on("submit",function(event){
//         getWeather(search.val());
//         event.preventDefault();
//     });

// })