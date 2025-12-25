# My AI Coach
**[阅读中文版](README_zh.md)**   
  
A strict AI coach who can help teach me knowledge on Product Management.  
Link: https://creator.voiceflow.com/share/69380ff9e00121d793684621/development  
 
(Writing...)  
  
Product Requirements Document (PRD)  
Project Name: PM AI Coach Status: v1.0 / MVP Owner: [YANGxPM] Date: December 2025  

## 1. Problem Statement - Why I built this project
Aspiring Product Managers struggle to practice for interviews effectively.  
* Current Solution: They read static books or use generic ChatGPT.
* Gap: Generic ChatGPT often gives vague or incorrect advice that conflicts with specific frameworks (like CIRCLES or STAR) required by top tech companies.
* Opportunity: Create a RAG-based (Retrieval-Augmented Generation) bot that answers only based on trusted interview frameworks, ensuring high-fidelity practice.

## 2. Target Audience
* Primary Persona: "The Aspiring PM." High intent, stressed, looking for quick, verified answers and mock questions.

## 3. Success Metrics (KPIs)
* North Star Metric: % of responses rated "Helpful" (Thumbs Up) by users.
* AI Quality Metric (Grounding): % of answers that can be directly cited back to the uploaded PDF (Target: >90%).
* Guardrail Metric: 0% occurrence of "false facts" (Hallucinations) regarding standard frameworks.

## 4. Data Strategy (The "Knowledge Base")
* Source Data: [Name of the PDF you used, e.g., "The PM Interview Cheat Sheet"].
* Data Cleaning: Removed headers, footers, and images to ensure the vector database ingests only clean text.
* Refresh Frequency: Static for MVP (Manual update required).

## 5. Technical Specifications (The AI Logic)
* Model: GPT-4o or Claude 3.5 Sonnet (via Voiceflow).
* Temperature (Creativity): 0.1 (Set very low).
    * Reasoning: We do not want creativity; we want factual accuracy based on the provided text.
* Context Window: Limit to last 3 turns to keep costs low and focus relevant.

## 6. System Prompt / Persona
The following instructions govern the AI's behavior:
"You are an expert Senior PM Interviewer. You are helpful but strict. Context: You have access to a specific Knowledge Base of interview frameworks. Instructions:
1. Answer the user's question using ONLY the provided Knowledge Base.
2. Format all answers with clear headers and bullet points.
3. If the user asks about a topic not in the Knowledge Base (e.g., coding, cooking), politely decline and steer them back to Product Management.
4. Do not provide generic advice found outside the provided text."

## 7. User Experience (UX) Requirements
* Onboarding: The bot must proactively state what it can and cannot do.
    * Copy: "I am trained on the [X] framework. Ask me about estimation questions or product design."
* Latency Handling: If the model takes >3 seconds to retrieve data, display a "Thinking..." animation to prevent user drop-off.
* Feedback Loop: Every response must have a "Thumbs Up / Thumbs Down" icon.
    * Action: Negative feedback logs the query for manual review.

