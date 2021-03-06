# MEAN-basic-template
A basic application (Hello world!) built on MEAN stack (MongoDB, Express, AngularJS, Node.JS), which can be used by beginners as a template to build their own applications.
 
### Prerequisites:

You'll need the following installed on your machine for this application to work

 - Node.js - Download and install [Node.js]
 - MongoDB - Download and install [MongoDB]. Refer [MongoDB tutorials] to install, if required, and get connected to MongoDB.
 
### Running the App:
 
 Run the following commands using command prompt
 1. Clone the repository : 
 
    ```
    git clone https://github.com/PriyaKulkarni/MEAN-basic-template.git
    ```
 2. Download dependency packages: (node_modules folder will be created)

    ```
    npm install
    ```
 3. Start the server from the root of the project: (Prior to this, make sure to connect to MongoDB)

    ```
    npm start
    ```
    or
    ```
    node server.js
    ```
    or
    ```
    nodemon server.js 
    ```
 4. Navigate to http://localhost:8080 from your broswer to view the application.
  (If any other application is running on server port 8080, change to a different port)

### License
MIT

[Node.js]: <http://nodejs.org>
[MongoDB]: <https://www.mongodb.org/downloads?_ga=1.147420980.2031988443.1458330135#production>
[MongoDB tutorials]: <https://docs.mongodb.org/getting-started/shell/tutorial/install-mongodb-on-windows/>
