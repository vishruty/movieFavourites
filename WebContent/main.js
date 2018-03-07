
let APIKEY = "1f39dea1e4239caa8c1ae2c4975e9926";
//search button onclick
function searchFunction(){
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
//search mentioned movie
let runSearch=function(keyword){
	let url=''.concat('https://api.themoviedb.org/3/','search/movie?api_key=',APIKEY,'&query=',keyword);
	fetch(url)
	.then(result=>result.json())
	.then((data)=>{
		//document.getElementById('output').innerHTML=JSON.stringify(data,null,2);
		//console.log(data.results.length);
		document.getElementById('output').innerHTML=innerCode1(data);
		
	})
}


//inner html for search
let innerCode1=function createData1(data){
	var len=data.results.length;
	var movieObj=""
	for(var i=0;i<len;i++){
		movieObj+='<div class="row movieDetail" style=" margin-bottom:3em; ">';
		movieObj+="<div class='col-md-3' style='margin-left:2em; margin-top:2em;'>";
		movieObj += '<img src="http://image.tmdb.org/t/p/w500' + data.results[i].poster_path + '" ></p>';
		movieObj+="</div>";
		movieObj+="<div class='col-md-8 ' style='margin-top:2em; margin-bottom:2em;'>";
		movieObj+="Title:" + data.results[i].title + "<br>";
        movieObj+= "Release date: " + data.results[i].release_date + "<br>";
        movieObj+= "Rating: " + data.results[i].vote_average + "<br>";
        if(data.results[i].overview.length!=0){
            movieObj+= "Overview: " + data.results[i].overview + "<br>";
        }
        movieObj+="<input type='button' class='buttonFormat' value='Add to favourites' style='margin-top:1em;' onclick='addToJson(" + data.results[i].id + ")'  name='" + data.results[i].id + "'><br>";
        movieObj+="</div>";
		movieObj+="</div>";
	}
		return movieObj;
}
//add favourite
function addToJson(id){
	
	let url=''.concat('http://api.themoviedb.org/3/movie/',id,'?api_key=',APIKEY);
	fetch(url)
	.then(result=>result.json())
	.then((data)=>{
		let title = data.title;
		let release_date = data.release_date;
		let rating = data.vote_average;
		let overview = data.overview;
		let poster = data.poster_path;
		let action='add';
		let movie_id=id;
		
		var request = new XMLHttpRequest();
		
		request.onreadystatechange = function(){
			if(request.readyState == 4 && request.status==200){
				var str=(request.responseText);
				if(str!=null && str.equals("error")){
					document.getElementById("output").innerHTML = 'you have added 10 movies';
				}
			}
		};
		var params = "title=" +title+ "&release_date=" +release_date+ "&rating=" +rating+ "&overview=" +overview + "&action=" +action + "&poster_path=" +poster + "&id=" +movie_id;
		request.open("GET", "http://localhost:8082/movieFavourites/Favourites?"+params,true);
		request.send();
		
	})
}
//view favourite
function viewJSON(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status==200){
			var obj=JSON.parse(request.responseText);
			document.getElementById("output").innerHTML = displayFavourites(obj);
		}
	};
	var params = "&action=view";
	request.open("GET", "http://localhost:8082/movieFavourites/Favourites?"+params,true);
	request.send();
}

//view favourite inner html
function displayFavourites(data){
	var len=data.count;
	var movieObj="";
	 for(var i=len-1;i>=0;i--){
		 movieObj+='<div class="row movieDetail" style=" margin-bottom:3em; ">';
		 movieObj+="<div class='col-md-3' style='margin-left:2em; margin-top:2em;'>";
   		 movieObj += '<img src="http://image.tmdb.org/t/p/w500' + data.movies[i].poster_path + '" ></p>';
   		 movieObj+="</div>";
   		 movieObj+="<div class='col-md-8 ' style='margin-top:2em; margin-bottom:2em;'>";
   		 movieObj+="Title:" + data.movies[i].title + "<br>";
	     movieObj+= "Release date: " + data.movies[i].release_date + "<br>";
	     movieObj+= "Rating: " + data.movies[i].rating + "<br>";
	     if(data.movies[i].overview.length!=0){
	    	 movieObj+= "Overview: " + data.movies[i].overview + "<br>";
	     }
	     movieObj+="<input type='button' class='buttonFormat' value='Delete' style='margin-top:1em; 'onclick='deleteFromJson(' + i + ')' ><br>";
	     movieObj+="</div>";
	     movieObj+="</div>";
	 }
	 return movieObj;
}


function deleteFromJson(id){
	
	var request = new XMLHttpRequest();
	/*request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status==200){
			var str=(request.responseText);
			if(str!=null && str.equals("error")){
				document.getElementById("output").innerHTML = 'you have added 10 movies';
			}
		}
	};*/
	var params = "id=" +id + "&action=delete";
	request.open("GET", "http://localhost:8082/movieFavourites/Favourites?"+params,true);
	request.send();
	
}


