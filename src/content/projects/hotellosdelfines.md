---
title: 'HOTEL LOS DELFINES WEB APP'
description: 'A web application for managing and visualizing information for Hotel Los Delfines, including user registration/login, room browsing, reservations, and more.'
image: 'https://raw.githubusercontent.com/ToRo18299/task-tracker/main/src/assets/hoteldelfines.png'
startDate: '2024-01-01'
endate: '2024-08-01'
skills: ['Node.js', 'Express.js', 'MySQL', 'HTML', 'CSS', 'JavaScript']
sourceLink: 'https://github.com/ToRo18299/PGINA-WEB-HOTEL-LOS_DELFINES'
---

## Hotel Los Delfines Web Application

This project is a professional web application designed for Hotel Los Delfines to manage and visualize hotel information efficiently. The platform provides features for user registration and login, room browsing, reservation management, and access to relevant hotel data.

### Key Features

- **User Registration & Login:** Secure authentication for guests and administrators.
- **Room Browsing:** View available rooms with detailed information and images.
- **Reservation Management:** Book, view, and manage reservations online.
- **Hotel Information:** Display amenities, services, and hotel news.
- **Admin Panel:** Manage rooms, reservations, and user accounts.

### Technologies Used

- Node.js
- Express.js
- MySQL
- HTML, CSS, JavaScript (Frontend)

### Project Structure

- `software/` - Main application source code
- `server.js` - Express server entry point
- `db.js` - MySQL database connection
- `public/` - Static assets (HTML, CSS, JS, images)
- `routes/` - API routes (users, reservations, rooms)
- `BASE_DATOS/` - SQL scripts for database setup

### Installation & Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/ToRo18299/PGINA-WEB-HOTEL-LOS_DELFINES.git
   ```
2. Navigate to the software directory:
   ```sh
   cd PGINA-WEB-HOTEL-LOS_DELFINES/software
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Configure the `.env` file with your database and JWT credentials.
5. Start the server:
   ```sh
   node server.js
   ```
6. Access the application at [http://localhost:3000](http://localhost:3000)

### Database

The SQL script for creating the database and tables is located at `BASE_DATOS/hotel_los_delfines.sql`.

### Main Functionalities

- User registration and login
- Room availability browsing
- Reservation management
- Hotel information display

---

This application streamlines hotel operations and enhances the guest experience by providing a modern, user-friendly web interface for both customers and administrators.
