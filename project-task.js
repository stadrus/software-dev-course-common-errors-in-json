/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================
//should remove template literal, this will not parse with JSON per stackoverflow. ({ // could use JSON.stringify(). Remove JSON from invalidBooking, replaced JSON, removed const
const invalidBookingJSON =
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", //missing comma
  "checkOutDate": "2024-05-20",
  "guests": [
      {
      "name": "Alice Johnson", //name needed double quotes, added
      "age": 30,
      "email": "alice.johnson@example.com", // missing comma, added comma
      },
      {
      "name": "Bob Smith",
      "age": 57, // age should be a number
      "email": "bob.smith@example.com", //email missing .com and line missing comma, added comma. 
      }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"],//removed extra comma after parking
    },
  
};



// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
My approach was to take it one line at at time. 

2️⃣ How did you confirm that your corrected JSON file was valid?
using jsonlint.com, stackoverflow, and W3 schools helped me identfy the errors. 

3️⃣ Which errors were the most difficult to spot? Why?
bracket and brace placement

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   using the highlighter has been very helpful when keeping thing organized/ 
*/
