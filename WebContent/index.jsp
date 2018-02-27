<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	<link type="text/css" rel="stylesheet" href="style.css" />
	<script src="main.js"></script>
</head>
<body>

	<form action="add_movie" method="get">
	<input type="text" name="movieName" id="movie_name">
	<input type="button" name="nt" value="search" onClick="myFunction()">
	
	<p id="output"></p>
	 </form>
	
</body>
</html>