const baseURL = "https://api.covid19api.com/summary"
const tableData =  document.getElementById('table-data')
const submitBtn = document.querySelector('.submit')
const searchInput = document.querySelector('#search')
const slug = document.getElementById('slug')

fetch (baseURL)
.then(res => res.json())
    .then(json => {
        displayResults(json.Countries)  
    })
    


    function displayResults(data) { 
        console.log('data', data)
       
        // data.map((covidData, index)  => {   

        data.forEach((covidData)=>{

            
            let covidDataRow = document.createElement('tr') 
            let countryData = document.createElement('td')
            let totalConfirmedData = document.createElement('td')
            let totalDeathsData = document.createElement('td')
            
            
        
            // covidDataRow.key = index 

            countryData.innerText = covidData.Country
            countryData.id = covidData.Slug
            totalConfirmedData.innerText = covidData.TotalConfirmed
            totalDeathsData.innerText = covidData.TotalDeaths
            
            covidDataRow.appendChild(countryData)
            covidDataRow.appendChild(totalConfirmedData)
            covidDataRow.appendChild(totalDeathsData)
            tableData.appendChild(covidDataRow)
            console.log(covidData.Slug);
            console.log(covidData);

            //search results jump to covidDataRow
            // searchForm.addEventListener('submit', )
            // searchTerm.toLowerCase
            // slug.href = covidData.Slug

            // console.log(covidData.Slug);


            //value of search results to lower case
            //assign that result to <a href> tag
            //create const = slug to access DOM for a tag
            //slug.href=covidData.Slug

        })
    }

    function jump() {
        slug.href = `#${searchInput.value.toLowerCase()}`
        
    }
    searchInput.addEventListener('change', jump)

    

  