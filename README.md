# CS-465-Full-Stack-Development

## Architecture

***Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?***

  At the start of the project we had to build the folder structure to modularize our code. We used the MVC (Model, View, Controller) paradigm to accomplish this. This meant all the JavaScript was in one directory, All the views were in another, and so on. I thought when we implemented Angular it streamlined this process better where we utilized a component structure that contained all of that components required files. For example, one component would containt the css, html, and functionality (i.e. - TypeScript). You could use this one component across multiple sections within your project. Portability was one of the defining factors during development. 

  The backend used a NoSQL MongoDB database because there was no need to establish any relationship or dependencies on the data. The data was unstructured and provided for more flexibility and faster querying. 


## Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is different from Javascript in the sense that JSON uses Javascript syntax to serialize Javascript objects and arrays. It streamlines interchange of data in web applications. During the full stack process we used JSON to seed the database with some test data. As development progressed and we implemented Angular, we had to write code to parse the response from the HTTP requests (returned to us in JSON format) and convert it into Javascript objects so that we can use it within our application. 

## Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

The HTTP request methods (or verbs) GET, POST, and PUT are what defines the functionality of the API endpoints. The GET request method provides a representation of the resource data. The POST method is a submission of data that results in the state of the resource being modified. An example of this would be when a user is added to the database. The PUT method replaces the existing representation of the data with the request payload. An example of this is updating a users profile. 


## Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

I had previous experience in full stack development prior to this course but using a different stack. I think the exposure to Angular has made me more marketable because I have had experience in other frontend frameworks like React, and Vue. I did enjoy working with MongoDB as it had been a while since using it. It has certainly changed a lot since I last used it. I was introduced to clusters so that was another added benefit. I believe I can take the skills I've learned in this course and apply it in my current role as a programmer analyst.
