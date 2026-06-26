# 📚 Research Paper Assistant (RAG using LangChain.js)

An AI-powered Research Paper Assistant built with **Node.js, Express, MongoDB, LangChain.js, and Google Gemini**. Users can upload research papers, ask questions, compare multiple papers, generate summaries, and retrieve context-aware answers using **Retrieval-Augmented Generation (RAG)**.

> 🚧 Currently under development. The project is being built step-by-step while learning LangChain.js and modern RAG architecture.

---

## 🚀 Features

### ✅ Authentication
- User Registration
- Secure Password Hashing (bcrypt)
- JWT Authentication
- Protected Routes

### ✅ Paper Management
- Upload Research Papers (PDF)
- Store PDF Metadata in MongoDB
- Multer File Upload
- User-wise Paper Organization

### ✅ LangChain Pipeline (Completed)
- PDF Loading using `PDFLoader`
- Document Objects
- Metadata Extraction
- Recursive Character Text Splitting
- Configurable Chunk Size & Overlap

### 🚧 Upcoming Features
- Google Embeddings (`text-embedding-004`)
- Chroma Vector Database
- Semantic Search
- Retrieval-Augmented Generation (RAG)
- Gemini Integration
- Research Paper Chat
- Compare Multiple Research Papers
- Methodology Extraction
- Future Work Extraction
- Automatic Research Paper Summarization

---

# 🏗️ Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication
- JWT
- bcrypt.js

## File Upload
- Multer

## AI / RAG
- LangChain.js
- Google Gemini API
- Google Embedding Model
- ChromaDB *(Upcoming)*

---

# 📂 Project Structure

```text
server/
│
├── src/
│   ├── config/
│   │     database.js
│   │
│   ├── controllers/
│   │     authController.js
│   │     paperController.js
│   │
│   ├── middleware/
│   │     uploadMiddleware.js
│   │
│   ├── models/
│   │     User.js
│   │     Paper.js
│   │
│   ├── routes/
│   │     authRoutes.js
│   │     paperRoutes.js
│   │
│   ├── services/
│   │     rag/
│   │        documentLoader.js
│   │        textSplitter.js
│   │
│   ├── utils/
│   │     generateToken.js
│   │
│   ├── server.js
│   └── test.js
│
├── uploads/
├── .env
├── package.json
└── README.md
```

---

# 🧠 RAG Pipeline

```text
User Uploads PDF
        │
        ▼
     PDFLoader
        │
        ▼
LangChain Documents
        │
        ▼
RecursiveCharacterTextSplitter
        │
        ▼
Document Chunks
        │
        ▼
Google Embeddings
        │
        ▼
ChromaDB
        │
        ▼
Retriever
        │
        ▼
Gemini
        │
        ▼
AI Generated Answer
```

---

# 📖 What I'm Learning

This project is helping me understand the complete Retrieval-Augmented Generation (RAG) pipeline from scratch.

Current topics:

- Document Loaders
- LangChain Documents
- Metadata
- Recursive Character Text Splitter
- Chunk Size
- Chunk Overlap

Upcoming topics:

- Embeddings
- Vector Databases
- Semantic Search
- Retrieval
- Prompt Engineering
- LangChain LCEL
- Google Gemini Integration

---

# ⚙️ Installation

```bash
git clone https://github.com/yourusername/research-paper-assistant.git

cd research-paper-assistant/server

npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret

GEMINI_API_KEY=your_google_api_key
```

Run the server:

```bash
npm run dev
```

---

# 📌 Current Progress

- [x] Express Server Setup
- [x] MongoDB Connection
- [x] User Authentication
- [x] JWT Authentication
- [x] PDF Upload
- [x] Paper Model
- [x] LangChain Setup
- [x] PDFLoader
- [x] Document Objects
- [x] RecursiveCharacterTextSplitter
- [ ] Google Embeddings
- [ ] ChromaDB
- [ ] Retriever
- [ ] Gemini Integration
- [ ] Multi-PDF Comparison
- [ ] Paper Chat

---

# 🎯 Future Improvements

- Multi-document Retrieval
- Citation Generation
- Research Paper Comparison
- Literature Review Generator
- AI-powered Keyword Extraction
- Research Paper Recommendation System
- Conversation Memory
- Streaming Responses
- PDF Highlighting with Sources

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

# ⭐ If you like this project

Consider giving the repository a **⭐ Star** if you found it useful or interesting.
