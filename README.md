# Insight LMS - Full Stack Web Application #
<img align="center" alt="Banner" src="./readMeResources/LoginPage.png"  width="100%" height="70%">

## Contributors ##
- [Isaac Summers](https://www.linkedin.com/in/isaac-w-summers/)
- [Carl Gutierrez ](https://www.linkedin.com/in/carlanthonyg/)
- [Autumn Sheridan](https://www.linkedin.com/in/autumn-r-sheridan/)
- [Brandon Stegall](https://www.linkedin.com/in/brandonstegall817/)
- [Nathan Vititoe](https://www.linkedin.com/in/nathanvititoe/)

## Description ##

Insight is a powerful Learning Management System (LMS) designed to transform education through advanced technology. This full-stack web application is built using the PERN stack (PostgreSQL, Express, React, Node.js), delivering a seamless and interactive learning experience.

## Primary Tech Stack ##

Frontend:
- <img align="center" alt="React" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> [React](https://reactjs.org)
  
- <img align="center" alt="Tailwindcss" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" /> [Tailwind CSS](https://tailwindcss.com)

Backend:
 - <img align="center" alt="NodeJS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> [Node.js](https://nodejs.org)
 - <img align="center" alt="NodeJS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /> [Express](https://expressjs.com)
  - <img align="center" alt="PostgresSQL" width="30px" style="padding-right:10px;" src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/postgresql/postgresql-original.svg" /> [PostgreSQL](https://www.postgresql.org)

## Tech used

- [`Vite`](https://vitejs.dev/) - Module bundler, transpiler and dev server.
- [`Docker`](https://www.docker.com/) - Containerization framework for dev and deployment.
- [`Node Cluster Module`](https://nodejs.org/api/cluster.html) -  Utilized for enhancing application performance by distributing workloads across multiple processes for improved efficiency and response times.
- [`loadtest`](https://nodejs.org/api/cluster.html) -  Employed for load testing and assessing the robustness of the application's node clustering implementation.
- [`ChartJS`](https://nodejs.org/api/cluster.html) - Utilized for seamlessly creating interactive and visually appealing charts and graphs.
- [`Sockets.io`](https://nodejs.org/api/cluster.html) - Integrated for establishing real-time, bidirectional communication between the server and clients.
- [`jwt-decode`](https://jwt.io/) - Leveraged to securely manage user sessions and access control.

# Development Setup #
### INITIAL SETUP ###
1. Clone this repository: `git clone https://github.com/gschool-blue-ocean/insight`
2. Install dependencies for both Root, Client and API directories : `npm install`
3. Set up your environment variables (database connection, etc.): Create a `.env` file
4. Start the development server: INSIDE CLIENT FOLDER: `npm run dev`, INSIDE API FOLDER: `npm run server`

## Project Structure ##

- `/client`: Frontend code built with React and Tailwind CSS.
- `/server`: Backend code powered by Node.js, Express, and PostgreSQL.

## Technical Challenges ##

- WebSockets + Chatbot feature
- WebSockets + Clustering 
- One of the major challenges the team faced was organizing the various data needed to populate the site. Common issues included complex client requests involving multiple tables, unforeseen interdependencies, and sticky syntax issues from end to end

## Walkthrough of the App ##

### Login Page
<img align="center" alt="Banner" src="./readMeResources/LoginPage.png"  width="100%" height="70%">

### Student Page 
<img align="center" alt="Banner" src="./readMeResources/StudentPageLMS.png"  width="100%" height="70%">

### Teacher Page
<img align="center" alt="Banner" src="./readMeResources/TeacherPageLMS.png"  width="100%" height="70%">

### Admin Page
<img align="center" alt="Banner" src="./readMeResources/AdminPageLMS.png"  width="100%" height="70%">

## How does the app work?
 Research Required:
  - NodeJS Cluster
  - WebSockets
  - loadtest
  - jwt-decode
  - bcrypt
  - socket.io-client
  - Chart.js

## Workflow and Key lessons
- Team Workflow : 
  - Team StandUp
  - Morning Sync Merge / reviews
  - Afternoon Sync + Merge / reviews
- Git Workflow :
  - Deploy off main branch
  - Branch for task named off of TMS epic/ticket


### Key Lessons

- Commit and Push often even if you're not 100%
- Learn: Git Stash / Git Apply / Git Rebase / and how to properly work with branching, pulling, and Merging Conflicts


