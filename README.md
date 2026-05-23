# 🚀 CodeVerse - Version Control System

<div align="center">

### A Full Stack GitHub-Inspired Version Control Platform

Manage repositories, track commits, collaborate on projects, monitor contributions, and experience core version-control operations through an intuitive web interface.

![MERN](https://img.shields.io/badge/MERN-Stack-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![NodeJS](https://img.shields.io/badge/Node.js-Backend-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![Version-Control](https://img.shields.io/badge/Version-Control-System-purple)

</div>

---

# 📖 Introduction

CodeVerse is a GitHub-inspired Version Control System built using the MERN Stack. The platform allows users to create repositories, manage project files, simulate version-control operations, track commits, monitor contributions, and maintain developer profiles.

The project demonstrates how modern version-control platforms work internally by implementing repository management, commit tracking, push/pull operations, user authentication, issue management, contribution tracking, and profile management.

This project was developed as a complete full-stack application to understand both frontend and backend architecture while implementing real-world software engineering concepts.

---

# 🎯 Project Overview

CodeVerse provides an ecosystem where users can:

- Create and manage repositories
- Simulate Git commands
- Track repository activities
- Manage commits
- Push and pull changes
- Revert repository states
- Create and manage issues
- Maintain developer profiles
- Track contribution history
- Monitor repository statistics

The application follows modern software architecture principles using React for frontend development and Node.js + Express for backend services.

---

# 🏗️ Project Architecture

## Frontend

Responsible for:

- User Interface
- Authentication Screens
- Repository Dashboard
- User Profile
- Contribution Heatmap
- Repository Management Pages
- Routing and Navigation

---

## Backend

Responsible for:

- REST APIs
- Authentication
- Repository Logic
- Commit Management
- Issue Management
- Database Operations
- User Management
- Business Logic

---

## Database

MongoDB stores:

- Users
- Repositories
- Commits
- Issues
- Repository Metadata
- User Activities

---

# 🛠️ Tech Stack

## Frontend Technologies

- React.js
- React Router DOM
- Context API
- Axios
- CSS3
- Vite

---

## Backend Technologies

- Node.js
- Express.js
- JWT Authentication
- Bcrypt
- Mongoose

---

## Database

- MongoDB Atlas

---

## Deployment

- Frontend Deployment
- Backend Deployment
- Environment Configuration

---

# ⚙️ Console Commands Implemented

The project includes simulation of important version-control commands.

---

## 1. Initialize Repository

```bash
init
```

Creates a repository structure and prepares the project for version control tracking.

---

## 2. Add File

```bash
add file.txt
```

Stages files before commit.

---

## 3. Commit Changes

```bash
commit "message"
```

Creates a snapshot of the current repository state.

---

## 4. Push Changes

```bash
push
```

Uploads repository changes to the remote system.

---

## 5. Pull Changes

```bash
pull
```

Fetches latest repository updates.

---

## 6. Revert Changes

```bash
revert
```

Restores repository to a previous state.

---

# ✨ Key Features

## 🔐 Authentication System

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Session Management

---

## 👤 User Profile

- Developer Profile Page
- User Statistics
- Contribution Heatmap
- Skills Section
- Achievements Section
- Activity Tracking

---

## 📁 Repository Management

- Create Repository
- Public Repository Support
- Private Repository Support
- Repository Search
- Repository Listing
- Repository Metadata

---

## 📌 Repository Dashboard

- Repository Overview
- Suggested Repositories
- Repository Search
- User Repository Section
- Quick Statistics

---

## 🔥 Contribution Tracking

- GitHub Style Contribution Graph
- Activity Monitoring
- Commit History
- Repository Participation

---

## 🐛 Issue Management

- Create Issue
- View Issues
- Manage Issues
- Track Repository Problems

---

# 🚀 Core Functionalities

## Repository Creation

Users can create repositories with:

- Repository Name
- Description
- Visibility Settings
  - Public
  - Private

---

## Commit Tracking

The platform stores:

- Commit Messages
- Commit History
- Commit Timestamps
- Repository Snapshots

---

## Push Operation

Allows repository changes to be transferred to the system.

---

## Pull Operation

Fetches latest repository data and updates.

---

## Revert Operation

Restores previous repository versions.

---

## Activity Monitoring

Tracks:

- Repository Creation
- Commits
- Issue Activities
- User Contributions

---

# 🔧 Backend Functionalities

## User Controller

Handles:

- Signup
- Login
- Profile Retrieval
- Profile Update
- Profile Deletion

---

## Repository Controller

Handles:

- Repository Creation
- Repository Retrieval
- Repository Update
- Repository Deletion

---

## Issue Controller

Handles:

- Issue Creation
- Issue Retrieval
- Issue Update
- Issue Deletion

---

## Version Control Logic

Implements:

```text
initRepo()
addFile()
commitChanges()
pushChanges()
pullChanges()
revertChanges()
```

---

# 🌐 API Modules

## Authentication APIs

```http
POST /signup
POST /login
GET /profile
PUT /profile
DELETE /profile
```

---

## Repository APIs

```http
POST /repository/create
GET /repository
GET /repository/:id
PUT /repository/:id
DELETE /repository/:id
```

---

## Issue APIs

```http
POST /issue/create
GET /issue
PUT /issue/:id
DELETE /issue/:id
```

---

# 📱 Major Pages

---

## 🔑 Login Page

Features:

- Email Login
- Password Authentication
- JWT Based Access

---

## 📝 Signup Page

Features:

- Username Registration
- Email Registration
- Password Creation

---

## 🏠 Dashboard

Features:

- Top Repositories
- Suggested Repositories
- Quick Statistics
- Repository Search

---

## 📂 Create Repository Page

Features:

- Repository Name
- Description
- Visibility Selection
- README Initialization

---

## 👤 Profile Page

Features:

- User Information
- Statistics Cards
- Contribution Heatmap
- Pinned Repositories
- Activity Timeline
- Skill Badges
- Achievements

---

# 🔄 Application Flow

```text
User Signup
      ↓
User Login
      ↓
JWT Authentication
      ↓
Dashboard
      ↓
Create Repository
      ↓
Add Files
      ↓
Commit Changes
      ↓
Push Repository
      ↓
Track Contributions
      ↓
Manage Issues
```

---

# 🔐 Security Features

- Password Hashing using Bcrypt
- JWT Authentication
- Protected Routes
- Environment Variables
- Secure API Communication

---

# 📊 Learning Outcomes

This project demonstrates:

- Full Stack Development
- MERN Architecture
- REST API Development
- Authentication Systems
- MongoDB Data Modeling
- Repository Management
- Version Control Concepts
- Frontend State Management
- Backend Business Logic
- Deployment Strategies

---

# 🚀 Future Enhancements

Potential improvements include:

- Real Git Integration
- Branch Management
- Merge Operations
- Pull Requests
- Repository Forking
- Team Collaboration
- Notifications
- Real-Time Updates
- Code Diff Viewer
- Repository Analytics
- CI/CD Integration

---

# 💻 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/codeverse.git
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🌍 Environment Variables

Create a `.env` file inside backend folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 📸 Screens Included

The project includes:

- Login Screen
- Signup Screen
- Dashboard
- Repository Creation
- User Profile
- Contribution Heatmap
- Version Control Operations
- Backend Architecture
- Project Structure

---

# 👨‍💻 Author

**Anuj Kumar**

Master's Student at IIT Kanpur

Interested in:

- Full Stack Development
- Software Engineering
- System Design
- Version Control Systems
- Distributed Systems
- Quantum Computing

---

# ⭐ Final Note

CodeVerse is more than just a repository manager. It is a practical implementation of the core principles behind modern version-control systems. The project demonstrates how repositories, commits, authentication, issue tracking, contribution monitoring, and user management work together to create a collaborative software development platform.

This project serves as an excellent learning resource for understanding full-stack development, backend architecture, REST APIs, database design, authentication systems, and version-control workflows.

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star.

### 🚀 Happy Coding with CodeVerse!

</div>

