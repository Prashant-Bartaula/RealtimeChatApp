# 💬 Real-Time Chat Application

A real-time chat application built using **Node.js**, **Express.js**, and **React.js**. This app allows users to create accounts, log in, and engage in real-time conversations with other users.

---

## ✨ Features

- **User Authentication & Authorization**
-  **Real-Time Messaging** using **WebSockets**
-  **User Profile Management**  
  *(Update profile picture, full name, description, and phone number)*
-  **Chat Interface** with message input and message history

---

##  Technologies Used

###  Frontend

- [React.js](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Socket.IO Client](https://socket.io/)

### 🔸 Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [Socket.IO](https://socket.io/)
- [Cloudinary](https://cloudinary.com/) *(for image uploads)*

### 🧩 Dependencies

- [`axios`](https://github.com/axios/axios)
- [`bcrypt.js`](https://github.com/dcodeIO/bcrypt.js/)
- `cookie-parser`
- `cors`
- `dotenv`
- `jsonwebtoken` (JWT)

---

## ⚙️ Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/real-time-chat.git

# 2. Navigate to the project directory
cd real-time-chat

# 3. Install dependencies
npm install   # or yarn install

# 4. Create a .env file and configure the following variables:
#    CLOUDINARY_CLOUD_NAME
#    CLOUDINARY_API_KEY
#    CLOUDINARY_API_SECRET
#    JWT_SECRET

# 5. Start the development server
npm run dev   # or yarn dev
