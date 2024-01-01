# Notes API

API documentation for the Notes application.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Authentication](#Authentication)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
  - [Get All Notes](#get-all-notes)
  - [Create a New Note](#create-a-new-note)
  - [Update a Note](#update-a-note)
  - [Delete a Note](#delete-a-note)

## Introduction

This API allows users to manage notes. Notes have a title, content, creation timestamp, and last modification timestamp.

## Getting Started

1. Install dependencies:

   ```bash
   npm install

2. Configure the `.env` file- add your `MONGO_URL`, `AUTH_USERNAME`, `AUTH_PASSWORD` in the `.env` file

   ```bash
   MONGO_URL= your mongo url
   AUTH_USERNAME= set username for authentication
   AUTH_PASSWORD= set password for authentication

3. Run the Application and view it on `http://localhost:5000/`

   ```bash
   npm run dev

## Authentication

To access certain endpoints, authentication is required. Currently, basic authentication is implemented for the following endpoints:

- Create a New Note, (POST) `/api/notes`
- Update a Note, (PATCH) `/api/notes`
- Delete a Note, (DELETE) `/api/notes`

### Basic Authentication

When making requests to authenticated endpoints, follow these steps in Postman:

      1. Open Postman and create a new request.
      2. Select the request type (e.g., POST, PATCH, DELETE) for the endpoint that requires authentication.
      3. Go to the "Authorization" section in the request.
      4. Choose "Basic Auth" from the "Type" dropdown.
      5. Enter your username and password in the respective fields.
         - Username: YourUsername
         - Password: YourPassword
      6. Send the request, and Postman will include the basic authentication header.



## API Documentation

1. **Get All Notes**
* Endpoint: (GET) `/api/notes`
* Description: Retrieve a list of all notes.
* Response:
   - Status Code: 200
   - Example Response:
      ```json
      [
         {
            "title": "Meeting Agenda",
            "content": "Discuss project updates and timelines with the team. Assign tasks for the upcoming sprint.",
            "createdAt": "2023-01-01T08:00:00.000Z",
            "updatedAt": "2023-01-01T10:30:00.000Z"
         },
         {
            "title": "Shopping List",
            "content": "1. Milk\n2. Eggs\n3. Bread\n4. Vegetables\n5. Snacks",
            "createdAt": "2023-01-02T14:00:00.000Z",
            "updatedAt": "2023-01-02T15:45:00.000Z"
         }
      ]
      ```  
2. **Create a new Note**
* Endpoint: (POST) `/api/notes`
* Description: Create a new note.
* Request Body:
   - Example request:
      ```json
      {
         "title":"Title for today",
         "content": "This is todays content hope you like it and understood"
      }
      ```
* Response:
   - Status Code: 201
   - Example Response:
        ```json
      {
         "title":"Title for today",
         "content": "This is todays content hope you like it and understood"
      }
      ``` 

3. **Update a Note**
* Endpoint: (PATCH) `/api/notes`
* Description: Update the content of an existing note.
* Request Parameters:
   - `id` (Note ID)
* Request Body:
   - Example request: You can either update title or content or you can update both at same time passing them in req body.
      ```json
      {
         "content": "Updated content."
      }

      ```
* Response:
   - Status Code: 200
   - Example Response:
        ```json
      {
         "title":"Title for today",
         "content": "Updated content."
         "createdAt": "2023-01-01T08:00:00.000Z",
         "updatedAt": "2023-01-01T10:30:00.000Z"
      }
      ``` 
      
4. **Delete a Note**
* Endpoint: (DELETE) `/api/notes`
* Description: Delete a note.
* Request Parameters:
   - `id` (Note ID)
* Response:
   - Status Code: 200
   - Example Response:
        ```json
      {
         "message": "Note deleted successfully"
      }
      ``` 
      

