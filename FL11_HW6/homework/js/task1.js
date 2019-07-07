let x1 = +prompt('Enter x1');
let y1 = +prompt('Enter y1');
let x2 = +prompt('Enter x2');
let y2 = +prompt('Enter y2');
let x3 = +prompt('Enter x3');
let y3 = +prompt('Enter y3');
const numOfCoordinates = 2;

if ((x1+x2)/numOfCoordinates === x3 && (y1+y2)/numOfCoordinates === y3){
    console.log(true)
} else {
    console.log(false)
}

