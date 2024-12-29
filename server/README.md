# Setting Up Backend with Sequelize

## 1. **Install Sequelize and Sequelize CLI**

```powershell
npm install sequelize sequelize-cli
npx sequelize-cli init
```

\*\* You may face difficulties for sequelize installation, in that case, first install using:

```powershell
npm install -g sequelize sequelize-cli // Once globally
npm install sequelize sequelize-cli // Once more inside the server folder
sequelize init()
```

This creates a default folder structure (`models`, `migrations`, `seeders`, and `config`).

## 2. **Clean Up Unnecessary Folders**

- Remove `migrations` and `seeders` folders if you won't use them. Retain only `models` (for database models) and `config` (for database connection settings).

## 3. **Set Up Database Sync in index.js**

This code ensures Sequelize connects to the database and syncs the models (creating tables if they don't exist). Add the following to your `index.js`:

```javascript
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`); // eg. PORT=3001
  });
});
```

## 4. **Define the Post Model**

In the `models` folder, create a file named `Posts.js`. This defines how the `Posts` table will be structured in the database:

```javascript
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: { type: DataTypes.STRING, allowNull: false },
    postText: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
  });
  return Posts;
};
```

This table will store posts with `title`, `postText`, and `username` fields.

## 5. **Configure the Database Connection**

Open `config/config.json` and update the `development` section to match your database credentials:

```json
{
  "development": {
    "username": "root",
    "password": "******",
    "database": "linkupdb",
    "host": "localhost",
    "dialect": "mysql"
  }
}
```

- **`username`:** Your MySQL username.
- **`password`:** Your MySQL password.
- **`database`:** Name of your database (`linkupdb` in this case).
- **`host`:** Server address (usually `localhost` for local development).
- **`dialect`:** Specifies the database type (e.g., MySQL).

## 6. **Create Routes for Posts**

Create a folder named `routes` and a file named `Posts.js` inside it. Define GET and POST APIs for the `Posts` table:

```javascript
const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

// Fetch all posts
router.get('/', async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

// Add a new post
router.post('/', async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
```

- **GET `/posts`:** Retrieves all posts from the `Posts` table.
- **POST `/posts`:** Adds a new post to the `Posts` table using the request body.

## 7. **Integrate Routes in index.js**

Import and use the `Posts` routes in `index.js`:

```javascript
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);
```

This mounts the routes under the `/posts` endpoint.

## 8. **Start the Server**

Run the server to ensure everything is working:

```powershell
nodemon index.js
```

Your server is now ready, and your APIs are working with MySQL! 🎉

You can test them using tools like Postman or Insomnia.
