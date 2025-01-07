const translations = {
    en: {
        formTitle: "Registration Form",
        name: "Full Name:",
        age: "Age:",
        income: "Monthly Income (in ₹):",
        goal: "Financial Goal:",
        literacy: "Financial Literacy Level:",
        aadhar: "Upload Aadhaar Card:",
        submit: "Submit",
        footer: "© 2025 Registration Form. All rights reserved."
    },
    hi: {
        formTitle: "पंजीकरण फॉर्म",
        name: "पूरा नाम:",
        age: "आयु:",
        income: "मासिक आय (₹ में):",
        goal: "वित्तीय लक्ष्य:",
        literacy: "वित्तीय साक्षरता स्तर:",
        aadhar: "आधार कार्ड अपलोड करें:",
        submit: "जमा करें",
        footer: "© 2025 पंजीकरण फॉर्म। सर्वाधिकार सुरक्षित।"
    }
};

function translateForm(lang) {
    document.getElementById("form-title").innerText = translations[lang].formTitle;
    document.getElementById("label-name").innerText = translations[lang].name;
    document.getElementById("label-age").innerText = translations[lang].age;
    document.getElementById("label-income").innerText = translations[lang].income;
    document.getElementById("label-goal").innerText = translations[lang].goal;
    document.getElementById("label-literacy").innerText = translations[lang].literacy;
    document.getElementById("label-aadhar").innerText = translations[lang].aadhar;
    document.getElementById("submit-btn").innerText = translations[lang].submit;
    document.getElementById("footer-text").innerText = translations[lang].footer;
}
