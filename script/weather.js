document.getElementById('bten').addEventListener("click",getweather);

    function getweather(){
        const cityname = document.getElementById('cityname')

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=39f5dc30af375835981ff9ca99091f6d`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        displayResult(data)
    })

    .catch(error => {
            console.error('Error fetching data:', error);
    });
    }

    function displayResult(data){

       let resultweath = document.getElementById('row')
    console.log('THIS IS DATA ',data);
    
            resultweath.innerHTML = "";

            if (data.cod !== '404') {

                resultweath.innerHTML+= `
                    <div class="jumbotron jumbotron-fluid">
                    <div class="container text-center">
                    
                    <h1 class="display-4" id = "weath">${data.name}</h1>
                    <p class="strong" id = "weath">${data.weather[0].description}</p>
                    <h5 class="display-4" id = "weath">${data.main.temp}</h5>
                    </div>
                    </div>
                `
            } else {
                    resultweath.innerHTML = `<p class = "descr text-center" id = "weath">City Not Found!!</p>`; 
                    resultweath.style.color = "#ffffff";
                    resultweath.style.fontSize = "25px";
                }}