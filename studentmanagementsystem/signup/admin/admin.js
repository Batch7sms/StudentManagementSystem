const subjectsData = {
    sem1: { cse: ["Maths", "Physics"], ece: ["Circuits", "Signals"], mech: ["Thermo", "Design"] },
    sem2: { cse: ["Data Structures", "OS"], ece: ["VLSI", "Microcontrollers"], mech: ["Manufacturing", "Kinematics"] }
};

// Manage Sections Visibility
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// User Management - Add Users and Display
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userType = document.getElementById('user-type').value;
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    const userTableBody = document.getElementById('user-table').getElementsByTagName('tbody')[0];
    
    // Add a new row to the table
    const row = userTableBody.insertRow();
    row.innerHTML = `
        <td>${username}</td>
        <td>${email}</td>
        <td>${userType}</td>
        <td><button onclick="deleteUser(this)">Delete</button></td>
    `;
    
    // Clear form fields
    document.getElementById('user-form').reset();
});

// Delete User from table
function deleteUser(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

// Example data for Attendance and Performance
const attendanceData = [
    { username: 'john_doe', attendance: 18, totalClasses: 20 },
    { username: 'jane_doe', attendance: 15, totalClasses: 20 }
];

const performanceData = [
    { username: 'john_doe', performanceScore: 85 },
    { username: 'jane_doe', performanceScore: 92 }
];

// Populate Performance Data
function populatePerformance() {
    const performanceTableBody = document.getElementById('performance-table').getElementsByTagName('tbody')[0];
    performanceData.forEach(data => {
        const row = performanceTableBody.insertRow();
        const averageScore = data.performanceScore; // You can implement an actual average calculation if needed
        row.innerHTML = `
            <td>${data.username}</td>
            <td>${data.performanceScore}</td>
            <td>${averageScore}</td>
        `;
    });
}

// On page load, populate attendance and performance data
window.onload = function() {
    // Update stats cards
    document.getElementById('teachers-count').textContent = teachersCount;
    document.getElementById('students-count').textContent = studentsCount;
    document.getElementById('admin-name').textContent = "Admin: " + adminName;
    document.getElementById('admin-email').textContent = "Email: " + adminEmail;

    // By default, show the admin details section
    showSection('user-management');
    populateAttendance();
    populatePerformance();
};


function toggleRollNoField() {
    var studentType = document.getElementById("student-select").value;
    var rollNoField = document.getElementById("rollno-field");

    if (studentType === "one student") {
        rollNoField.style.display = "block";
    } else {
        rollNoField.style.display = "none";
    }
}

function updateSubjects() {
    const semester = document.getElementById("semester").value;
    const branch = document.getElementById("branch").value;
    const subjectSelect = document.getElementById("subject");
    subjectSelect.innerHTML = '<option value="">Select Subject</option>';
    
    if (semester && branch && subjectsData[semester] && subjectsData[semester][branch]) {
        subjectsData[semester][branch].forEach(subject => {
            subjectSelect.innerHTML += `<option value="${subject}">${subject}</option>`;
        });
        subjectSelect.innerHTML += `<option value="all">All Subjects</option>`;

    }
}


function generateReport() {
    const studentType = document.getElementById("student-select").value;
    const table = document.getElementById("report-table");
    const thead = document.getElementById("table-head");
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = "";

    if (!studentType) {
        alert("Please select student type");
        return;
    }

    table.style.display = "table";
    thead.innerHTML = '<tr><th>Roll No</th><th>Name</th></tr>';
    
    if (studentType === "all") {
        thead.innerHTML += '<th>Subjects</th><th>Percentage</th>';
        tbody.innerHTML += '<tr><td>101</td><td>John Doe</td><td>Maths, Physics</td><td>80%</td></tr>';
        tbody.innerHTML += '<tr><td>102</td><td>Jane Smith</td><td>Maths, Physics</td><td>85%</td></tr>';
    } else {
        thead.innerHTML += '<th>Subjects</th><th>Percentage</th><th>Overall %</th>';
        tbody.innerHTML += '<tr><td>103</td><td>David Lee</td><td>Maths, Physics</td><td>75%, 85%</td><td>80%</td></tr>';
    }
}