# SellMyCarBackend

The Sell My Car backend project follows the MVC (Model-View-Controller) architecture pattern. It provides the necessary APIs and handles the business logic for the Sell My Car application.

## Project Overview

The backend project is responsible for handling various operations related to car listings and user management. It utilizes the MVC structure, where the control logic is implemented in the controllers, models define the data structure and business logic, and routes handle the API endpoints.

### Models

The project includes the following models:

1. **Marketplace Inventory**: This model represents the car listings posted by dealers. It contains information such as the model name, color, image, description, odometer, and more. The marketplace inventory model is responsible for storing and retrieving car listing data from the database.

2. **OEM Specification**: This model stores pre-filled data about car models, including the model name, price, color, mileage, power, and max speed. It serves as a reference for car specifications and is not intended to be manipulated directly. The OEM specification model provides a standardized set of specifications for different car models.

3. **User**: The user model is used for authentication and user management. It includes fields such as first name, last name, email, password, and role. The user model handles user registration, login, and authentication-related operations.

### Routes

The backend project defines the following routes:

- **User Routes**: These routes handle user-related operations such as user registration and login. The user registration route validates the provided user details, creates a new user record in the database, and generates a JWT (JSON Web Token) for authentication. The login route verifies the user's credentials and issues a JWT token for subsequent authenticated requests.

- **Marketplace Routes**: These routes handle operations related to car listings in the marketplace. The create listing route allows dealers to post new car listings by providing details such as the model name, color, image, description, and odometer reading. The get listings route retrieves all car listings from the database. The update listing route allows dealers to modify the details of a specific listing, and the delete listing route removes a listing from the marketplace.

### Middleware

The backend project includes middleware functions that handle authentication and authorization. The authentication middleware verifies the JWT token sent in the request headers and ensures that only authenticated users can access protected routes. If the token is valid, the middleware attaches the user object to the request for further processing.

The authorization middleware verifies the user's role and permissions to perform certain operations. It ensures that only authorized users can perform actions such as updating or deleting a car listing. Unauthorized requests are denied with appropriate error responses.


## Technologies Used

The Sell My Car backend project utilizes the following technologies:

- **Node.js**: Backend runtime environment for executing JavaScript code.
- **Express.js**: Web application framework for handling API routes and requests.
- **MongoDB**: NoSQL database for storing and retrieving data, such as user information and car listings.
- **JWT**: JSON Web Tokens for user authentication and authorization. Tokens are used to verify the identity of users and grant access to protected routes.

