# TODO App - Backend

Node.js + Express + MongoDB REST API

## Setup

1. Install dependencies:
```
npm install
```

2. Create `.env` file:
```
MONGO_URL=your_mongodb_url
PORT=8005
```

3. Run:
```
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v1/todos | Get all todos |
| POST | /api/v1/createTodo | Create todo |
| PUT | /api/v1/updateTodo/:id | Update todo |
| DELETE | /api/v1/deleteTodo/:id | Delete todo |
