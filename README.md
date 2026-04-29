# 🚀 Enterprise RAG Platform

> Enterprise-grade AI platform for intelligent document search and contextual question answering using Retrieval-Augmented Generation (RAG), OpenAI, Redis Vector Search, Spring Boot, Python, and React.

<div align="center">

![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-brightgreen?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge)
![Redis](https://img.shields.io/badge/Redis-Vector_Search-red?style=for-the-badge)
![OpenAI](https://img.shields.io/badge/OpenAI-LLM-black?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)

</div>

---

## 📌 Overview

Enterprise RAG Platform is a production-style AI application built to enable contextual question answering over enterprise documents using **Retrieval-Augmented Generation (RAG)**.

The platform allows users to upload enterprise documents (**PDF / DOCX**), semantically process and index them into a vector store, and interact with them through a conversational AI interface powered by **LLMs**.

Built with a modern enterprise architecture using **Spring Boot**, **Python**, **Redis Vector Search**, **OpenAI APIs**, and **React**, this project demonstrates how to design scalable, source-aware, AI-powered enterprise systems.

---

## ✨ Key Features

* 📄 Upload and process enterprise documents (PDF / DOCX)
* 🧠 AI-powered semantic search over document content
* ✂️ Intelligent chunking for contextual retrieval
* 🔎 Redis Vector Search for semantic similarity matching
* 🤖 OpenAI-powered contextual question answering
* 📚 Retrieval-Augmented Generation (RAG) pipeline
* ⚡ Low-latency response caching with Redis
* 💬 Conversational React chat interface
* 🧾 Source-aware grounded responses
* 🐳 Dockerized multi-service architecture

---

## 🏗️ Architecture

```text
User Uploads Document
        │
        ▼
Spring Boot Ingestion Service
        │
        ▼
Python AI Processing Engine
(Text Extraction + Chunking)
        │
        ▼
OpenAI Embedding Generation
        │
        ▼
Redis Vector Search Index
        │
        ▼
User Query (React Chat UI)
        │
        ▼
Query Embedding + Top-K Retrieval
        │
        ▼
Prompt Orchestration (RAG)
        │
        ▼
OpenAI Grounded Response
        │
        ▼
Answer + Source Citations
```

---

## 🔄 End-to-End RAG Flow

1. User uploads a **PDF / DOCX** document
2. Spring Boot stores metadata and triggers ingestion
3. Python extracts and preprocesses document content
4. Text is chunked into semantic blocks
5. OpenAI embeddings are generated for each chunk
6. Embeddings are stored in Redis Vector DB
7. User submits a question through the chat UI
8. Query is converted into embedding
9. Top-K relevant chunks are retrieved semantically
10. Retrieved context is injected into the prompt
11. OpenAI generates grounded response
12. UI displays answer with supporting source snippets

---

## 🛠️ Tech Stack

### Backend

* Java 21
* Spring Boot
* Spring Web
* Spring Data Redis
* REST APIs
* Maven

### AI Engine

* Python 3.11
* FastAPI
* OpenAI API
* PDF / DOCX Parsing
* Semantic Chunking
* Embedding Pipeline

### Frontend

* React
* TypeScript
* Chat UI
* File Upload UI

### Infrastructure

* Redis Stack (Vector Search)
* Docker
* Docker Compose

---

## 📂 Project Structure

```bash
enterprise-rag-platform/
│
├── backend/                  # Spring Boot services
│   ├── ingestion-service
│   ├── query-service
│   └── orchestration-service
│
├── ai-engine/                # Python AI processing
│   ├── extractor
│   ├── chunking
│   ├── embeddings
│   └── retriever
│
├── frontend/                 # React UI
│
├── infra/                    # Docker / Redis setup
│
├── docs/                     # Architecture diagrams
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

* Java 21
* Python 3.11+
* Node.js 18+
* Docker
* OpenAI API Key

### Clone the Repository

```bash
git clone https://github.com/your-username/enterprise-rag-platform.git
cd enterprise-rag-platform
```

### Start Infrastructure

```bash
docker-compose up -d
```

### Run Backend

```bash
cd backend
mvn spring-boot:run
```

### Run AI Engine

```bash
cd ai-engine
pip install -r requirements.txt
uvicorn main:app --reload
```

### Run Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 💡 Use Cases

* Enterprise Knowledge Assistant
* Internal Documentation Search
* Policy / Compliance Q&A
* Technical Documentation Assistant
* AI-powered Document Intelligence
* Semantic Enterprise Search

---

## 🎯 Why This Project

Enterprise RAG Platform demonstrates practical implementation of **LLM-powered enterprise systems** using modern **GenAI architecture patterns**.

This project showcases:

* Enterprise AI architecture design
* Retrieval-Augmented Generation (RAG)
* Vector databases and semantic search
* Prompt orchestration and response grounding
* Full-stack AI application engineering
* Spring Boot + Python + OpenAI integration

It is designed as a **portfolio-grade, recruiter-friendly, interview-ready project** for modern AI / GenAI engineering roles.

---

## 👨‍💻 Author

**Paraselli Ramakrishna**
Senior Software Engineer | Java | Spring Boot | Microservices | GenAI | RAG

* GitHub: https://github.com/your-username
* LinkedIn: https://linkedin.com/in/your-linkedin
* Email: [your-email@example.com](mailto:your-email@example.com)

---

## ⭐ Support

If you found this project useful, consider giving it a **star** ⭐ to support the work and follow for more enterprise-grade AI projects.
