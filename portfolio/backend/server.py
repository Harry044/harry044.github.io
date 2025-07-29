from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from typing import List, Optional
import uuid
from datetime import datetime

load_dotenv()

app = FastAPI(title="Harish Kumar Portfolio API")

# CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data models
class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str
    timestamp: Optional[datetime] = None

class SkillCategory(BaseModel):
    category: str
    skills: List[str]

class Project(BaseModel):
    id: str
    title: str
    description: str
    tech_used: List[str]
    challenge: str
    outcome: str
    image_url: Optional[str] = None

class Education(BaseModel):
    degree: str
    institution: str
    percentage: Optional[str] = None
    year: str
    achievement: Optional[str] = None

class Certification(BaseModel):
    name: str
    issuer: str
    description: Optional[str] = None

# Sample data for Harish Kumar
portfolio_data = {
    "personal_info": {
        "name": "Harish Kumar",
        "title": "Aspiring Data Science and AI Generalist",
        "tagline": "Driven by Data. Powered by Purpose.",
        "about": "A data-driven enthusiast with a strong academic foundation in Economics and Information Technology. Passionate about leveraging analytical skills and digital tools to solve real-world problems. With expertise in Microsoft Excel, Python, and web technologies, I bring a unique blend of economic insight and technical proficiency to every project.",
        "email": "mr.harishgrewal514@gmail.com",
        "phone": "9805877514",
        "linkedin": "https://www.linkedin.com/in/harishkumar044",
        "soft_skills": ["Problem-solving", "Attention to detail", "Adaptability", "Analytical Thinking", "Communication"]
    },
    "skills": [
        {
            "category": "Data Tools",
            "skills": ["MS Excel (Advanced)", "Python", "Data Analysis", "Financial Modeling"]
        },
        {
            "category": "Web Tools", 
            "skills": ["HTML", "CSS", "JavaScript", "Web Development"]
        },
        {
            "category": "Soft Skills",
            "skills": ["Typing Speed", "Analytical Thinking", "Communication", "Problem Solving"]
        }
    ],
    "projects": [
        {
            "id": str(uuid.uuid4()),
            "title": "Data Entry Automation in Excel",
            "description": "Developed automated Excel macros to streamline data entry processes, reducing manual work by 70%",
            "tech_used": ["MS Excel", "VBA", "Python"],
            "challenge": "Manual data entry was time-consuming and error-prone",
            "outcome": "Increased efficiency by 70% and reduced errors by 90%"
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Portfolio Website Development",
            "description": "Created a responsive portfolio website using modern web technologies",
            "tech_used": ["HTML", "CSS", "JavaScript", "React"],
            "challenge": "Creating a professional online presence",
            "outcome": "Professional website showcasing skills and projects"
        }
    ],
    "education": [
        {
            "degree": "A-Level IT (Currently Pursuing)",
            "institution": "NIELIT Shimla",
            "percentage": "In Progress",
            "year": "2025",
            "achievement": "Advanced IT certification program"
        },
        {
            "degree": "MA in Economics",
            "institution": "Vallabh Govt. College, Mandi (Sardar Patel University)",
            "percentage": "65%",
            "year": "2023",
            "achievement": None
        },
        {
            "degree": "BA in Economics",
            "institution": "Govt. College Bassa",
            "percentage": "80%", 
            "year": "2021",
            "achievement": None
        },
        {
            "degree": "O-Level IT",
            "institution": "NIELIT Shimla",
            "percentage": "73%",
            "year": "2020",
            "achievement": "IT Certification"
        },
        {
            "degree": "Higher Secondary Certificate (HSC)",
            "institution": "Government School",
            "percentage": "88%",
            "year": "2019",
            "achievement": "Awarded laptop scholarship for academic excellence"
        }
    ],
    "certifications": [
        {
            "name": "Advanced MS Excel",
            "issuer": "NSIC",
            "description": "Advanced Excel functions, macros, and data analysis"
        },
        {
            "name": "Financial Literacy",
            "issuer": "NSE Academy", 
            "description": "Financial markets and investment principles"
        },
        {
            "name": "CyberShikshaa Fundamentals",
            "issuer": "CyberShikshaa",
            "description": "Cybersecurity fundamentals and best practices"
        },
        {
            "name": "Course on Computer Concepts",
            "issuer": "NIELIT",
            "description": "Basic computer concepts and applications"
        }
    ]
}

# API endpoints
@app.get("/api/")
def read_root():
    return {"message": "Harish Kumar Portfolio API"}

@app.get("/api/profile")
def get_profile():
    return portfolio_data["personal_info"]

@app.get("/api/skills")
def get_skills():
    return portfolio_data["skills"]

@app.get("/api/projects")
def get_projects():
    return portfolio_data["projects"]

@app.get("/api/education")
def get_education():
    return portfolio_data["education"]

@app.get("/api/certifications")
def get_certifications():
    return portfolio_data["certifications"]

@app.post("/api/contact")
def submit_contact(message: ContactMessage):
    # In a real application, you would save this to a database
    message.timestamp = datetime.now()
    return {"message": "Thank you for your message! I'll get back to you soon.", "status": "success"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8002))
    uvicorn.run("server:app", host="0.0.0.0", port=port, reload=True)