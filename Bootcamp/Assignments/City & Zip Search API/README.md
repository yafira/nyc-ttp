#  Day-8-React-The-Zip-and-City-search-API

# Please create a root folder called **code_submission** for all your code.

## Rubric for code submission
 1. Follow the folder structure and naming conventions of the instructor in the video. 
 2. In total there **must** be at least 4 commits and each commit must be accompanied by 1 meaningful commit message
 3. Commit messages **must** be written in the imperative mood.
 4. Each commit **must** leave the code in a working state.
 5. **Must** include a 4-5 sentence summarizing what you worked on today. Please add your summary in the space provided below.
 
 
 # 01-13-2020-Day-8-Summary
 The goal of this project is to develop two applications, (1) the first app allows us to search for City names and details for a given zip code, and (2) the second app allows us to find all of Zip codes associated with a given City name. Relevant API endpoints are provided.

### First App: ZipCode Search app
#### Objective: Find Cities associated with a zipcode

#### Commands to get started:
•	create-react-app zip-search <br>
•	cd zip-search <br>
•	npm start <br>

- Provide the zipcode in the url and you will receive a JSON response with an array containing an object for each city found:
http://ctp-zip-api.herokuapp.com/zip/10016


### Second App: City Search app
#### Objective: Find Zip Codes associated with a city name

#### Commands to get started:
•	create-react-app city-search <br>
•	cd city-search <br>
•	npm start <br>

- Provide the city name in the url and you will receive a JSON response with an array containing a list of all zip codes for that city: http://ctp-zip-api.herokuapp.com/city/SPRINGFIELD

## Required Tasks:
•	Implement a City Search field that takes city names,
-- it should allow city names to be entered in upper, lower, or mixed case letters <br>
•	Display all zip codes received from the API <br>
•	Display all states where the city was found in the API <br>
•	Group received zip codes by state <br>
•	Display city details for each Zip code <br>




