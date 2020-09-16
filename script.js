// TODO: load the dataset 


let attractions;
fetch("./attractions.json")
  .then(response => response.json())
  .then(data => {
		attractions = data;
		console.log('attractions - (a)', attractions);
	});

function d (a,b){
  return b.Visitors - a.Visitors;
}

function filterData(category) {
  category.sort(d);
  
  
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

console.log(filterData(attractions));

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category