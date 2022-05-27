async function getCountriesEurope() {
    try {
        let res=await fetch("https://restcountries.com/v3.1/region/europe");
        let data=res.json();
        return await data; 
    }
     catch (error) {
       console.log(error); 
    }
}  
getCountriesEurope();

async function renderCountriesEurope() {
  let eucountries=await getCountriesEurope();
  let html='';
  eucountries.forEach(country => {
      let htmlSegment=`<ul class="countries">
      <li><h2>Name:  ${country.name.official}</h2>
      <h4>Capital:  ${country.capital}</h4>
      <h4>Population:  ${country.population}</h4><br>
      <img src="${country.flags.png}" ></li>
      </ul>  <br>`;
      html+=htmlSegment;
      
      
  });
  let list=document.querySelector(".list");
  list.innerHTML=html;
}  
renderCountriesEurope();
 