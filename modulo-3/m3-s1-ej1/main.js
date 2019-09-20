const marks = [5, 4, 6, 7, 9];
//const inflatedMarks = marks.map(mark => mark + 1);

const addMark = mark => mark + 1;
const inflatedMarks = marks.map(addMark);

console.log(inflatedMarks);