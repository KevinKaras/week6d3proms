function num1(){
    return 1;
}
async function num2(){
    return 2;
}

// console.log(num1(), num2()

async function waiting(){
    const value = await num2();
    console.log(value);
}

// waiting()

async function waitForMyPromise() {
    const promise = new Promise(resolve =>{
        setTimeout(()=>{
            resolve('done1');
        },1000);
    })
    const result = await promise;
    console.log('my promise is: ', result);
    new Promise(resolve =>{
        setTimeout(()=>{
            resolve('done2')
        }, 1500)
    }).then(response => {console.log('then my other promise is: ', response)})
}

// waitForMyPromise();

// console.log("im going to run even as promise evalutes")

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function testWait() {
    await wait(2000)
    console.log("test message");
}
// testWait();

const tryRandomPromise = (random) => {
    return new Promise((resolve, reject) => {
        if (random > 0.5) resolve("Success!!!");
        else reject("random error");
    });
};

// for (let i = 1; i < 10; i++) {
//     const random = Math.random();
//     wait(2000 + random * 1000)
//         .then(() => tryRandomPromise(random))
//         .then(result => console.log("random try #", i, result))
//         .catch(error => console.log("random try #", i, error));
// }

const tryTryAgain = async (i) => {
    const random = Math.random();

    await wait(3000 + random * 1000);
    try {
        const result = await tryRandomPromise(random);
        console.log("random again #", i, result);
    } catch (err) {
        console.log("random again #", i, err);
    }
};

for (let i = 1; i < 10; i++) {
    tryTryAgain(i);
}

console.log("end of program");