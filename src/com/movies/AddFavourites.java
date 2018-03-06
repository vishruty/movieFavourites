package com.movies;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import java.io.PrintWriter;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.json.simple.JSONArray;
import org.json.JSONException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddFavourites
 */
@WebServlet("/Favourites")
public class AddFavourites extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static int count=0;
	public static String path="/home/vishruty/Documents/workspace-sts/movieFavourites/src/fav.json";
    public AddFavourites() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String action=request.getParameter("action");
		System.out.println("here " +action);
		
	if(action.equalsIgnoreCase("add")) {
		
		String title=request.getParameter("title");
		String release_date=request.getParameter("release_date");
		String rating=request.getParameter("rating");
		String overview=request.getParameter("overview");
		String poster_path=request.getParameter("poster_path");
        JSONObject mainObj = new JSONObject();
        JSONObject movie = new JSONObject();
        JSONArray movies= new JSONArray();
        JSONParser parser=new JSONParser();
        
        
        try {
        	mainObj = (JSONObject) parser.parse(new FileReader(path));
        	this.count = Integer.parseInt(String.valueOf(mainObj.get("count")));
        	
        	movies = (JSONArray) mainObj.get("movies");
        	
		} catch (JSONException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
        
        try {
        	count++;
        	
        	movie.put("title",title);
			movie.put("release_date",release_date);
			movie.put("rating",rating);
			movie.put("overview",overview);
			movie.put("poster_path", poster_path);
			movies.add(movie);
			if(count>10) {
				movies.remove(0);
				count--;
			}
			mainObj.put("count", count);
			mainObj.put("movies", movies);
			FileWriter jsonFileWriter = new FileWriter(path);
			
			jsonFileWriter.write(mainObj.toString());
			jsonFileWriter.flush();
			jsonFileWriter.close();
        }
        catch (Exception e) {
        	e.printStackTrace();
        } finally {
        	response.setContentType("application/json");
        	response.getWriter().write(mainObj.toString());
        }
       

}
	if(action.equalsIgnoreCase("view")) {
		JSONParser parser = new JSONParser();
		try {
			FileReader reader = new FileReader(path);
		    JSONObject json = (JSONObject) parser.parse(reader);
		    JSONArray movies=new JSONArray();
		    movies=(JSONArray) json.get("movies");
		    JSONObject temp =new JSONObject();
		  
		   /* for(int i=0;i<movies.size();i++)
		    { 	
		    	temp = (JSONObject) movies.get(i);
		    	response.setContentType("application/json");
		    	response.getWriter().write(temp.toString());
		    }*/
		    response.setContentType("application/json");
	    	response.getWriter().write(json.toString());
	    	
		} catch (IOException | ParseException e) {
		   // e.printStackTrace();
			System.out.println(e);
		} 

	}
	
	
	if(action.equalsIgnoreCase("delete")) {
		
		JSONParser parser = new JSONParser();
		try {
			String id=request.getParameter("id");
			FileReader reader = new FileReader(path);
		    JSONObject json = (JSONObject) parser.parse(reader);
		    JSONArray movies=new JSONArray();
		    movies=(JSONArray) json.get("movies");
		    int total_count = Integer.parseInt(String.valueOf(json.get("count")));
		    int k= Integer.parseInt(id);
		    movies.remove(k);
		    total_count--;
		    json.put("count", total_count);
			json.put("movies", movies);
	    	
		} catch (IOException | ParseException e) {
		   // e.printStackTrace();
			System.out.println(e);
		} 

	}

}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
