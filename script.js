
// TODO: load the dataset 
let attractions;
fetch("./attractions.json")
  .then(response => response.json())
  .then(data => {
    
		attractions = data;
    document.querySelector('#attraction-category').addEventListener('change',filterData);
   
  
		console.log('a',attractions);
    renderBarChart(attractions);
});



function filterData(category) {
  //let c = document.querySelector("attraction-category").addEventListener('change',category.filter(cat=> cat.Category == event.target.value));
  //category= c;
  //return category.sort((a,b) => b.Visitors- a.Visitors).slice(0,5);
  //let value= event.target.value;
  if (event.target.value == "all"){
    return category.sort((a,b) => b.Visitors- a.Visitors).slice(0,5);
  }
  else{
    return category.filter(c=> c.Category == value).sort((a,b) => b.Visitors- a.Visitors).slice(0,5);
  }
  
	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
  
  
}





// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

//document.querySelector('#attraction-category').addEventListener('change',filterData)