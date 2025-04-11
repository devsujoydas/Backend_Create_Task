# 📝 Node.js File Manager App

A simple and clean file manager web app built with **Express.js**, **EJS**, and styled using **Tailwind CSS**.

Users can:
- View all available `.txt` files
- Read file content
- Create new text files dynamically

---

## 🚀 Features

- 🗂 List all files from the `files/` directory
- 📄 View individual file details
- ➕ Create a new file with title and content
- 🖌️ Clean, responsive UI with Tailwind CSS
- 💾 File system operations using Node's `fs` module

---

## ⚙️ Installation & Usage

### 1. Clone the Repository

```
git clone https://github.com/devsujoy36/file-manager-app.git
cd file-manager-app
```

### 2. Install Dependencies
```
npm install
```

### 3. Run the Server
``` 
nodemon index.js 
```

Server will start at:
🌐 http://localhost:5000


## 📁 Project Structure
    file-manager-app/
    │
    ├── files/               # Text files stored here
    ├── public/              # Static assets (CSS, JS, etc.)
    ├── views/               # EJS templates (index.ejs, filedetails.ejs)
    ├── index.js             # Main Express server file
    └── README.md            # Project info


## 🧪 Tech Stack
```
Backend: Node.js, Express.js
Frontend: EJS, HTML5, Tailwind CSS
File Handling: Node.js fs module
```

## 🙌 Author
Developed by Sujoy Das
🔗 Facebook
🧑‍💻 GitHub: @devsujoy36


## 📃 License
This project is licensed under the MIT License.