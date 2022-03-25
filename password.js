const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,

});

reader.question('Welcome to the password validator. Enter a password')

    function(input){

        console.log(input)
    } if(input.length){
        console.log('failure')
    } else {
        console.log('Success')
    }

    reader.close 