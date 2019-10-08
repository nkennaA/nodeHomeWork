var hello = require('./homework1.js');

function sayHi() {
    return new Promise(resolve => {
        console.log("I am going to count to 10");
        i = 1;
        setInterval(function(){
            console.log(i);
            i++;
            if(i === 11){
                clearInterval(this);
                resolve();
            }
        }, 1000);
    });
}

sayHi().then(() =>hello.sayBye());