# 📝 Markdown to HTML Frontend

A React-based web application that allows users to type Markdown and instantly see the rendered HTML on the right-hand side. It connects to a backend Express server that uses the `showdown` library to convert Markdown into HTML.

---

## 🚀 Features

- Live Markdown editing with instant preview
- Clean side-by-side layout (Markdown input & HTML output)
- Uses Tailwind CSS for styling
- Communicates with Express backend via `axios` (sends `text/plain`)

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Markdown Conversion:** Handled by a backend Express server using Showdown

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/markdown-to-html-frontend.git
cd markdown-to-html-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Ensure Backend is Running

Start your backend Express server on port `5000`:

```bash
node app.js
```

This should expose a POST endpoint at `http://localhost:5000/markdown` that receives `text/plain` and returns converted HTML.
The backend is available in my repo markdown-to-html-backend.

### 4. Start Frontend

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or whatever port Vite/React runs on).

---

## 📁 Folder Structure

```
markdown-to-html-frontend/
├── src/
│   ├── components/
│   │   ├── MarkDownInput.jsx
│   │   └── Preview.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
└── index.html
```





## 🔮 Future Ideas

- Add GitHub Flavored Markdown (GFM) support
- Export preview to HTML
- Mobile view support
- Theme toggler (light/dark mode)

---

## 🧑‍💻 Author

Made with ❤️ by **Sooraj**

---

## 📄 License

MIT License
