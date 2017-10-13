# Simple Web App
It is a responsive angular app having some routes and a simple Form .

# Installation
Need to install the npm packages using npm install .
To run this App you need to run "app.js" file in the directory which will run on port 8082.
Angular app is embedded in the app.js as static site.
Then in browser , simply type http://localhost:8082 to access the website.

#Functionality

On "Home", There is a user Info form which is submitted on back end route "localhost:8082/user".
On "about" and "contact us ", there is dummy text"
Google translator api is used to translate the page to you desired language.
If javascript is disabled then simple static pages are displayed which are placed in "/web/Njs" directory.
But validation is not done in this case on front end.
If javascript is disabled then form is submitted on different end point "localhost:8082/userNjs"
