
// TODO: load the dataset 






let attractions;
fetch("./attractions.json")
  .then(response => response.json())
  .then(data => {
		attractions = data;
		console.log('a',attractions);})
  .then(attractions.;




  
let nums=[{"w":"love", "n":5},{"w":"go", "n":3},{"w": "die", "n":7}];
  


function sortByVisitor(a,b){
  return b.Visitors-a.Visitors;
}

console.log('num',nums.sort(function(a,b){return b.n-a.n;}).slice(0,2));


function filterData(category) {
  let sorted;
  return 
  //category.sort((a,b) => b.Visitors - a.Visitors).slice(0,4);
  
  
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