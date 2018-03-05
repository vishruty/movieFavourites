<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<html>
<head>
	<title>Movie Mania</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Coiny|Indie+Flower" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="style.css" />
	<script src="main.js"></script>
</head>
<body>
	<nav class="navbar navbar-inverse navbar-fixed-top">
  		<div class="container-fluid">
    		<div class="navbar-header">
      			<a class="navbar-brand heading" href="index.jsp">Movie Mania</a>
    		</div>
    		<form class="navbar-form navbar-left" action="add_movie" method="get">
    			<div class="input-group nav_button">
    				<input type="text" class="form-control" placeholder="Search" name="movieName" id="movie_name">
			        <div class="input-group-btn">
			          <button onclick="myFunction()" type="button" class="btn btn-default"><span class="glyphicon glyphicon-search" ></span></button>
			        </div>
    			</div>
    				<button onclick='viewJSON()' type='button' class="btn btn-danger navbar-btn nav_button" name='ViewFavourites'>View Favourites</button>
    		</form>
    	</div>
    </nav>
    
	<main>
		<div class="container-fluid mainDiv" id="output" style="margin-top: 9em">
					<!--  	<p id="output" style="margin-top: 9em"></p>  -->
			
        <hr>
       
	</div>
	</main>
	
</body>
</html>