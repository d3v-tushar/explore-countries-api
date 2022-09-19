const loadCountries = async() =>{
try{
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    displayCountries(data);
}
catch(error){
    console.log(error);
}
};

const displayCountries = (counties) =>{
    console.log(counties);
    const container = document.getElementById('country-container');
    counties.sort((x,y) => y.population - x.population)
    const country = counties.map(country =>{
        // console.log(country);
        const {name, flags, continents, capital, population, timezones, languages} = country;
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country-div')
        countryDiv.innerHTML = `
        <h2>Country Name: <span>${name.common}</span></h2>
        <h4>Capital: ${capital ? capital[0] : 'No Capital'}, Continents: ${continents[0]}</h4>
        <p>Population: ${population}, Time Zone: ${timezones[0]}, Languages: ${languages ? Object.values(languages) : 'No Data'}</p>
        <img src="${flags.png}">`;
        container.appendChild(countryDiv);
    })
}

loadCountries();