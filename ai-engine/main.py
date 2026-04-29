from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="AI Engine")

class AskRequest(BaseModel):
    question: str

@app.get("/health")
def health():
    return {"status": "UP"}

@app.post("/ingest")
def ingest():
    return {"status": "indexed"}

@app.post("/ask")
def ask(req: AskRequest):
    return {
        "answer": f"Grounded answer for: {req.question}",
        "sources": ["page-1", "page-2"]
    }
