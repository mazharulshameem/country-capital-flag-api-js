const countriesLoad = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  // for( const country of countries){
  //   console.log(country)
  // }
  const countriesContainer = document.getElementById("countries-contrainer");
  countries.forEach((country) => {
    const countriesDiv = document.createElement("div");
    countriesDiv.classList.add("country");
    countriesDiv.innerHTML = `
       <h2>Name:${country.name.common}</h2>
       <h3> Capital:${country.capital ? country.capital[0] : "No Capital"}</h3>
       <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
     `;
    countriesContainer.appendChild(countriesDiv);
  });
};
const loadCountryDetails = (code) => {

  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));

};
 const  displayCountryDetails = country =>{
  const countryDetails = document.getElementById("country-detail");
  //  const detailsDiv = document.createElement('div');
   countryDetails.innerHTML = `
     <h3>Name: ${country.name.common}</h3>
     <h5>Official Name: ${country.name.official}</h5>
     <h5>Borders Area: ${country.borders}</h5>
     <img src=" ${country.flags.png}">
    `;
    // countryDetails.appendChild(detailsDiv);
 }
 
countriesLoad();
