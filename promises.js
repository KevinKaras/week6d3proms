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

async function waitForMyPromise(){
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

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function testWait(){
    await wait(2000)
    console.log("test message");
}
testWait();


