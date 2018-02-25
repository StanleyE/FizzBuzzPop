// make a program that'll print numbers from 0 -150, for every number that is a multiple of 3 print Fizz, multiple of 5 Buzz if it is capable of both Pop

let n = 0;
for (n=0; n<=150; n++){
    if (n % 3 == 0 && n % 5 == 0) {
       console.log('Pop!'); 
    }
    else if (n % 3 == 0) {
        console.log('Fizz');
    }
    else if (n % 5 == 0){
        console.log('Buzz');
    }
    else {
        console.log(n);
    }
}