// =========================================================
// IMPORTS
// =========================================================

// Default import
import formatStudentResult from "./studentUtils.js";

// Named imports
import {
    DEPARTMENT_NAME,
    calculateTotal,
    calculateAverage as findAverage,
    getGrade,
    getStatus
} from "./studentUtils.js";



// =========================================================
// EXISTING STUDENT REGISTRATION
// =========================================================

const registrationForm =
    document.getElementById("registrationForm");

const registrationMessage =
    document.getElementById("registrationMessage");

const welcomeMessage =
    document.getElementById("welcomeMessage");

const studentInformationText =
    document.getElementById("studentInformationText");

const studentButton =
    document.getElementById("studentButton");


registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("studentName").value;

    const email =
        document.getElementById("studentEmail").value;

    const age =
        document.getElementById("studentAge").value;

    const department =
        document.getElementById("department").value;


    if (name === "" || email === "" || age === "") {

        registrationMessage.textContent =
            "Please fill all fields.";

        registrationMessage.style.color = "red";

        return;

    }


    registrationMessage.textContent =
        "Registration Successful!";

    registrationMessage.style.color = "green";


    welcomeMessage.textContent =
        `Welcome ${name}`;


    studentInformationText.textContent =
        `Email: ${email}, Age: ${age}, Department: ${department}`;

});


studentButton.addEventListener("click", function() {

    alert("Student information button clicked.");

});



// =========================================================
// TASK 1
// UNIVERSITY COURSE ENROLLMENT MANAGER
// =========================================================


// Core courses

const coreCourses = [

    "Web Development",

    "Database Systems",

    "Data Structures"

];


// Elective courses

const electiveCourses = [

    "Artificial Intelligence",

    "Computer Networks",

    "Cloud Computing"

];


// Student object

const student = {

    name: "Ali",

    rollNumber: "BSCS-001",

    department: "Computer Science",

    semester: 6

};


// CGPA array

const cgpaValues = [

    3.10,

    3.25,

    3.00,

    3.75,

    3.45

];



// ---------------------------------------------------------
// 1. MERGE ARRAYS USING SPREAD
// ---------------------------------------------------------

const allCourses = [

    ...coreCourses,

    ...electiveCourses

];



// ---------------------------------------------------------
// 2. COPY ARRAY USING SPREAD
// ---------------------------------------------------------

const copiedCourses = [

    ...allCourses

];


// Add course only to copy

copiedCourses.push(
    "Software Engineering"
);



// ---------------------------------------------------------
// 3. UPDATED STUDENT USING SPREAD
// ---------------------------------------------------------

const updatedStudent = {

    ...student,

    semester: 7,

    cgpa: 3.45

};



// ---------------------------------------------------------
// 4. REST PARAMETER
// ---------------------------------------------------------

function enrollStudent(name, ...courses) {

    return `${name} enrolled in ${courses.length} course(s): ${courses.join(", ")}`;

}



// ---------------------------------------------------------
// 5. REST + ARROW FUNCTION
// ---------------------------------------------------------

const calculateAverageCGPA = (...cgpas) => {

    let total = 0;


    cgpas.forEach(function(cgpa) {

        total = total + cgpa;

    });


    return total / cgpas.length;

};



// ---------------------------------------------------------
// 6. HIGHEST CGPA USING MATH.MAX + SPREAD
// ---------------------------------------------------------

const highestCGPA =
    Math.max(...cgpaValues);



// ---------------------------------------------------------
// 7. DEFAULT PARAMETER
// ---------------------------------------------------------

function getStudentInfo(
    name,
    department = "Computer Science"
) {

    return `${name} - Department: ${department}`;

}



// ---------------------------------------------------------
// DISPLAY TASK 1
// ---------------------------------------------------------

const task1Output =
    document.getElementById("task1Output");


task1Output.innerHTML = `

    <p>
        <strong>Core Courses:</strong>
        ${coreCourses.join(", ")}
    </p>


    <p>
        <strong>Elective Courses:</strong>
        ${electiveCourses.join(", ")}
    </p>


    <p>
        <strong>All Courses (${allCourses.length}):</strong>
        ${allCourses.join(", ")}
    </p>


    <p>
        <strong>Copy after adding a course
        (${copiedCourses.length}):</strong>
        ${copiedCourses.join(", ")}
    </p>


    <p>
        <strong>Original still has:</strong>
        ${allCourses.length} courses
    </p>


    <p>
        <strong>Original Student:</strong>
        ${student.name},
        Semester ${student.semester}
    </p>


    <p>
        <strong>Updated Student:</strong>
        ${updatedStudent.name},
        Semester ${updatedStudent.semester},
        CGPA ${updatedStudent.cgpa}
    </p>


    <p>
        <strong>Enrollment:</strong>
        ${enrollStudent(
            "Ali",
            "Web Development",
            "Database Systems",
            "Artificial Intelligence"
        )}
    </p>


    <p>
        <strong>Average CGPA:</strong>
        ${calculateAverageCGPA(...cgpaValues).toFixed(2)}
    </p>


    <p>
        <strong>Highest CGPA:</strong>
        ${highestCGPA}
    </p>


    <p>
        <strong>Department (default):</strong>
        ${getStudentInfo("Ali")
            .replace("Ali - Department: ", "")}
    </p>

`;



// =========================================================
// TASK 2
// STUDENT UTILITY MODULE
// =========================================================


// Students array

const students = [

    {
        name: "Sara",

        rollNumber: "BSCS-023",

        assignment: 27,

        midterm: 25,

        finalExam: 30
    },


    {
        name: "Ahmed",

        rollNumber: "BSCS-002",

        assignment: 20,

        midterm: 22,

        finalExam: 25
    },


    {
        name: "Ayesha",

        rollNumber: "BSCS-014",

        assignment: 15,

        midterm: 13,

        finalExam: 20
    },


    {
        name: "Hassan",

        rollNumber: "BSCS-031",

        assignment: 25,

        midterm: 24,

        finalExam: 28
    }

];



const task2Output =
    document.getElementById("task2Output");


// Display department

task2Output.innerHTML = `

    <div class="alert alert-info">

        <strong>Department:</strong>
        ${DEPARTMENT_NAME}

    </div>

`;



// ---------------------------------------------------------
// FOREACH + OBJECT DESTRUCTURING
// ---------------------------------------------------------

students.forEach(
    ({
        name,
        rollNumber,
        assignment,
        midterm,
        finalExam
    }) => {


        // Calculate total

        const total = calculateTotal(

            assignment,

            midterm,

            finalExam

        );


        // Calculate average

        const average = findAverage(

            assignment,

            midterm,

            finalExam

        );


        // Grade

        const grade = getGrade(total);


        // Status

        const status = getStatus(total);



        // Display student card

        task2Output.innerHTML += `

            <div class="card student-card">

                <div class="card-body">

                    <h5>
                        ${name}
                    </h5>


                    <p>
                        ${formatStudentResult(
                            name,
                            rollNumber,
                            total
                        )}
                    </p>


                    <p>
                        <strong>Average:</strong>
                        ${average.toFixed(2)}
                    </p>


                    <p>
                        <strong>Grade:</strong>
                        ${grade}
                    </p>


                    <p>
                        <strong>Status:</strong>
                        ${status}
                    </p>

                </div>

            </div>

        `;

    }
);



// =========================================================
// TASK 3
// ONLINE EXAMINATION WORKFLOW
// =========================================================


// Output areas

const task3ValidOutput =
    document.getElementById(
        "task3ValidOutput"
    );


const task3ErrorOutput =
    document.getElementById(
        "task3ErrorOutput"
    );



// ---------------------------------------------------------
// STEP 1
// VERIFY STUDENT
// ERROR-FIRST CALLBACK
// ---------------------------------------------------------

function verifyStudent(roll, callback) {

    setTimeout(function() {

        if (roll === "") {

            callback(
                "Roll number is required",
                null
            );

        } else {

            callback(
                null,
                `Student ${roll} verified`
            );

        }

    }, 1000);

}



// ---------------------------------------------------------
// STEP 2
// LOAD EXAM PAPER
// ---------------------------------------------------------

function loadExamPaper(callback) {

    setTimeout(function() {

        callback(
            "Exam paper loaded"
        );

    }, 1500);

}



// ---------------------------------------------------------
// STEP 3
// SUBMIT ANSWERS
// ---------------------------------------------------------

function submitAnswers(callback) {

    setTimeout(function() {

        callback(
            "Answers submitted"
        );

    }, 2000);

}



// ---------------------------------------------------------
// STEP 4
// GENERATE RESULT
// ---------------------------------------------------------

function generateResult(callback) {

    setTimeout(function() {

        callback(
            "Result generated: 82 marks"
        );

    }, 1000);

}



// ---------------------------------------------------------
// PART A
// NESTED CALLBACKS
// ---------------------------------------------------------

/*
This style is called callback hell because
callbacks become nested inside other callbacks,
making the code harder to read.
*/

function runValidExamWorkflow() {


    task3ValidOutput.innerHTML = `

        <p>
            Exam workflow started...
        </p>

    `;



    verifyStudent(
        "BSCS-001",

        function(error, message) {


            if (error) {

                task3ValidOutput.innerHTML += `

                    <p class="text-danger">
                        Error: ${error}
                    </p>

                `;

                return;

            }


            task3ValidOutput.innerHTML += `

                <p>
                    Step 1: ${message}
                </p>

            `;



            loadExamPaper(
                function(message) {


                    task3ValidOutput.innerHTML += `

                        <p>
                            Step 2: ${message}
                        </p>

                    `;



                    submitAnswers(
                        function(message) {


                            task3ValidOutput.innerHTML += `

                                <p>
                                    Step 3: ${message}
                                </p>

                            `;



                            generateResult(
                                function(message) {


                                    task3ValidOutput.innerHTML += `

                                        <p>
                                            Step 4: ${message}
                                        </p>


                                        <p class="success-message">
                                            Exam completed successfully!
                                        </p>

                                    `;

                                }

                            );

                        }

                    );

                }

            );

        }

    );

}



// ---------------------------------------------------------
// PART B
// EMPTY ROLL NUMBER
// ---------------------------------------------------------

function runErrorExamWorkflow() {


    task3ErrorOutput.innerHTML = `

        <p>
            Exam workflow started...
        </p>

    `;



    verifyStudent(
        "",

        function(error, message) {


            if (error) {

                task3ErrorOutput.innerHTML += `

                    <p class="text-danger">
                        Error: ${error}
                    </p>

                `;

                return;

            }


            task3ErrorOutput.innerHTML += `

                <p>
                    ${message}
                </p>

            `;

        }

    );

}



// Run both tests

runValidExamWorkflow();

runErrorExamWorkflow();



// =========================================================
// TASK 4
// UNIVERSITY RESULT PORTAL
// =========================================================


// ---------------------------------------------------------
// DATABASE
// ---------------------------------------------------------

const resultDatabase = [

    {
        name: "Ali",

        rollNumber: "BSCS-001",

        department: "Computer Science",

        semester: 6,

        assignment: 27,

        midterm: 25,

        finalExam: 30
    },


    {
        name: "Ahmed",

        rollNumber: "BSCS-002",

        department: "Computer Science",

        semester: 6,

        assignment: 20,

        midterm: 22,

        finalExam: 25
    },


    {
        name: "Sara",

        rollNumber: "BSCS-023",

        department: "Computer Science",

        semester: 6,

        assignment: 27,

        midterm: 25,

        finalExam: 30
    },


    {
        name: "Ayesha",

        rollNumber: "BSCS-014",

        department: "Computer Science",

        semester: 6,

        assignment: 15,

        midterm: 13,

        finalExam: 20
    },


    {
        name: "Hassan",

        rollNumber: "BSCS-031",

        department: "Computer Science",

        semester: 6,

        assignment: 25,

        midterm: 24,

        finalExam: 28
    }

];



// ---------------------------------------------------------
// FIND STUDENT
// PROMISE
// ---------------------------------------------------------

function findStudent(rollNumber) {

    return new Promise(function(resolve, reject) {


        setTimeout(function() {


            const student =
                resultDatabase.find(
                    function(student) {

                        return student.rollNumber === rollNumber;

                    }
                );


            if (student) {

                resolve(student);

            } else {

                reject(
                    "Student not found"
                );

            }


        }, 1000);

    });

}



// ---------------------------------------------------------
// CALCULATE RESULT
// PROMISE
// ---------------------------------------------------------

function calculateResult(student) {

    return new Promise(function(resolve) {


        setTimeout(function() {


            // OBJECT DESTRUCTURING

            const {

                assignment,

                midterm,

                finalExam

            } = student;



            // Calculate total

            const total =
                calculateTotal(
                    assignment,
                    midterm,
                    finalExam
                );



            // Calculate average

            const average =
                findAverage(
                    assignment,
                    midterm,
                    finalExam
                );



            // Grade

            const grade =
                getGrade(total);



            // Status

            const status =
                getStatus(total);



            resolve({

                total: total,

                average: average,

                grade: grade,

                status: status

            });


        }, 1000);

    });

}



// ---------------------------------------------------------
// OUTPUT ELEMENTS
// ---------------------------------------------------------

const task4SearchOutput =
    document.getElementById(
        "task4SearchOutput"
    );


const task4AllOutput =
    document.getElementById(
        "task4AllOutput"
    );


const rollNumberInput =
    document.getElementById(
        "rollNumberInput"
    );


const searchButton =
    document.getElementById(
        "searchButton"
    );


const loadAllButton =
    document.getElementById(
        "loadAllButton"
    );



// =========================================================
// TASK 4 - PART A
// PROMISE CHAIN
// THEN / CATCH / FINALLY
// =========================================================


// We automatically demonstrate the Promise chain
// with BSCS-001.

function searchUsingPromiseChain(rollNumber) {


    task4SearchOutput.innerHTML = `

        <p>
            Searching...
        </p>

    `;



    findStudent(rollNumber)

        .then(function(student) {


            return calculateResult(
                student
            )

            .then(function(result) {


                task4SearchOutput.innerHTML = `

                    <div class="card">

                        <div class="card-body">

                            <h5>
                                Student: ${student.name}
                            </h5>


                            <p>
                                <strong>
                                    Roll No:
                                </strong>
                                ${student.rollNumber}
                            </p>


                            <p>
                                <strong>
                                    Department:
                                </strong>
                                ${student.department}
                            </p>


                            <p>
                                <strong>
                                    Semester:
                                </strong>
                                ${student.semester}
                            </p>


                            <p>
                                <strong>
                                    Total:
                                </strong>
                                ${result.total}
                            </p>


                            <p>
                                <strong>
                                    Average:
                                </strong>
                                ${result.average.toFixed(2)}
                            </p>


                            <p>
                                <strong>
                                    Grade:
                                </strong>
                                ${result.grade}
                            </p>


                            <p>
                                <strong>
                                    Status:
                                </strong>
                                ${result.status}
                            </p>

                        </div>

                    </div>

                `;

            });

        })


        .catch(function(error) {


            task4SearchOutput.innerHTML = `

                <div class="alert alert-danger">

                    Error: ${error}

                </div>

            `;

        })


        .finally(function() {


            task4SearchOutput.innerHTML += `

                <p class="mt-2">
                    Search completed
                </p>

            `;

        });

}



// Automatically demonstrate Part A

searchUsingPromiseChain(
    "BSCS-001"
);



// =========================================================
// TASK 4 - PART B
// ASYNC / AWAIT
// =========================================================

async function showResult(rollNumber) {


    task4SearchOutput.innerHTML = `

        <p>
            Searching...
        </p>

    `;



    try {


        const student =
            await findStudent(
                rollNumber
            );


        const result =
            await calculateResult(
                student
            );



        task4SearchOutput.innerHTML = `

            <div class="card">

                <div class="card-body">

                    <h5>
                        Student: ${student.name}
                    </h5>


                    <p>
                        <strong>
                            Roll No:
                        </strong>
                        ${student.rollNumber}
                    </p>


                    <p>
                        <strong>
                            Department:
                        </strong>
                        ${student.department}
                    </p>


                    <p>
                        <strong>
                            Semester:
                        </strong>
                        ${student.semester}
                    </p>


                    <p>
                        <strong>
                            Total:
                        </strong>
                        ${result.total}
                    </p>


                    <p>
                        <strong>
                            Average:
                        </strong>
                        ${result.average.toFixed(2)}
                    </p>


                    <p>
                        <strong>
                            Grade:
                        </strong>
                        ${result.grade}
                    </p>


                    <p>
                        <strong>
                            Status:
                        </strong>
                        ${result.status}
                    </p>

                </div>

            </div>

        `;


    } catch (error) {


        task4SearchOutput.innerHTML = `

            <div class="alert alert-danger">

                Error: ${error}

            </div>

        `;


    } finally {


        task4SearchOutput.innerHTML += `

            <p class="mt-2">
                Search completed
            </p>

        `;

    }

}



// =========================================================
// TASK 4 - PART C
// SEARCH BUTTON
// =========================================================

searchButton.addEventListener(
    "click",
    function() {


        const rollNumber =
            rollNumberInput.value.trim();



        if (rollNumber === "") {


            task4SearchOutput.innerHTML = `

                <div class="alert alert-danger">

                    Please enter a roll number.

                </div>

            `;

            return;

        }



        showResult(
            rollNumber
        );

    }
);



// =========================================================
// TASK 4 - PART D
// PROMISE.ALL + MAP
// =========================================================

async function loadAllResults() {


    task4AllOutput.innerHTML = `

        <p>
            Loading all results...
        </p>

    `;



    try {


        // Promise.all runs all calculations together

        const allResults =
            await Promise.all(

                resultDatabase.map(
                    async function(student) {


                        const result =
                            await calculateResult(
                                student
                            );


                        return {

                            student: student,

                            result: result

                        };

                    }
                )

            );



        // Counters

        let passedStudents = 0;

        let failedStudents = 0;



        // Cards

        let studentCards = "";



        allResults.forEach(
            function(item) {


                const student =
                    item.student;


                const result =
                    item.result;



                if (
                    result.status === "Pass"
                ) {

                    passedStudents++;

                } else {

                    failedStudents++;

                }



                studentCards += `

                    <div class="card student-card">

                        <div class="card-body">

                            <h5>
                                Student: ${student.name}
                            </h5>


                            <p>
                                <strong>
                                    Roll No:
                                </strong>
                                ${student.rollNumber}
                            </p>


                            <p>
                                <strong>
                                    Department:
                                </strong>
                                ${student.department}
                            </p>


                            <p>
                                <strong>
                                    Semester:
                                </strong>
                                ${student.semester}
                            </p>


                            <p>
                                <strong>
                                    Total:
                                </strong>
                                ${result.total}
                            </p>


                            <p>
                                <strong>
                                    Average:
                                </strong>
                                ${result.average.toFixed(2)}
                            </p>


                            <p>
                                <strong>
                                    Grade:
                                </strong>
                                ${result.grade}
                            </p>


                            <p>
                                <strong>
                                    Status:
                                </strong>
                                ${result.status}
                            </p>

                        </div>

                    </div>

                `;

            }
        );



        // Display everything

        task4AllOutput.innerHTML = `

            <h4>
                All Student Results
            </h4>


            ${studentCards}


            <div class="card mt-4">

                <div class="card-body">

                    <h4>
                        Final Statistics
                    </h4>


                    <p>
                        <strong>
                            Total Students:
                        </strong>
                        ${allResults.length}
                    </p>


                    <p>
                        <strong>
                            Passed Students:
                        </strong>
                        ${passedStudents}
                    </p>


                    <p>
                        <strong>
                            Failed Students:
                        </strong>
                        ${failedStudents}
                    </p>

                </div>

            </div>

        `;


    } catch (error) {


        task4AllOutput.innerHTML = `

            <div class="alert alert-danger">

                Error: ${error}

            </div>

        `;

    }

}



// =========================================================
// LOAD ALL RESULTS BUTTON
// =========================================================

loadAllButton.addEventListener(
    "click",
    loadAllResults
);