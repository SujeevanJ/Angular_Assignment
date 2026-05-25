# Angular Assignment

A simple Angular application with login, dashboard, and search functionality.

## Features

### 1. Login Page
- Reactive form with name, email, and password fields
- Form validations:
  - Name: Required, minimum 3 characters
  - Email: Required, must be valid email format
  - Password: Required, minimum 6 characters
- On successful validation, navigates to dashboard

### 2. Dashboard Page
- Fetches users from JSONPlaceholder API (https://jsonplaceholder.typicode.com/users)
- Displays users in a table with columns: ID, Name, Email, Phone, City
- Shows welcome message with logged-in user's name

### 3. Search Feature
- Search input to filter users
- Filters by username or ID
- Clear button to reset search

### 4. Routing
- `/login` - Login page
- `/dashboard` - Dashboard page
- Default route redirects to `/login`

## Angular Concepts Used

- **BehaviorSubject** - Used in DataService to share login data between components
- **AsyncSubject** - Available in DataService
- **ReplaySubject** - Available in DataService
- **Observable** - Used for API calls in UserService
- **Reactive Forms** - FormBuilder and validators in Login component
- **Parent-to-Child Communication** - Dashboard passes data to Search component
- **Child-to-Parent Communication** - Search component uses @Output/EventEmitter
- **Routing** - Configured with paths and component mapping using router.navigate()

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open browser at http://localhost:4200

## Project Structure

```
src/
├── app/
│   ├── dashboard/          # Dashboard component
│   ├── login/              # Login component
│   ├── search/             # Search component
│   ├── app.module.ts       # Main module
│   ├── app-routing.module.ts # Routing configuration
│   ├── data.service.ts     # Service with BehaviorSubject, AsyncSubject, ReplaySubject
│   ├── user.service.ts     # Service for API calls
│   └── user.model.ts       # User interface
├── index.html
├── main.ts
└── styles.css
```

## Login Credentials

Since there is no real authentication, any valid data can be used:
- Name: Any name with at least 3 characters
- Email: Any valid email format
- Password: Any password with at least 6 characters
