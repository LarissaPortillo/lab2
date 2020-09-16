// TODO: load the dataset 


let attractions;
fetch("./attractions.json")
  .then(response => response.json())
  .then(data => {
		attractions = data;
		console.log('a',attractions);
	}).then(attractions.sort(function(a,b){
    return b.Visitors - a.Visitors; 
  }).slice(0,4));

console.log('top', attractions);





function filterData(category) {
  attractions.sort(function(a,b){
    return b.Visitors - a.Visitors; 
  }).slice(0,4);
  
  console.log('order',attractions);

  //attractions.sort((a,b) => b.Visitors - a.Visitors).slice(0,4);
  
  
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