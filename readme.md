# Building a Unicorn API

Yay! This is the final assignment for this course!

🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄

I hope you've gained valuable skills in building simple web apps. Now, let's take it a step further by diving into frontend and backend development.

In the last few weeks, we have used YTS, openweathermap, and Pokémon APIs to build simple web apps. This time, we are going to build our own API from scratch. 🚀

The Unicorn API is a straightforward RESTful web service that enables users to interact with unicorn-related data. Your task will be to design and implement both the backend and frontend components of the application. A RESTful API adheres to the REST (Representational State Transfer) architectural principles, allowing clients to communicate with the server using standard HTTP methods such as GET, POST, PUT, and DELETE. This approach provides a consistent interface for accessing and managing resources—in this case, unicorns.

You are also tasked to design a frontend interface that interacts with the API, allowing users to query and display unicorn data seamlessly.

## Demo

https://youtu.be/BhpsChPs9YA

- Frontend: https://comp1537-and-cstp-1206-assignment-3.onrender.com/index.html
- Backend: https://comp1537-and-cstp-1206-assignment-3.onrender.com

Kindly note that the servers may take a few seconds to wake up due to the free hosting service used. Also, do not send PUT, POST, or DELETE requests to the backend server as it is modify unicorn data. Use your own backend server for testing.

## **Requirements**

### **Backend**

1. Create a RESTful API that allows users to perform CRUD operations on a unicorn resource.
2. The API should be able to:
   - Create a new unicorn
   - Retrieve a list of all unicorns
   - Retrieve a single unicorn by Name
   - Update a unicorn by Name
   - Delete a unicorn by Name
3. The API should be able to handle errors and return appropriate status codes.

### **Frontend**

1. Design a frontend interface that interacts with the API.
2. The interface should allow users to:
   - View a list of all unicorns
   - Search for a unicorn by Name, weight, favorite food, vampires value, or vaccinated.
   - Allow users to filter unicorns properties by weight, favorite food, vampires value, or vaccinated.

## Unicorns API docs

**Retrieving Unicorn Data:**

- **Endpoint:** `/unicorns`
- **HTTP Method:** `GET`
  **Query Parameters:**

- **Filtering Parameters:**

  - `name`: Filter unicorns by name.
  - `loves`: Filter by things the unicorn loves. If multiple values are provided, the API should return unicorns that love all the provided values.
  - `weightGreaterThan`: Filter unicorns weighing more than a specified value.
  - `vampiresGreaterThan`: Filter unicorns with more vampire encounters.
  - `vaccinated`: Filter vaccinated or non-vaccinated unicorns.
  - `vampiresExists`: Filter unicorns based on whether they have encountered vampires.
  - `weightLessThan`: Filter unicorns weighing less than a specified value.
  - `gender`: Filter by unicorn gender.

- **Example Queries:**

  1.  **Retrieve all unicorns:**
      - `GET /unicorns`
      - **Expected Response:** Returns all unicorn data available in the database.
  2.  **Filter unicorns by name:**
      - `GET /unicorns?name=Roooooodles`
      - **Expected Response:** Retrieves unicorn(s) with the name "Roooooodles".
  3.  **Filter by loves and weight:**
      - `GET /unicorns?loves=rainbows&weightGreaterThan=100`
      - **Expected Response:** Retrieves unicorns that love rainbows and weigh over 100 units.
  4.  **Filter vaccinated unicorns with vampire encounters:**
      - `GET /unicorns?vaccinated=true&vampiresExists=true`
      - **Expected Response:** Retrieves vaccinated unicorns that have encountered vampires.

**Creating a New Unicorn:**

- **Endpoint:** `/unicorns`
- **HTTP Method:** `POST`
- **Request Body:**
  - `name`: Unicorn name.
  - `dob`: Date of birth.
  - `loves`: Things the unicorn loves.
  - `weight`: Unicorn weight.
  - `vampires`: Number of vampire encounters.
  - `gender`: Unicorn

**Retrieving a Single Unicorn:**

- **Endpoint:** `/unicorns/:name`
- **HTTP Method:** `GET`
- **Path Parameters:**
  - `name`: Unicorn name.
- **Example Query:**
  - `GET /unicorns/Roooooodles`
  - **Expected Response:** Retrieves unicorn with the name "Roooooodles".
- If the unicorn does not exist, return a 404 status code with an appropriate message.

**Updating a Unicorn:**

- **Endpoint:** `/unicorns/:name`
- **HTTP Method:** `PUT`
- **Path Parameters:**
  - `name`: Unicorn name.
- **Request Body:**
  - `dob`: Date of birth.
  - `loves`: Things the unicorn loves.
  - `weight`: Unicorn weight.
  - `vampires`: Number of vampire encounters.
  - `gender`: Unicorn
- If the unicorn does not exist, return a 404 status code with an appropriate message.

**Deleting a Unicorn:**

- **Endpoint:** `/unicorns/:name`
- **HTTP Method:** `DELETE`
- **Path Parameters:**
  - `name`: Unicorn name.
- **Example Query:**
  - `DELETE /unicorns/Roooooodles`
  - **Expected Response:** Deletes the unicorn with the name "Roooooodles".
- If the unicorn does not exist, return a 404 status code with an appropriate message.

## Marking Scheme

### Backend (40%)

1. **Express Server Setup** (5%)

   - Proper setup and configuration of Express server to handle HTTP requests.

2. **Arrays OR MongoDB and Mongoose Integration** (10%)

   - Use of arrays to store unicorn data in memory.  
     OR
   - Use of MongoDB Atlas for hosting the database.
   - Proper implementation of Mongoose schema and model for unicorn data.

3. **API Endpoints** (10%)

   - Implementation of `/unicorns` endpoint for retrieving unicorn data with query parameters.
   - Handling of various query parameters for filtering.

4. **Error Handling and Status Codes** (10%)
   - Proper handling of errors (both frontend and backend).

### Frontend (60%)

1. **Interface Design and Interaction** (20%)

   - Design and layout of frontend elements (input fields, buttons, table/list) following provided guidelines.
   - Interactive inputs for filtering unicorns based on user input.

2. **Client-Server Communication** (20%)

   - JavaScript functions handling user input and making API requests to the backend server.
   - Proper construction of query parameters based on user input.

3. **Data Display** (20%)
   - Dynamic display of unicorn data in a tabular/list format based on queried attributes.
   - Toggle options for attribute visibility using checkboxes.
