/**
 * Rubikal algorithm test
 * any contribution will be much appreciated 
 */

// coach class
export class Coach {
    id: string;
    studentsAssigned = [];
    constructor(id: string) {
        this.id = id;
    }
    // add the students ids to the Coach Object
    assignStudent(studentsAssigned: any) {
        this.studentsAssigned.push(studentsAssigned);
    }
}
// student class
export class Student {
    id: string;
    constructor(id: string) {
        this.id = id;
    }
}
// this function will calculate the total num that every Coach will has
export function makeTheCalc(studentsToAdd, coaches) {
    let existingNum = null;
    // how many students are assigned to all the coaches combined
    for (var q = 0; q < coaches.length; q++) {
        if (coaches[q].studentsAssigned.length) {
            existingNum = existingNum + coaches[q].studentsAssigned.length;
        }
    }
    // how many students per coach ? decimal num
    let numOfStudentsPerCoach: any = (existingNum + studentsToAdd) / coaches.length;
    // total num of students in decimal needs to be assigned
    let howMoreToAssign = Math.round((numOfStudentsPerCoach % 1) * coaches.length);
    // now, how many students of those will be assigned to each coach ?
    let howMoreToAssignPerCoach = (howMoreToAssign >= 2) ? (howMoreToAssign / (coaches.length - 1)) : null;
    // this var to let it be just the num of students if the coaches num was even
    let roundedNum = parseInt(numOfStudentsPerCoach);
    return { howMoreToAssign, howMoreToAssignPerCoach, roundedNum }
}

export class algorithm {
    constructor() { }
    // function to assign the students to the coaches and vice versa
    assignProccess(students, coaches) {
        const numOfStudentsPerCoach: any = students.length / coaches.length;
        let studentIndex = 0;
        if (numOfStudentsPerCoach === parseInt(numOfStudentsPerCoach, 10)) {
            // loop on coaches
            for (var y = 0; y < coaches.length; y++) {
                // loop on students should be added
                for (var index2 = 0; index2 < numOfStudentsPerCoach; index2++) {
                    coaches[y].assignStudent(students[studentIndex].id);
                    studentIndex++;
                }
            }
        } else {
            // the results from the calcutions we did
            let vars = makeTheCalc(students.length, coaches);
            // loop on coaches
            for (var e = 0; e < coaches.length; e++) {
                const studNum = vars.roundedNum - coaches[e].studentsAssigned.length;
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

                // check if the more num of students is only one
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
    }
}
