

//movie review app 

var movies = [

						{
							title: "Money Heist",
							hasWatched: true,
							rating: 5
						},
						{
							title: "Money Heist",
							hasWatched: true,
							rating: 5
						}
				
				]

                    
     //iterate through the array to give result
movies.forEach(function(movie,index){
    var result = "You have";
    if( movie.hasWatched){
        result += "Watched";
    }else{
        result += " not seen";
    }
    result += `"${movie.title}" -`;
    result += `${movie.rating} stars`;
	
	console.log(index+"."+result);
});
