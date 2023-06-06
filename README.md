# Social Media REST API
A backend REST API for a social media platform with basic CRUD operations for users and posts.

## Introduction
This project is a backend REST API for a social media platform built using Node.js, Express, and MongoDB. It provides API endpoints to perform basic CRUD operations on user profiles and posts.

## Features
- Create a new user profile
- Retrieve a list of all user profiles
- Retrieve a single user profile by ID
- Update a user profile
- Delete a user profile
- Create a new post
- Retrieve a list of all posts
- Retrieve a single post by ID
- Update a post
- Delete a post

## Prerequisites
Before running the application, make sure you have the following software installed:

- Node.js
- MongoDB

## Installation
1. Clone the repository:
`https://github.com/shubhamsarkar2587/social-media-rest-api.git`

2. Install the dependencies:

3. Set up the MongoDB connection:
- Create a MongoDB database.
- Update the MongoDB connection URL in the `.env` file with your database information:
```
mongodb+srv://myuser:mypassword@mycluster.mongodb.net/mydatabase?retryWrites=true&w=majority
```

4. Start the application:
`npm start`


## Basic Usage
Once the application is running, you can use a REST API client to interact with the following endpoints:

- **GET /users/:userId**: Get a single user profile by ID.
- **PUT /users/:id**: Update a user profile by ID.
- **DELETE /users/:id**: Delete a user profile by ID.
- **FOLLOW USER /users/:userId/follow**: Follow user by ID.
- **UNFOLLOW USER /users/:userId/follow**: Unfollow user by ID.

- **GET /posts/:userId**: Get a list of all posts.
- **POST /posts**: Create a new post.
- **PUT /posts/:id**: Update a post by ID.
- **DELETE /posts/:id**: Delete a post by ID.

Make sure to include the necessary request headers and parameters as specified in the API documentation.

## Contributing
Contributions are welcome! If you find any issues or want to enhance the functionality of this application, feel free to open a pull request.

## License
This project is licensed under the MIT License.


