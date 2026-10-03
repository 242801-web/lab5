// =========================================================
// DEPARTMENT NAME
// =========================================================

export const DEPARTMENT_NAME = "Computer Science";



// =========================================================
// CALCULATE TOTAL
// Uses REST PARAMETER
// =========================================================

export function calculateTotal(...marks) {

    let total = 0;

    marks.forEach(function(mark) {

        total = total + mark;

    });

    return total;
}



// =========================================================
// CALCULATE AVERAGE
// Arrow Function
// =========================================================

export const calculateAverage = (...marks) => {

    if (marks.length === 0) {

        return 0;

    }

    const total = calculateTotal(...marks);

    return total / marks.length;
};



// =========================================================
// GET GRADE
// =========================================================

export function getGrade(marks) {

    if (marks >= 80) {

        return "A";

    } else if (marks >= 70) {

        return "B";

    } else if (marks >= 60) {

        return "C";

    } else if (marks >= 50) {

        return "D";

    } else {

        return "F";

    }

}



// =========================================================
// GET STATUS
// Arrow Function + Ternary Operator
// =========================================================

export const getStatus = (marks) => {

    return marks >= 50 ? "Pass" : "Fail";

};



// =========================================================
// DEFAULT EXPORT
// =========================================================

export default function formatStudentResult(
    name,
    rollNumber,
    total
) {

    return `${name} - ${rollNumber} - Total: ${total}`;

}