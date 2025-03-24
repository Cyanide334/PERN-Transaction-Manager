# Transaction Manager

## **Setup Instructions**

To run the app locally, follow these steps:

1. **Ensure Node.js is Installed**  
   This project requires Node.js. If you don’t have it installed, download it from [nodejs.org](https://nodejs.org/).

2. **Run the Setup Script**  
   I've created a `run.sh` script that automates everything. Simply run:

   ```bash
   ./run.sh
   ```

   This will:

   - Install dependencies for both frontend and backend
   - Download and place the necessary `.env` files
   - Start both the backend and frontend

3. **Manual Setup (If Not Using `run.sh`)**  
   If you prefer a manual setup:

   - **Backend:**
     ```bash
     cd backend
     npm install
     npm start
     ```
   - **Frontend:**
     ```bash
     cd frontend
     npm install
     npm start
     ```
   - **Environment Files:**
     You will find the GitHub Gist URLs for both in the run.sh file, simply open them and copy the contents into
     - backend/src/.env
     - frontend/.env

---

## **Project Structure**

The project is structured to be scalable and maintainable while being easy to be collaborated upon. Most of the code is uncommented, simply because it is mostly self explanatory and any comment will add fluff that slows down the developer.

### **Backend (`backend/`)**

The backend follows some **Domain-Driven Design (DDD)** principles.

- `src/controllers/` → Handles API requests and responses
- `src/services/` → Contains business logic
- `src/repositories/` → Handles database interactions
- `src/models/` → Defines object models for a specific domain. Due to time constraint, **this was not used**. Its usage as a factory class creator helps in ensuring that a transaction's keys and attributes do not change in its journey throughout the layers. This ensures data integrity and consistency.
- `src/routes/` → Defines API endpoints
- `migrations/` → This folder is just a collection of sql files, that were run on Supabase for project Setup. This can be used in tandom with ORMs specifically to setup test databases, as well as keep track of the existing database.

**Why DDD?**

- Clear separation of concerns
- Scales well as complexity grows
- Easy to maintain and extend
- I wanted to see if I could do it in a JS Framework

### **Frontend (`frontend/`)**

The frontend follows a **scalable pageful approach**:

- `src/pages/` → Separate pages for different views (Home, Add Transaction, Edit Transaction, View Transaction)
- `src/components/` → Reusable UI components
- `src/utils/` → Helper functions (e.g., date formatting with Moment.js)

This approach keeps the frontend modular and easier to manage as the app grows.

---

## **Tech Stack Used**

- **PostgreSQL** (via Supabase) for the database
- **Express.js** for the backend
- **React.js** for the frontend
- **Node.js** as the runtime
- **Bootstrap (via CDN)** for styling
- **Moment.js** for date formatting
- **React-Loader-Spinner** for loading indicators

---

## **Challenges & Decisions**

### **Backend Challenges**

1. **Converting Python DDD Knowledge to JavaScript**  
   Since I had prior experience with Python's DDD, translating that knowledge to JavaScript required adapting to a new ecosystem and syntax.

2. **Maintaining a Consistent Object Structure**  
   Ensuring the same object structure across services, repositories, and controllers was key for maintainability. This led to adding type hinting in some places for clarity due to the dtime constraint of using an object oriented approach and its pitfalls in JS frameworks, which are predominantly function-oriented.

### **Frontend Challenges**

1. **Modals Were Too Complex**  
   Initially, I used modals for Add, Edit, and View transactions. However, they required too many hooks and props, leading to complexity. I switched to dedicated pages instead, which made the codebase much cleaner and easier to manage.

2. **Accidental Duplicate Component Exports**  
   At one point, I mistakenly exported the same component in two different pages, causing unexpected behavior. This was quickly fixed by restructuring the exports properly.

3. **Mixing Different Form Handling Approaches**  
   Some forms passed data as an object, while others used individual keys. This was done intentionally to explore different approaches and see which worked best in different scenarios, though it did add an extra layer of context I needed to remember.

---

## **Scalability & Maintainability**

Despite being a simple project, I aimed for **maximum scalability** and **top-notch collaboration** by:

- Following **DDD principles** in the backend
- Using a **modular page-based structure** in the frontend
- Keeping **reusable utilities** (e.g., date formatting) in a `utils/` folder
- Avoiding excessive prop-drilling by using cleaner state management

This ensures that as the project grows, it remains **organized, maintainable, and easy to extend**.
