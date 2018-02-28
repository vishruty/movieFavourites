
let APIKEY = "1f39dea1e4239caa8c1ae2c4975e9926";

function myFunction(){
var baseURL="https://api.themoviedb.org/3/";
let url="".concat(baseURL,'configuration?api_key=',APIKEY);
fetch(url)
.then((result)=>{
	return result.json();
})
.then((data)=>{
	console.log('config:',data);
	 var x = document.getElementById("movie_name").value; 
	runSearch(x);
})
}

let runSearch=function(keyword){
	let url=''.concat('https://api.themoviedb.org/3/','search/movie?api_key=',APIKEY,'&query=',keyword);
	fetch(url)
	.then(result=>result.json())
	.then((data)=>{
		//document.getElementById('output').innerHTML=JSON.stringify(data,null,2);
		//console.log(data.results.length);
		document.getElementById('output').innerHTML=innerCode(data);
		
	})
}

let innerCode=function createData(data){
	var len=data.results.length;
	var movieObj="";
	 for(var i=0;i<len;i++){
	        movieObj+="<p class='nested_para'>";
	        movieObj+="Title:" + data.results[i].title + "<br>";
	        movieObj+= "Release date: " + data.results[i].release_date + "<br>";
	        movieObj+= "Rating: " + data.results[i].vote_average + "<br>";
	        if(data.results[i].overview.length!=0){
	            movieObj+= "Overview: " + data.results[i].overview + "<br>";
	        }
	        movieObj+="<input type='button' value='Add to favourites' onclick='addToJson(" + data.results[i].id + ")'  name='" + data.results[i].id + "'><br>";
	        movieObj+="</p>";
	        movieObj+= "<hr>";
	    }
	    movieObj+="<input type='submit' value='click here to add these movies'>";
	    return movieObj;
	}

function addToJson(id){
	
	let url=''.concat('http://api.themoviedb.org/3/movie/',id,'?api_key=',APIKEY);
	fetch(url)
	.then(result=>result.json())
	.then((data)=>{
		let title = data.title;
		let release_date = data.release_date;
		let rating = data.vote_average;
		let overview = data.overview;
		
		//console.log(data.title);
		
		/*var xmlhttp = new XMLHttpRequest();
		var params = "title=" +title+ "&release_date=" +release_date+ "&rating=" +rating+ "&overview=" +overview;
		xmlhttp.open('GET',"http://localhost:8082/movieFavourites/Favourites?"+params, true);
	xmlhttp.send();*/
		var request = new XMLHttpRequest();
		var params = "title=" +title+ "&release_date=" +release_date+ "&rating=" +rating+ "&overview=" +overview +"&action=add";
		request.open("GET", "http://localhost:8082/movieFavourites/Favourites?"+params,true);
		request.send();
		
	})
}

function viewJSON(){
	var request = new XMLHttpRequest();
	var params = "&action=view";
	request.open("GET", "http://localhost:8082/movieFavourites/Favourites?"+params,true);
	request.send();
}
