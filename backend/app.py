import os
import streamlit as st
import google.generativeai as genai
import PyPDF2 as pdf
from dotenv import load_dotenv

load_dotenv()

# Get the API key from the environment variable
api_key = os.getenv('GOOGLE_API_KEY')

# Configure the API key for the generative AI
genai.configure(api_key=api_key)

def get_gemini_response(input):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(input)
    return response.text

def input_pdf_text(uploaded_file):
    reader = pdf.PdfReader(uploaded_file)
    text = ""
    for page in range(len(reader.pages)):
        page = reader.pages[page]
        text += str(page.extract_text())
    return text

# Prompt Template
input_prompt_template = """
Hey Act Like a skilled or very experienced ATS(Application Tracking System)
with a deep understanding of tech field of {jd}. Your task is to evaluate the resume based on the given job description.
You must consider the job market is very competitive and you should provide 
best assistance for improving their resumes. Assign the percentage Matching based 
on {jd} and the missing keywords with high accuracy. Be honest with the score, even if the score gets 0% match.
Also say if I am unfit for the job and suggest a better alternative job role based on my technical skills.

resume: {text}
description: {jd}
"""

# Streamlit app
st.title("Smart ATS")
st.text("Improve Your Resume ATS")

# Adding custom CSS to change background and text colors
st.markdown(
    """
    <style>
    .reportview-container {
        background-color: white;
        color: black;
    }
    .sidebar .sidebar-content {
        background-color: white;
        color: black;
    }
    .widget-label {
        color: black;
    }
    </style>
    """,
    unsafe_allow_html=True
)

# Adding placeholder to the job description text area
jd = st.text_area("Paste the Job Description", placeholder="Enter the job description")

uploaded_file = st.file_uploader("Upload Your Resume", type="pdf", help="Please upload the PDF")

submit = st.button("Submit")

if submit:
    if uploaded_file is not None:
        text = input_pdf_text(uploaded_file)
        input_prompt = input_prompt_template.format(jd=jd, text=text)
        response = get_gemini_response(input_prompt)
        st.subheader(response)
