"use strict";
exports.__esModule = true;
var index_1 = require("../index");
var chai_1 = require("chai");
// here is where we generate the students and coaches objects
function generateCoachesObj(coachNum) {
    var coachesQueue = [];
    // coaches queue we have
    for (var index = 1; index <= coachNum; index++) {
        // push the students objects to the queue
        coachesQueue.push(new index_1.Coach('c' + index));
    }
    return coachesQueue;
}
exports.generateCoachesObj = generateCoachesObj;
function generateStudentsObj(studNum, char) {
    // coaches queue we have
    var studentsQueue = [];
    for (var index = 1; index <= studNum; index++) {
        // push the students objects to the queue
        studentsQueue.push(new index_1.Student('s' + char + index));
    }
    return studentsQueue;
}
exports.generateStudentsObj = generateStudentsObj;
var global;
describe("Problem 1, assigning students to coaches(with no any assigned students", function () {
    it('should assign 2 students to each coach', function () {
        var coachesObj = generateCoachesObj(3);
        var studentsObj = generateStudentsObj(6, '-');
        var result = global = new index_1.algorithm().assignProccess(studentsObj, coachesObj);
        chai_1.expect(result).to.have.lengthOf(3);
        chai_1.expect(result).to.be.an('array');
    });
    it('should assign 3 students to first two coachs and only 2 to the last coach', function () {
        var coachesObj = generateCoachesObj(3);
        var studentsObj = generateStudentsObj(8, '-');
        var result = new index_1.algorithm().assignProccess(studentsObj, coachesObj);
        // console.log(result);
        chai_1.expect(result).to.be.an('array');
        chai_1.expect(result).to.have.lengthOf(3);
        chai_1.expect(result[0].studentsAssigned).to.have.lengthOf(3);
        chai_1.expect(result[2].studentsAssigned).to.have.lengthOf(2);
    });
    it('should assign 4 students to first coach and 3 to each coach left', function () {
        var coachesObj = generateCoachesObj(3);
        var studentsObj = generateStudentsObj(10, '-');
        var result = new index_1.algorithm().assignProccess(studentsObj, coachesObj);
        chai_1.expect(result).to.be.an('array');
        chai_1.expect(result).to.have.lengthOf(3);
        chai_1.expect(result[0].studentsAssigned).to.have.lengthOf(4);
        chai_1.expect(result[2].studentsAssigned).to.have.lengthOf(3);
        chai_1.expect(result[2].studentsAssigned[2]).to.equal('s-10');
    });
    it('should assign 7 students to first two coachs and only 6 to the last coach', function () {
        var coachesObj = generateCoachesObj(3);
        var studentsObj = generateStudentsObj(20, '-');
        var result = new index_1.algorithm().assignProccess(studentsObj, coachesObj);
        chai_1.expect(result).to.be.an('array');
        chai_1.expect(result).to.have.lengthOf(3);
        chai_1.expect(result[0].studentsAssigned).to.have.lengthOf(7);
        chai_1.expect(result[1].studentsAssigned).to.have.lengthOf(7);
        chai_1.expect(result[2].studentsAssigned).to.have.lengthOf(6);
        chai_1.expect(result[0].studentsAssigned[6]).to.equal('s-7');
    });
});
describe("Problem 2, Assigning students to Coaches who already have students assigned to them", function () {
    it('should assign 2 students to each coach', function () {
        var studentsObj = generateStudentsObj(6, '_');
        var result = new index_1.algorithm().assignProccess(studentsObj, global);
        chai_1.expect(result).to.have.lengthOf(3);
        chai_1.expect(result).to.be.an('array');
    });
    it('should assign more 7 students to the first 2 coaches and 6 to the third one', function () {
        var studentsObj = generateStudentsObj(20, '_');
        var result = new index_1.algorithm().assignProccess(studentsObj, global);
        chai_1.expect(result).to.have.lengthOf(3);
        chai_1.expect(result).to.be.an('array');
    });
});
