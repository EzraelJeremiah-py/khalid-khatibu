from flask import Flask, jsonify
from flask_cors import CORS   # ✅ import CORS

app = Flask(__name__)
CORS(app)  # ✅ enable CORS for all routes

@app.route("/api/portfolio", methods=["GET"])
def get_portfolio():
    portfolio = {
        "name": "Khalid Khatibu",
        "about": "Data scientist specialized in analysis using Excel, Power BI, and programming languages like Python and R.",
        "qualifications": [
            "BSc in Computer Science",
            "Data Analysis & Visualization",
            "Database Administration",
            "Machine Learning Applications"
        ],
        "skills": [
            "Python",
            "R",
            "Excel",
            "Power BI",
            "SQL",
            "Database Administration",
            "Data Cleaning",
            "Data Visualization",
            "Machine Learning",
            "Statistical Analysis"
        ],
        "projects": [
            {
                "title": "Sales Dashboard",
                "description": "Built interactive dashboards in Power BI to visualize sales performance."
            },
            {
                "title": "Customer Segmentation",
                "description": "Applied clustering techniques in Python to segment customers for targeted marketing."
            }
        ],
        "contact": {
            "email": "khalidjuma@gmail.com",
            "phone": "+255618976345",
            "github": "https://github.com/KhalidKhatibu",
            "linkedin": "https://linkedin.com/in/khalidkhatibu"
        }
    }
    return jsonify(portfolio)

if __name__ == "__main__":
    app.run(debug=True)
