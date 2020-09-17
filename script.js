// TODO: load the dataset 
let attractions;
fetch("./attractions.json")
  .then(response => response.json())
  .then(data => {
    
		attractions = data;
    console.log('a',attractions);
    
    document.querySelector('#attraction-category').addEventListener('change', function(event){
      renderBarChart(filterData(event.target.value));
    });

   /*
    let dropdown=document.querySelector('#attraction-category');
    if (dropdown){
      dropdown.addEventListener('change', function(event){
        renderBarChart(filterData(event.target.value));
      })
    }
  */
    
});

function filterData(category) {
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
  if (category=='all'){
    return attractions.sort((a,b) => b.Visitors- a.Visitors).slice(0,5);
  }
  else{
    return attractions.filter(c=> c.Category == category).sort((a,b) => b.Visitors- a.Visitors).slice(0,5);
  }
  
 
}


// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

//document.querySelector('#attraction-category').addEventListener('change',filterData)