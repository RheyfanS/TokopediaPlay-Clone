# TokopediaPlayClone

### i. Database structure

The database structure of Tokopedia Play Clone consists of three main collections: `videos`, `products`, and `comments`. Each collection represents a model in the application.

1. `videos` collection:
   - `videoID`: A unique identifier for the video (UUID generated using the `uuid` package).
   - `thumbnailUrl`: URL to the video's thumbnail image.
   
2. `products` collection:
   - `VideoID`: Reference to the video this product is associated with (MongoDB ObjectID).
   - `link`: URL to the product's page.
   - `title`: Title of the product.
   - `price`: Price of the product.

3. `comments` collection:
   - `VideoID`: Reference to the video this comment is associated with (MongoDB ObjectID).
   - `username`: Username of the commenter.
   - `comment`: The comment text.

### ii. API structure

The API structure of Tokopedia Play Clone is designed as a RESTful API, using Node.js with Express for handling HTTP requests and responses.

The main API endpoints are as follows:

1. `GET /api/videos`: Get the list of videos with their thumbnail URLs.
2. `GET /api/products/:videoID`: Get the list of products associated with a specific video.
3. `GET /api/comments/:videoID`: Get the list of comments associated with a specific video.
4. `POST /api/comments/:videoID`: Submit a new comment for a specific video.

### iii. List API request and response 

- GET `/api/videos`

  Request:
  ```
  GET /api/videos
  ```

  Response:
  ```json
  [
    {
      "_id": "61281b95c7bf931da4929a44",
      "videoID": "2c0aef6c-d252-42a2-bd09-833e329b305a",
      "thumbnailUrl": "https://example.com/thumbnail1.jpg",
      "__v": 0
    },
    {
      "_id": "61281b95c7bf931da4929a45",
      "videoID": "c9ebf42e-6b08-4c92-8c6d-83cfa259f7a5",
      "thumbnailUrl": "https://example.com/thumbnail2.jpg",
      "__v": 0
    }
  ]
  ```

- GET `/api/products/:videoID`

  Request:
  ```
  GET /api/products/61281b95c7bf931da4929a44
  ```

  Response:
  ```json
  [
    {
      "_id": "61281f6e97bbae1e120d15d0",
      "VideoID": "61281b95c7bf931da4929a44",
      "link": "https://example.com/product1",
      "title": "Product 1",
      "price": 50.0,
      "__v": 0
    }
  ]
  ```

- GET `/api/comments/:videoID`

  Request:
  ```
  GET /api/comments/61281b95c7bf931da4929a44
  ```

  Response:
  ```json
  [
    {
      "_id": "61281fc097bbae1e120d15d1",
      "VideoID": "61281b95c7bf931da4929a44",
      "username": "User1",
      "comment": "This video is awesome!",
      "__v": 0
    },
    {
      "_id": "61281fc097bbae1e120d15d2",
      "VideoID": "61281b95c7bf931da4929a44",
      "username": "User2",
      "comment": "Great content!",
      "__v": 0
    }
  ]
  ```

- POST `/api/comments/:videoID`

  Request:
  ```
  POST /api/comments/61281b95c7bf931da4929a44
  Content-Type: application/json

  {
    "username": "User3",
    "comment": "I like this video!"
  }
  ```

  Response (success):
  ```json
  {
    "message": "Comment submitted successfully.",
    "data": {
      "_id": "6128207c97bbae1e120d15d3",
      "VideoID": "61281b95c7bf931da4929a44",
      "username": "User3",
      "comment": "I like this video!",
      "__v": 0
    }
  }
  ```

  Response (failure):
  ```json
  {
    "error": "Failed to submit comment."
  }
 

 ```
### iv. How to run in local

To run the Tokopedia Play Clone API on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd TokopediaPlayClone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Make sure you have MongoDB installed and running on your local machine. If not, you can download and install it from the official MongoDB website.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. The API server should now be running on `http://localhost:3000`.

6. You can now test the API using tools like Postman or curl.

   - To get the list of videos, make a GET request to `http://localhost:3000/api/videos`.
   - To get the list of products for a specific video, make a GET request to `http://localhost:3000/api/products/:videoID`, replacing `:videoID` with the actual video ID.
   - To get the list of comments for a specific video, make a GET request to `http://localhost:3000/api/comments/:videoID`, replacing `:videoID` with the actual video ID.
   - To submit a comment for a specific video, make a POST request to `http://localhost:3000/api/comments/:videoID`, replacing `:videoID` with the actual video ID. Provide the comment data in the request body as JSON.

Make sure you have followed all the installation steps correctly, and the API should be up and running on your local machine. Now you can use the API just like you would on a live server.

Note: If you encounter any issues while running the API, make sure that all dependencies are installed and that the database connection is properly set up.
