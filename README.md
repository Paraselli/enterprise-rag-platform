# Intelligent Document Q&A Platform

AI-powered document question answering platform using Spring Boot, Python, OpenAI, Redis Vector Search, and React.

## Tech Stack
- Java 21, Spring Boot 3
- Python (FastAPI)
- OpenAI API
- Redis Stack (Vector Search)
- React + Vite
- Docker Compose

## Architecture
1. Upload documents via React UI
2. Spring Boot ingests metadata and orchestrates workflows
3. Python service extracts text, chunks content, and generates embeddings
4. Redis stores vectors and metadata
5. User asks questions
6. Relevant chunks are retrieved using vector similarity
7. LLM generates grounded answer with citations

## Run
```bash
docker compose up --build
```

## Services
- frontend: React UI
- backend: Spring Boot REST APIs
- ai-engine: FastAPI for chunking, embeddings, and retrieval
- redis: Redis Stack for cache + vector search
