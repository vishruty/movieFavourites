<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<title>Insert title here</title>
	<link type="text/css" rel="stylesheet" href="style.css" />
	<script src="main.js"></script>
</head>
<body>
	<nav class="navbar navbar-inverse navbar-fixed-top">
  		<div class="container-fluid">
    		<div class="navbar-header">
      			<a class="navbar-brand" href="#">WebSiteName</a>
    		</div>
    		<form class="navbar-form navbar-left" action="add_movie" method="get">
    			<div class="input-group">
    				<input type="text" class="form-control" placeholder="Search" name="movieName" id="movie_name">
			        <div class="input-group-btn">
			          <button onclick="myFunction()" type="button" class="btn btn-default"><span class="glyphicon glyphicon-search" ></span></button>
			        </div>
    			</div>
    				<button onclick='viewJSON()' type='button' class="btn btn-danger navbar-btn" name='ViewFavourites'>View Favourites</button>
    		</form>
    	</div>
    </nav>
    
	<div class="container">
		<p id="output" style="margin-top: 9em"></p>
	</div>
	 
	
</body>
</html>