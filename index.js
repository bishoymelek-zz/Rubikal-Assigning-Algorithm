"use strict";
/**
 * Rubikal algorithm test
 * any contribution will be much appreciated
 */
exports.__esModule = true;
// coach class
var Coach = /** @class */ (function () {
    function Coach(id) {
        this.studentsAssigned = [];
        this.id = id;
    }
    // add the students ids to the Coach Object
    Coach.prototype.assignStudent = function (studentsAssigned) {
        this.studentsAssigned.push(studentsAssigned);
    };
    return Coach;
}());
exports.Coach = Coach;
// student class
var Student = /** @class */ (function () {
    function Student(id) {
        this.id = id;
    }
    return Student;
}());
exports.Student = Student;
// this function will calculate the total num that every Coach will has
function makeTheCalc(studentsToAdd, coaches) {
    var existingNum = null;
    // how many students are assigned to all the coaches combined
    for (var q = 0; q < coaches.length; q++) {
        if (coaches[q].studentsAssigned.length) {
            existingNum = existingNum + coaches[q].studentsAssigned.length;
        }
    }
    // how many students per coach ? decimal num
    var numOfStudentsPerCoach = (existingNum + studentsToAdd) / coaches.length;
    // total num of students in decimal needs to be assigned
    var howMoreToAssign = Math.round((numOfStudentsPerCoach % 1) * coaches.length);
    // now, how many students of those will be assigned to each coach ?
    var howMoreToAssignPerCoach = (howMoreToAssign >= 2) ? (howMoreToAssign / (coaches.length - 1)) : null;
    // this var to let it be just the num of students if the coaches num was even
    var roundedNum = parseInt(numOfStudentsPerCoach);
    return { howMoreToAssign: howMoreToAssign, howMoreToAssignPerCoach: howMoreToAssignPerCoach, roundedNum: roundedNum };
}
exports.makeTheCalc = makeTheCalc;
var algorithm = /** @class */ (function () {
    function algorithm() {
    }
    // function to assign the students to the coaches and vice versa
    algorithm.prototype.assignProccess = function (students, coaches) {
        var numOfStudentsPerCoach = students.length / coaches.length;
        var studentIndex = 0;
        if (numOfStudentsPerCoach === parseInt(numOfStudentsPerCoach, 10)) {
            // loop on coaches
            for (var y = 0; y < coaches.length; y++) {
                // loop on students should be added
                for (var index2 = 0; index2 < numOfStudentsPerCoach; index2++) {
                    coaches[y].assignStudent(students[studentIndex].id);
                    studentIndex++;
                }
            }
        }
        else {
            // the results from the calcutions we did
            var vars = makeTheCalc(students.length, coaches);
            // loop on coaches
            for (var e = 0; e < coaches.length; e++) {
                var studNum = vars.roundedNum - coaches[e].studentsAssigned.length;
                // loop on students should be added                
                for (var z = 0; z < studNum; z++) {
                    coaches[e].assignStudent(students[studentIndex].id);
                    studentIndex++;
                }
                // if we went here,so we have more than a student needs to be assigned
                if (vars.howMoreToAssign >= 2) {
                    if (vars.howMoreToAssignPerCoach > 1) {
                        for (var L = 0; L < vars.howMoreToAssignPerCoach; L++) {
                            coaches[e].assignStudent(students[studentIndex].id);
                            // count a more student index as we assigned two students here
                            studentIndex++;
                            vars.howMoreToAssign--;
                        }
                    }
                    else {
                        coaches[e].assignStudent(students[studentIndex].id);
                        // count a more student index as we assigned two students here
                        studentIndex++;
                        vars.howMoreToAssign--;
                    }
                    // // this will let us don't get into the if statment with the same coach
                    // coachDoneAddMore = true;
                }
                else if (vars.howMoreToAssign === 1) {
                    // assign the next student as well.. that way will we will assign the only student we needed to assign to a coach 
                    coaches[e].assignStudent(students[studentIndex + 1].id);
                    // remove the only student we needed to assign to a coach
                    vars.howMoreToAssign--;
                    // count a more student index as we assigned two students here
                    studentIndex++;
                }
            }
        }
        // return the coaches objects after finishing
        return coaches;
    };
    return algorithm;
}());
exports.algorithm = algorithm;
