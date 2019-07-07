let firstLength = +prompt('Enter length of the first side of the triangle');
let secondLength = +prompt('Enter length of the second side of the triangle');
let thirdLength = +prompt('Enter length of the third side of the triangle');

let maxSideLength = Math.max(firstLength, secondLength, thirdLength);

if (maxSideLength < firstLength + secondLength + thirdLength - maxSideLength){
    if(firstLength === secondLength && firstLength === thirdLength && secondLength === thirdLength){
        console.log('Equivalent triangle');
    } else {
        if (firstLength !== secondLength && firstLength !== thirdLength && secondLength !== thirdLength){
            console.log('Normal triangle');
        } else {
            console.log('Isosceles triangle');
        }
    } 
} else {
    console.log('Triangle doesn\'t exist');
}
