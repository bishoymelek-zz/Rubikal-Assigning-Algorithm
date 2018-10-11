import { algorithm, Coach, Student, makeTheCalc } from '../index';
import { expect } from 'chai';


// here is where we generate the students and coaches objects
export function generateCoachesObj(coachNum) {
    let coachesQueue = [];

    // coaches queue we have
    for (let index = 1; index <= coachNum; index++) {
        // push the students objects to the queue
        coachesQueue.push(new Coach('c' + index));
    }
    return coachesQueue;
}
export function generateStudentsObj(studNum, char) {
    // coaches queue we have
    let studentsQueue = [];
    for (let index = 1; index <= studNum; index++) {
        // push the students objects to the queue
        studentsQueue.push(new Student('s' + char + index));
    }
    return studentsQueue;
}

let global;
describe("Problem 1, assigning students to coaches(with no any assigned students", () => {
    it('should assign 2 students to each coach', () => {
        const coachesObj = generateCoachesObj(3);
        const studentsObj = generateStudentsObj(6, '-');
        const result = global = new algorithm().assignProccess(studentsObj, coachesObj);
        expect(result).to.have.lengthOf(3);
        expect(result).to.be.an('array')
    });
    it('should assign 3 students to first two coachs and only 2 to the last coach', () => {
        const coachesObj = generateCoachesObj(3);
        const studentsObj = generateStudentsObj(8, '-');
        const result = new algorithm().assignProccess(studentsObj, coachesObj);
        // console.log(result);

        expect(result).to.be.an('array');
        expect(result).to.have.lengthOf(3);
        expect(result[0].studentsAssigned).to.have.lengthOf(3);
        expect(result[2].studentsAssigned).to.have.lengthOf(2);

    });
    it('should assign 4 students to first coach and 3 to each coach left', () => {
        const coachesObj = generateCoachesObj(3);
        const studentsObj = generateStudentsObj(10, '-');
        const result = new algorithm().assignProccess(studentsObj, coachesObj);
        expect(result).to.be.an('array');
        expect(result).to.have.lengthOf(3);
        expect(result[0].studentsAssigned).to.have.lengthOf(4);
        expect(result[2].studentsAssigned).to.have.lengthOf(3);
        expect(result[2].studentsAssigned[2]).to.equal('s-10');

    });
    it('should assign 7 students to first two coachs and only 6 to the last coach', () => {
        const coachesObj = generateCoachesObj(3);
        const studentsObj = generateStudentsObj(20, '-');
        const result = new algorithm().assignProccess(studentsObj, coachesObj);
        expect(result).to.be.an('array');
        expect(result).to.have.lengthOf(3);
        expect(result[0].studentsAssigned).to.have.lengthOf(7);
        expect(result[1].studentsAssigned).to.have.lengthOf(7);
        expect(result[2].studentsAssigned).to.have.lengthOf(6);
        expect(result[0].studentsAssigned[6]).to.equal('s-7');
    });
});



describe("Problem 2, Assigning students to Coaches who already have students assigned to them", () => {
    it('should assign 2 students to each coach', () => {
        const studentsObj = generateStudentsObj(6, '_');
        const result = new algorithm().assignProccess(studentsObj, global);
        expect(result).to.have.lengthOf(3);
        expect(result).to.be.an('array');
    });
    it('should assign more 7 students to the first 2 coaches and 6 to the third one', () => {
        const studentsObj = generateStudentsObj(20, '_');
        const result = new algorithm().assignProccess(studentsObj, global);
        expect(result).to.have.lengthOf(3);
        expect(result).to.be.an('array');
    });
});
