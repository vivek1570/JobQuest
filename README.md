
# JobQuest

JobQuest is a dedicated platform for users to share their job interview experiences, empowering job seekers with valuable insights and knowledge. Our mission is to create a supportive community where individuals can learn from one another and enhance their interview preparation.

## Features

- Users can post and share their interview experiences.
- Browse through various entries for insights on companies, roles, and interview processes.
- Get tips and advice from fellow job seekers.

## Getting Started

To clone and run this project, follow these steps:

### Prerequisites

- Node.js (>= 14.x)
- MongoDB
- A JWT secret for authentication

### Clone the Repository

1. Open your terminal.
2. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/jobquest.git
   ```

3. Navigate into the project directory:

   ```bash
   cd jobquest
   ```

### Set Up the Server

1. Navigate to the API directory:

   ```bash
   cd api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the `api` directory and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Run the server:

   ```bash
   npm run dev
   ```

### Set Up the Client

1. Navigate to the client directory:

   ```bash
   cd ../client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the client:

   ```bash
   npm run dev
   ```

### Aim of the Project

Through JobQuest, I aim to build a community-driven platform where users can share their experiences and learn from each other. By providing valuable insights into the interview processes of various companies, I hope to empower job seekers to prepare effectively and improve their chances of success in job interviews.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please feel free to create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Instructions to Customize:
- Replace `yourusername` in the clone command with your actual GitHub username.
- Update the MongoDB URI and JWT secret in the `.env` section with appropriate values.
- Modify any other sections as needed to fit your project's specifics. 

Feel free to ask if you need any changes or additional sections!