// import the express library and the middleware functions
import express from "express";
import { loggerMiddleware } from "./middleware.js";
import { notFoundMiddleware } from "./middleware.js";

// create an instance of the express server
let server = express();

// define the server port number and an empty array for the students data
let port = 3000;
let students = [];

// add middleware to parse incoming request body and URL-encoded data
server.use(express.json());
server.use(express.urlencoded({extended: false}));

// add middleware to log requests
server.use(loggerMiddleware);

// define GET endpoint for all student IDs
server.get("/students", (req, res) => {
    // map through the students array and return only the ID of each student
    res.send(students.map(element => element.id));
});

// define GET endpoint for one student based on ID
server.get("/student/:id", (req, res) => {
    // get the student ID from the request URL and parse it to an integer
    let studentId = parseInt(req.params.id);

    // search the students array for a student with the given ID
    let student = students.find(element => {
        if (element.id == studentId) {
            return element;
        }
    });

    // if no student was found with the given ID, return a 404 error response
    if (!student) {
        return res.status(404).json({error: "No student with the given id."});
    }

    // if a student was found, return the student object
    return res.json(student);
});

// define POST endpoint for a new student
server.post("/student", (req, res) => {
    // get the required parameters from the request body
    let { id, name, email } = req.body;

    // check if any of the required parameters are missing, and return a 400 error response if so
    if (!id || !name || !email) {
        return res.status(400).json({error: "Missing the required parameters."});
    }

    // create a new student object with the provided data
    let student = {
        id: id,
        name: name,
        email: email
    };

    // add the new student object to the students array
    students.push(student);

    // return a 201 status response to indicate that the student was successfully added
    return res.status(201).send();
});

// define a PUT endpoint for updating student data
server.put("/student/:id", (req, res) => {
    // extract the ID, name, and email from the request body
    let id = parseInt(req.params.id);
    let { name, email } = req.body;

    // search for the student with the given ID in the students array
    let student = students.find(student => student.id == id);

    // if the student is not found, return a 404 error response
    if (!student) {
        return res.status(404).json({error: "No student with the given id."});
    }

    // if name or email is missing, return a 400 error response
    if (!name && !email) {
        return res.status(400).json({message: "Either name or email is required"});
    }

    // if the name is provided, update the student's name
    if (name) {
        student.name = name;
    }

    // if the email is provided, update the student's email
    if (email) {
        student.email = email;
    }

    // return a 204 success response with no content
    res.status(204).send();
});

// define a DELETE endpoint for deleting a student by ID
server.delete("/student/:id", (req, res) => {
    // extract the ID from the request parameters
    let id = parseInt(req.params.id);
    
    // find the index of the student with the given ID in the students array
    let index = students.findIndex(student => student.id == id);

    // if the student is not found, return a 404 error response
    if (index == -1) {
        res.status(404).json({error: "No student with the given id."});
    } else {
        // if the student is found, remove them from the students array
        students.splice(index, 1);
        // return a 204 success response with no content
        res.sendStatus(204).send();
    }
});

// define a 404 error middleware to handle requests for undefined routes
server.use(notFoundMiddleware);

// start the server listening on the specified port
server.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});