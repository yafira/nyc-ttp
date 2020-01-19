# Giphy API Challenge

## Coding Exercise <br>
For this exercise you will create a simple web application that does the following:<br>

1. Allow the user to enter any search term<br>
2. Fetch a list of results from the GIPHY API<br>
3. Allow the user to sort and filter based on as many parameters you'd like<br>

## Requirements <br>
- When App mounts, load trending gifs<br>

- DO NOT WRITE ALL COMPONENTS IN ONE FILE. Break out components into separate files, and make sure that they are imported/exported properly <br>

### Consider using three components: <br>

  - App Component: has state with GIFS<br>

  - SearchField Component: has state with search field input<br>

  - GifCard Component: presentational component receiving GIF info as props<br>

In order to interact with the API, you will need to create a free developer account and create a new project to have an API key generated for you.<br>

To hit various GIPHY API Endpoints, you can use the following paths:<br>

- Regular Search: http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY<br>
-- returns an array of gif objects<br>

- Trending Search: http://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY<br>
-- returns an array of gif objects

- Random Search: http://api.giphy.com/v1/gifs/random?api_key=YOUR_API_KEY<br>
-- returns a singular gif object!<br>

## Improvements:
•	Fix routes for random and regular search
