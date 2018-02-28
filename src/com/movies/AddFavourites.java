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
  
    public AddFavourites() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action=request.getParameter("action");
		
	if(action.equalsIgnoreCase("add")) {
		String title=request.getParameter("title");
		String release_date=request.getParameter("release_date");
		String rating=request.getParameter("rating");
		String overview=request.getParameter("overview");
		
        JSONObject obj = new JSONObject();
        
        
        try {
			obj.put("title",title);
			obj.put("release_date",release_date);
			obj.put("rating",rating);
			obj.put("overview",overview);
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        try {
			
			FileWriter jsonFileWriter = new FileWriter("/home/vishruty/Documents/workspace-sts/movieFavourites/src/fav.json",true);
			//System.out.println(info.toString());
			jsonFileWriter.write(obj.toString());
			jsonFileWriter.flush();
			jsonFileWriter.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			response.setContentType("application/json");
			response.getWriter().write(obj.toString());
		}

}
	if(action.equalsIgnoreCase("view")) {
		JSONParser parser = new JSONParser();

		try {
			FileReader reader = new FileReader("/home/vishruty/Documents/workspace-sts/movieFavourites/src/fav.json");
		    Object jsonArray = parser.parse(reader);
		   // System.out.println(jsonArray);
	
		} catch (FileNotFoundException e) {
		    e.printStackTrace();
		} catch (IOException e) {
		    e.printStackTrace();
		} catch (ParseException e) {
		    e.printStackTrace();
		}

	}

}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
