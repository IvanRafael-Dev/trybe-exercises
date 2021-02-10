
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  // escreva seu código aqui
  let studentsGrade = students.map((student, index) => ({
    name: student,
    average: grades[index].reduce((sum, grade) => sum + grade, 0) / grades[index].length,
  }));
  return studentsGrade;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const expectedReduce = expected.reduce((previousValue, currentValue) => {
  previousValue[currentValue.name] = currentValue.average;
  return previousValue; 
} , {});

console.log(expectedReduce)

assert.deepStrictEqual(studentAverage(), expected);