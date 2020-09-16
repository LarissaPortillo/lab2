// TODO: load the dataset 


let attractions;
fetch("./attractions.json")
  .then(response => response.json())
  .then(data => {
		attractions = data;
		console.log(attractions);
	});


let first_five;

function filterData(category) {
  category = event.target.value;
  if(category ===all){
    attractions.sort(function(a,b){
      return b.Visitors-a.Visitors;
    });
  first_five=attractions.slice(0,4);
  console.log ('1st 5',first_five);
  }
  else{
    let type=attractions.filter(function(a){
      reutrn a.Category==category;
    });
    first_five=type.slice(0,4);
    console.log('2nd 5',first_five);
    
  }
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