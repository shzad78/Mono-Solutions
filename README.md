# Simple Web App
It is a responsive angular app having some routes and a simple Form .

## Installation
1. Need to install the npm packages.

```
npm install
```
2. To run this App you need to run "app.js" file in the directory which will run on port 8082.

```
node app.js
```


3. Then in browser , simply type http://localhost:8082 to access the website.

## Functionality

1. On "Home", There is a user Info form which is submitted on back end route "localhost:8082/user".
2. On "about" and "contact us ", there is dummy text"
3. Google translator api is used to translate the page to you desired language.
3. If javascript is disabled then simple static pages are displayed which are placed in "/web/Njs" directory.
4. But validation is not done in this case on front end.
5. If javascript is disabled then form is submitted on different end point "localhost:8082/userNjs"
