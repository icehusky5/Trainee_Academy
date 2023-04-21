# Students API
This project provides an API for managing student information.

## Installation
To install this project, follow these steps:

1. Install Node.js: 
   
   Go to the official Node.js website (https://nodejs.org/) and download the latest version for your operating system. Follow the installation instructions.

2. Create a new directory for the project.
   
3. Open a powershell or terminal window and navigate to the project directory.
   
4. Clone this repository there.

5. Run the following command to install the required dependencies listed in the package.json file:

```
npm install
```
6. Once the installation is complete, you should see a node_modules directory in the project's directory.

## Usage

1. Open a powershell or terminal window and navigate to the project directory.

2. To start the server, run the following command:

```
node students.js
```
3. The server will start listening on port 3000. The server is now ready to serve clients.
   
4. You can now make requests to the API with any programming language or tool that supports HTTP requests. One popular tool for API development and testing is Postman (https://www.postman.com/).

The server can be stopped pressing "CTRL + C" in the powershell or terminal window.

## Endpoints

The following endpoints are available:

- GET /students - Get all student IDs
- GET /student/:id - Get a student by ID
- POST /student - Create a new student
- PUT /student/:id - Update a student by ID
- DELETE /student/:id - Delete a student by ID

## Endpoint usage examples

### GET /students:
Get all student IDs.

#### Request
```
GET localhost:3000/students
```

#### Response
```
[1, 2, 3]
```

### GET /student/:id:
Get a student by ID.

#### Request
```
GET localhost:3000/student/1
```

#### Response
```
{
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
}
```

### POST /student:
Create a new student.

#### Request
```
POST localhost:3000/student
```

With body: 
```
{
    "id": 4,
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
}
```

#### Response
```
201 Created
```

### PUT /student/:id:
Update a student by ID.

#### Request
```
PUT localhost:3000/student/4
```
With body: 
```
{
    "email": "jane.smith@example.com"
}
```

#### Response
```
204 No Content
```

### DELETE /student/:id:
Delete a student by ID.

#### Request
```
DELETE localhost:3000/student/4
```

#### Response
```
204 No Content
```

## Middleware
The following middleware functions are used:

- loggerMiddleware - Logs requests to the console.
- notFoundMiddleware - Handles 404 errors.